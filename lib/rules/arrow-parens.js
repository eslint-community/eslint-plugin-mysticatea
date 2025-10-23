"use strict"

const { getSourceCode } = require("../eslint-compat")

/**
 * Checks whether a given token is `(`.
 * @param {Token} token - A token to check.
 * @returns {boolean} `true` when the token is `(`.
 */
function isOpenParen(token) {
    return token.type === "Punctuator" && token.value === "("
}

/**
 * Checks whether given two tokens are at a same line.
 * @param {Token} a - A left token.
 * @param {Token} b - A right token.
 * @returns {boolean} `true` when the tokens are at a same line.
 */
function isSameLine(a, b) {
    return a.loc.end.line === b.loc.start.line
}

module.exports = {
    meta: {
        docs: {
            description: "enforce the parentheses style of arrow functions.",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://github.com/eslint-community/eslint-plugin-mysticatea/blob/HEAD/docs/rules/arrow-parens.md",
        },
        fixable: "code",
        messages: {
            expectedParentheses:
                "Expected to enclose this argument with parentheses.",
            unexpectedParentheses:
                "Unexpected parentheses enclosing this argument.",
        },
        schema: [],
        type: "suggestion",
    },
    create(context) {
        const sourceCode = getSourceCode(context)
        return {
            ArrowFunctionExpression(node) {
                const first = sourceCode.getFirstToken(node, node.async ? 1 : 0)
                const before = sourceCode.getTokenBefore(first)

                if (isOpenParen(first)) {
                    if (
                        node.params.length === 1 &&
                        node.params[0].type === "Identifier" &&
                        isOpenParen(before) &&
                        isSameLine(before, first)
                    ) {
                        context.report({
                            node,
                            messageId: "unexpectedParentheses",
                            fix(fixer) {
                                const id = node.params[0]
                                const begin = first.range[0]
                                const end =
                                    sourceCode.getTokenAfter(id).range[1]

                                return fixer.replaceTextRange(
                                    [begin, end],
                                    id.name
                                )
                            },
                        })
                    }
                } else if (!isOpenParen(before) || !isSameLine(before, first)) {
                    context.report({
                        node,
                        messageId: "expectedParentheses",
                        fix(fixer) {
                            const id = node.params[0]

                            return fixer.replaceText(id, `(${id.name})`)
                        },
                    })
                }
            },
        }
    },
}
