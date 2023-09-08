const OpenProps = require('open-props');
const postcssJitProps = require('postcss-jit-props');
const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
		postcssPresetEnv({
			stage: 0,
			features: {
				"logical-properties-and-values": false
			}
		}),
    require('autoprefixer'),
  ]
}