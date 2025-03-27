import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  // ⛔️ Ignorar rutas globales (esto se aplica siempre)
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/components/ui/**", 
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 👇 Desactiva el error de React en JSX (no hace falta importarlo en Next.js)
  {
    files: ["**/*.{jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  // 👇 Agrega settings de React para evitar warning de versión
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];