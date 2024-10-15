"use strict"

const config = require("../../../lib/configs/es2024")
const Rules = require("./_rules")

describe("'es2024.js'", () => {
    it("should be a valid config.", () => {
        Rules.validateConfig(config, "es2024.js")
    })
})
