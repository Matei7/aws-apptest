module.exports = {
	root: true,
	env: {
		browser: true,
	},
	rules: {
		"vue/html-indent": "off",
		"vue/html-closing-bracket-spacing": "off",
		"vue/multi-word-component-names": "off",
		"vue/first-attribute-linebreak": "off",
	},
	plugins: [ 'vue' ],
	extends: [ 'plugin:vue/recommended' ],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	globals: {
		'TAPAdmin': true,
	},
	ignorePatterns: [ '*.config.js' ],
	overrides: [
		{
			files: [ "src/**/*.vue", '"src/**/*.js"' ],
			rules: {
				"prettier/prettier": "off",
				"vue/max-attributes-per-line": "off",
				"vue/html-indent": "off",
				"vue/html-closing-bracket-spacing": "off",
				'vue/html-closing-bracket-newline': [
					'error',
					{
						singleline: 'never',
						multiline: 'never'
					}
				],
			},
		},
	],
};
