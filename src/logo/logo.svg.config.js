module.exports = {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
              inlineStyles: {
                  // customize default plugin options
            },
  
            // or disable plugins
            mergePaths: false,
          },
        },
      },
    ],
  };