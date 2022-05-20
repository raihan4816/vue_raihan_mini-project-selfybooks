module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.transpileOptions = options.transpileOptions || {};
        options.transpileOptions.transforms =
          options.transpileOptions.transforms || {};
        options.transpileOptions.transforms.dangerousTaggedTemplateString = true;
        return options;
      });
  },
};
