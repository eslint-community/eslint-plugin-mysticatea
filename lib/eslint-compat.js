/* eslint-disable no-restricted-properties */

"use strict"

function getDeclaredVariables(context, node) {
    return (
        getSourceCode(context).getDeclaredVariables?.(node) ??
        context.getDeclaredVariables(node)
    )
}

function getSourceCode(context) {
    return context.sourceCode ?? context.getSourceCode()
}

function getScope(context, node) {
    return getSourceCode(context).getScope?.(node) ?? context.getScope()
}

module.exports = {
    getDeclaredVariables,
    getSourceCode,
    getScope,
}
