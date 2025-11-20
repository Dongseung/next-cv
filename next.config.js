/* eslint-disable */
const withImages = require('next-images');
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = withImages({
  // GitHub Pages에서 CSS, JS, 이미지 경로 맞춤
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        console.log('> Detected homepage url in package.json');
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          console.log(`> Apply '${pathname}' to assetPrefix(subPath)`);
          return pathname.endsWith('/') ? pathname : pathname + '/';
        }
        return '';
      } catch {
        console.log('> Cannot parse homepage URL, assetPrefix not applied');
        return '';
      }
    }
    return '';
  })(),

  // 추가 설정 가능: alias, webpack 등
  webpack: (config) => {
    // '@'를 루트 디렉토리로 참조 가능
    config.resolve.alias['@'] = __dirname;
    return config;
  },

  // 필요하면 future-proof 옵션 추가
  future: {
    webpack5: true, // Next.js 10 사용 시 Webpack 5 강제
  },
});
