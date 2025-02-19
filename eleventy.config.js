export default async function (eleventyConfig) {
  eleventyConfig.addFilter("getFullYear", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addPassthroughCopy("global.css");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
