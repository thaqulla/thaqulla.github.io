export default {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react",
    "^@tanstack",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)",
    "^@/components/(.*)",
    "^@/utils/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
