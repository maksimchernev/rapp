module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["standard-with-typescript", "plugin:react/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/react-in-jsx-scope": "off",
		semi: ["error", "always"],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		indent: ["error", "tab"],
		"@typescript-eslint/indent": ["error", "tab"],
		"@typescript-eslint/semi": ["error", "always"],
		"@typescript-eslint/quotes": ["error", "double"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"@typescript-eslint/prefer-nullish-coalescing": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true,
				},
				singleline: {
					delimiter: "semi", // 'semi' or 'comma'
					requireLast: true,
				},
			},
		],
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/no-floating-promises": "off",
	},
};
