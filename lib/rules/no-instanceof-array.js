"use strict"

const { getScope, getSourceCode } = require("../eslint-compat")

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow 'instanceof' for Array",
            category: "Best Practices",
            url: "https://github.com/eslint-community/eslint-plugin-mysticatea/blob/HEAD/docs/rules/no-instanceof-array.md",
        },
        fixable: "code",
        messages: {
            noInstanceofArray:
                "Unexpected 'instanceof' operator. Use 'Array.isArray' instead.",
        },
        schema: [],
        type: "problem",
    },

    create(context) {
        const sourceCode = getSourceCode(context)

        /**
         * Checks whether the given node is RHS of instanceof.
         *
         * @param {ASTNode} node - The node to check.
         * @returns {boolean} `true` if the node is RHS of instanceof.
         */
        function isRhsOfInstanceof(node) {
            return (
                node.parent.type === "BinaryExpression" &&
                node.parent.operator === "instanceof" &&
                node.parent.right === node
            )
        }

        return {
            "Program:exit"(globalNode) {
                const globalScope = getScope(context, globalNode)
                const variable = globalScope.set.get("Array")

                // Skip if undefined or shadowed
                if (variable == null || variable.defs.length > 0) {
                    return
                }

                for (const reference of variable.references) {
                    const id = reference.identifier
                    const node = id.parent

                    // Skip if it's not instanceof
                    if (!isRhsOfInstanceof(id)) {
                        continue
                    }

                    // Report
                    context.report({
                        node,
                        loc: node.loc,
                        messageId: "noInstanceofArray",
                        fix: (fixer) =>
                            fixer.replaceText(
                                node,
                                `Array.isArray(${sourceCode.getText(
                                    node.left
                                )})`
                            ),
                    })
                }
            },
        }
    },
}
