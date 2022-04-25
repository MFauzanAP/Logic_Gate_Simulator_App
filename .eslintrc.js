module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'no-tabs'							: 'off',
		'key-spacing'						: 'off',
		'linebreak-style'					: 'off',
		'no-use-before-define'				: 'off',
		'class-methods-use-this'			: 'off',
		'react/forbid-prop-types'			: 'off',
		'react/jsx-equals-spacing'			: 'off',
		'import/prefer-default-export'		: 'off',
		'react/jsx-filename-extension'		: 'off',
		'react/jsx-props-no-spreading'		: 'off',
		'react/jsx-no-useless-fragment'		: 'off',
		'react/jsx-closing-tag-location'	: 'off',
		'import/no-extraneous-dependencies'	: 'off',
		'react/jsx-one-expression-per-line'	: 'off',
		'padded-blocks'						: [ 'error', 'always' ],
		'react/jsx-indent'					: [ 'error', 'tab' ],
		'capitalized-comments'				: [ 'error', 'always' ],
		'object-curly-spacing'				: [ 'error', 'always' ],
		'array-bracket-spacing'				: [ 'error', 'always' ],
		'react/jsx-indent-props'			: [ 'error', 'tab' ],
		'space-before-function-paren'		: [ 'error', 'always' ],
		'max-len'							: [ 'error', {
			code								: 175,
			tabWidth							: 4,
		} ],
		camelcase							: [ 'error', {
			ignoreImports						: true,
			ignoreDestructuring					: true,
		} ],
		'react/jsx-curly-brace-presence'	: [ 'error', {
			props								: 'always',
			children							: 'never',
			propElementValues					: 'always',
		} ],
		'react/no-unstable-nested-components': [ 'error', {
			allowAsProps						: true,
		} ],
		indent 								: [ 'error', 'tab', {
			SwitchCase							: 1,
		} ],
	},
};
