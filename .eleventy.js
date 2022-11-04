module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/img')
    eleventyConfig.addPassthroughCopy('src/fonts')
  
    return {
      dir: { 
        input: 'src',
        layouts: '_layouts',
        output: '_site'
    }
    };
  };