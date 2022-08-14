module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'airbnb',
		'next',
		'plugin:storybook/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [ 'react', '@typescript-eslint' ],
	rules: {
		'no-tabs': 'off',
		'no-shadow': 'off',
		'key-spacing': 'off',
		'import/order': 'off',
		'no-unused-vars': 'off',
		'linebreak-style': 'off',
		'arrow-body-style': 'off',
		'no-use-before-define': 'off',
		'class-methods-use-this': 'off',
		'storybook/story-exports': 'off',
		'react/forbid-prop-types': 'off',
		'react/jsx-equals-spacing': 'off',
		'no-promise-executor-return': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-props-no-multi-spaces': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'padded-blocks': [ 'error', 'always' ],
		'react/jsx-indent': [ 'error', 'tab' ],
		'import/extensions': [ 'error', 'never' ],
		'capitalized-comments': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'react/jsx-indent-props': [ 'error', 'tab' ],
		'space-before-function-paren': [ 'error', 'always' ],
		'@typescript-eslint/no-unused-vars': [ 'error' ],
		'max-len': [
			'error',
			{
				code: 250,
				tabWidth: 4,
				ignoreUrls: true,
			},
		],
		camelcase: [
			'error',
			{
				ignoreImports: true,
				ignoreDestructuring: true,
			},
		],
		'no-trailing-spaces': [
			'error',
			{
				ignoreComments: true,
			},
		],
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'always',
				children: 'never',
				propElementValues: 'always',
			},
		],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
			},
		],
		'react/no-unstable-nested-components': [
			'error',
			{
				allowAsProps: true,
			},
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
	},
};
