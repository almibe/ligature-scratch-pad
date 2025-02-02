import { EleventyRenderPlugin } from "@11ty/eleventy"
import SisalPlugin from 'sisal'

console.log("hello")

export default async function (eleventyConfig) {
    // eleventyConfig.addWatchTarget('./src/');
    // eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPlugin(EleventyRenderPlugin)
    eleventyConfig.addPlugin(SisalPlugin)
    return {
      dir: {
        // input: "src",
        output: "_site"
      },
      templateFormats: ['md', '11ty.js', 'liquid'],
    }
}
