/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	singleAttributePerLine: true,
};

export default config;
