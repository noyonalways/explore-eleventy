export default async function (eleventyConfig) {
  eleventyConfig.addFilter("getFullYear", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addPassthroughCopy({
    "global.out.css": "css/global.css",
  });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
