/**
 * Entry Vercel serverless — không gọi app.listen(), chỉ export Express app.
 * @see https://vercel.com/docs/frameworks/backend/express
 */
import app from "../dist/app.mjs";

export default app;
