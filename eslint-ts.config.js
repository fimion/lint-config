import eslint from "@eslint/js";
import tsEsLint from "typescript-eslint";
import base from "./eslint.config.js";

/**
 *
 * @type {import("eslint").ESLint.Options[]}
 */
const rules = [eslint.configs.recommended, ...tsEsLint.configs.recommended, ...base];
