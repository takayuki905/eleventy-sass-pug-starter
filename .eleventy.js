const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = function (eleventyConfig) {
  // SCSSコンパイル後のCSSファイルをコピー
  eleventyConfig.addPassthroughCopy("dist/css");
  // Pugコンパイル後のHTMLファイルをコピー（必要な場合）
  eleventyConfig.addPassthroughCopy("dist/html");

  // その他の設定
  // ...
};
