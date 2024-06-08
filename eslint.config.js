import pluginVue from "eslint-plugin-vue";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/**
 * @type {import("eslint").ESLint.Options}
 */
const rules = [...pluginVue.configs["flat/strongly-recommended"], eslintPluginPrettier];

export default rules;
