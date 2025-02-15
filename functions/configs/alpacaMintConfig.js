const fs = require("fs")
const { Location, ReturnType, CodeLanguage } = require("@chainlink/functions-toolkit")

const requestConfig = {
    source: fs.readFileSync("./functions/sources/alpacaBalance.js"),
    codeLocation: Location.Inline,
    secrets: { alpacaKey: process.env.ALPACA_API_KEY, alpacaSecret: process.env.ALPACA_SECRET_KEY },
    secretsLocation: Location.DONHosted,
    args: [],
    CodeLanguage: CodeLanguage.JavaScript,
    expectedReturnType: ReturnType.uint256
}

module.exports = requestConfig