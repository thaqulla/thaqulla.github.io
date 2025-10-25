import type { NextConfig } from "next";
import path from "path";
import dotenv from "dotenv";

// .env ファイルを読み込む
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export'
};

export default nextConfig;
