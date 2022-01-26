const withMdx = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMdx({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
});
