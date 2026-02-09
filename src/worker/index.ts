import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

// Triage API endpoint
app.post("/api/triage", async (c) => {
  try {
    const body = await c.req.json();
    const { name, area, time, goal } = body;

    // Validate required fields
    if (!name || !area || !time || !goal) {
      return c.json(
        { error: "Todos os campos são obrigatórios." },
        400
      );
    }

    // Truncate fields to 200 chars
    const payload = {
      name: String(name).slice(0, 200),
      area: String(area).slice(0, 200),
      time: String(time).slice(0, 200),
      goal: String(goal).slice(0, 200),
      date: new Date().toISOString(),
    };

    // Get webhook URL from env or use fallback
    const env = c.env as Env & { GOOGLE_SHEETS_WEBHOOK_URL?: string };
    const sheetUrl =
      env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwGoPQjVM-8Tv4QzqvSdHJTOCGxPIOM1BlqCJEttHXVcP8JsyD2setxofAnAQvuGMkMVg/exec";

    // Forward to Google Sheets
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return c.json(
        { error: "Falha ao registrar no Google Sheets." },
        502
      );
    }

    return c.json({ success: true });
  } catch (error) {
    console.error("Triage API error:", error);
    return c.json({ error: "Erro interno." }, 500);
  }
});

export default app;
