module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    env: {
        node: true,
        browser: true,
        jest: false,
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    rules: {
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
};
