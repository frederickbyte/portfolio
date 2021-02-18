// RSS feed
const rssPlugin = require('@11ty/eleventy-plugin-rss');
// Filters
const dateFilter = require('./src/filters/date-filter.js');
const postDateFilter = require('./src/filters/post-date-filter.js');
// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';
// Reference to our sort-by-display-order function.
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

module.exports = (config) => {
  // Add date filters.
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('postDateFilter', postDateFilter);
  // Plugins
  config.addPlugin(rssPlugin);
  // Passthrough CNAME for domain.
  config.addPassthroughCopy("CNAME");
  // PAssthrough resume PDF file.
  config.addPassthroughCopy("resume.pdf");
  // Only minify HTML if we are in production.
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }
  // Returns work items, sorted by display order
  config.addCollection('work', (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });
  // Returns work items, sorted by display order then filtered by featured
  config.addCollection('featuredWork', (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter((x) => x.data.featured);
  });
  // Returns a collection of blog posts ordered newest -> oldest.
  config.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
