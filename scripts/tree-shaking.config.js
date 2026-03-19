
      // Tree shaking optimization
      module.exports = {
        mode: 'production',
        optimization: {
          usedExports: true,
          sideEffects: false,
        },
        module: {
          rules: [
            {
              test: /\\.js$/,
              sideEffects: false,
            },
          ],
        },
      }
    