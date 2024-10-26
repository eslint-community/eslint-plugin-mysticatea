"use strict"

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "plugin:@eslint-community/mysticatea/es2015",
        "plugin:@eslint-community/mysticatea/+eslint-plugin",
    ],
    rules: {
        "no-restricted-properties": [
            "error",
            {
                object: "context",
                property: "getDeclaredVariables",
                message:
                    "If you are using it in a test case, use test/test-lib/eslint-compat.mjs#getDeclaredVariables instead. Other than that, the API should also be compatible with ESLint v9.",
            },
            {
                object: "context",
                property: "getSourceCode",
                message:
                    "If you are using it in a test case, use test/test-lib/eslint-compat.mjs#getSourceCode instead. Other than that, the API should also be compatible with ESLint v9.",
            },
            {
                object: "context",
                property: "getScope",
                message:
                    "If you are using it in a test case, use test/test-lib/eslint-compat.mjs#getScope instead. Other than that, the API should also be compatible with ESLint v9.",
            },
        ],
    },
    overrides: [
        {
            files: ["lib/utils.js", "scripts/*.js"],
            rules: {
                "@eslint-community/mysticatea/node/no-sync": "off",
            },
        },
        {
            files: [
                "lib/configs.js",
                "lib/foreign-rules/ts.js",
                "lib/processors.js",
                "lib/rules.js",
            ],
            rules: {
                "@eslint-community/mysticatea/node/global-require": "off",
            },
        },
    ],
}
