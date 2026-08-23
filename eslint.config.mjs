import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "node_modules/**",
      "out/**",
      "dist/**",
      ".tanstack/**",
      "build/**",
    ],
  },
);

export default eslintConfig;
