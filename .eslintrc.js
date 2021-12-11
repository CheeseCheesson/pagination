module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
