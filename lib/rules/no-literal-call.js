/**
 * @fileoverview Rule to disallow a call of a literal.
 * @author Toru Nagashima
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const LITERAL_TYPE = /^(?:(?:Array|Object)Expression|(?:Template)?Literal)$/u
const LITERAL_AND_CLASS_TYPE =
    /^(?:(?:Array|Class|Object)Expression|(?:Template)?Literal)$/u

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow a call of a literal.",
            category: "Possible Errors",
            recommended: false,
            url: "https://github.com/eslint-community/eslint-plugin-mysticatea/blob/HEAD/docs/rules/no-literal-call.md",
        },
        fixable: null,
        messages: {
            noLiteralCall: "This is not a function.",
        },
        schema: [],
        type: "problem",
    },

    create(context) {
        /**
         * Reports a given node if it's a literal.
         *
         * @param {ASTNode} callee - A callee node to report.
         * @param {RegExp} pattern - A pattern of literal types.
         * @returns {void}
         */
        function check(callee, pattern) {
            if (pattern.test(callee.type)) {
                context.report({
                    node: callee,
                    messageId: "noLiteralCall",
                })
            }
        }

        return {
            CallExpression(node) {
                check(node.callee, LITERAL_AND_CLASS_TYPE)
            },

            NewExpression(node) {
                check(node.callee, LITERAL_TYPE)
            },

            TaggedTemplateExpression(node) {
                check(node.tag, LITERAL_AND_CLASS_TYPE)
            },
        }
    },
}
