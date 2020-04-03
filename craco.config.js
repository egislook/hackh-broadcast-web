const CracoAntDesignPlugin = require("craco-antd");
const { POSTCSS_MODES } = require("@craco/craco");


module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  style: {
    postcss: {
      mode: POSTCSS_MODES.file
    },
  },
}
