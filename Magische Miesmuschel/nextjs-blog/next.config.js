module.exports = {
    webpack: (config, { isServer }) => {
      // If you're not using Next.js 12 or later, replace `config.module.rules` with `config.module.rules[0].oneOf`
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/',
              outputPath: 'static/',
            },
          },
        ],
      });
      return config;
    },
  };
  