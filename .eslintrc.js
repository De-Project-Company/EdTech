module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['react-app', 'react-app/jest'],
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
};
