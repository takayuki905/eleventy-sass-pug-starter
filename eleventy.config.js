const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = function (eleventyConfig) {
  // SCSSコンパイル後のCSSファイルをコピー
  eleventyConfig.addPassthroughCopy({ "dist/css": "css" });
  // Pugコンパイル後のHTMLファイルをコピー（必要な場合）
  eleventyConfig.addPassthroughCopy({ dist: "." });

  // その他の設定
  return {
    dir: {
      input: ".",
      output: "_site",
    },
  };
};
