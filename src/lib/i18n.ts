import dictionary from "@/locales/dictionary.json";

type Lang = "ja" | "en" | "fr";

/**
 * 辞書からキーを取得して翻訳文字列を返す関数
 * @param key - 例: "welcome.title"
 * @param lang - 言語コード: "ja" | "en" | "fr"
 * @param vars - プレースホルダ置換用オブジェクト (例: { name: "太郎" })
 */
export function t(
  key: string,
  lang: Lang,
  vars?: Record<string, string>,
): string {
  // ネストされたキーをドット区切りで解決
  const value = key.split(".").reduce(
    (obj: any, k) => (obj ? obj[k] : undefined), // eslint-disable-line @typescript-eslint/no-explicit-any
    dictionary,
  )?.[lang];

  if (!value) return key; // 未定義キーの場合はそのまま返す

  // {{name}} のようなプレースホルダを置換
  return vars
    ? Object.entries(vars).reduce(
        (str, [k, v]) => str.replace(new RegExp(`{{${k}}}`, "g"), v),
        value,
      )
    : value;
}
