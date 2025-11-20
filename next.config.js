/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = withImages({
  // GitHub Pages에서 CSS, JS, 이미지 경로 맞춤
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          return pathname.endsWith('/') ? pathname : pathname + '/';
        }
        return '';
      } catch {
        return '';
      }
    }
    return '';
  })(),

  webpack: (config) => {
    // '@'를 루트 디렉토리로 참조 가능
    config.resolve.alias['@'] = __dirname;
    return config;
  },

  future: {
    webpack5: true,
  },
});
