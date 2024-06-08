import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/**
 * @type {import("eslint").ESLint.Options}
 */
const rules = [
	...pluginVue.configs["flat/strongly-recommended"],
	{
		/**
		 * Better Vue Setup
		 */
		files: ["**/*.vue"],
		rules: {
			"vue/block-order": [
				"error",
				{
					order: ["script:not([setup])", "script[setup]", "template", "style[scoped]", "style:not([scoped])"],
				},
			],
		},
	},
	eslintPluginPrettier,
];

export default rules;
