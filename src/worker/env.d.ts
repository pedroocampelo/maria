export {};

declare global {
  /**
   * Environment shape used inside the worker.
   * Adjust keys to match your real usage in src/worker/index.ts.
   */
  type Env = {
    [key: string]: string | undefined;
  };
}
