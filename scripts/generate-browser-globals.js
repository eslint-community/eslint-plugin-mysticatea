/**
 * @author Toru Nagashima
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { CLIEngine } = require("eslint")
const { browser: originalGlobals } = require("globals")

const targetFile = path.resolve(__dirname, "../lib/configs/_browser-globals.js")
const globals = {}
const allows = new Set([
    "atob",
    "btoa",
    "cancelAnimationFrame",
    "document",
    "fetch",
    "indexedDB",
    "localStorage",
    "location",
    "matchMedia",
    "navigator",
    "requestAnimationFrame",
    "sessionStorage",
    "window",
])

for (const key of Object.keys(originalGlobals).sort()) {
    if (key[0] === key[0].toUpperCase() || allows.has(key)) {
        globals[key] = originalGlobals[key] ? "writable" : "readonly"
    }
}

const linter = new CLIEngine({ fix: true })
const rawCode = `/**
* DON'T EDIT THIS FILE WHICH WAS GENERATED BY './scripts/generate-browser-globals.js'.
*/
"use strict"

module.exports = ${JSON.stringify(globals, null, 4)}
`
const code =
    linter.executeOnText(rawCode, "_browser-globals.js").results[0].output ||
    rawCode

fs.writeFileSync(targetFile, code)