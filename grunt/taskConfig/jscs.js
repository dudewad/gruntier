module.exports = {
    options: {
        "requireCamelCaseOrUpperCaseIdentifiers": true,
        "requireCapitalizedConstructors": true,
        "requireCommaBeforeLineBreak": true,
        "requireCurlyBraces": [
            "if",
            "else",
            "for",
            "while",
            "do",
            "try",
            "catch"
        ],
        "requireDotNotation": true,
        "requireParenthesesAroundIIFE": true,
        "requireSpaceAfterKeywords": [
            "return"
        ],
        "requireSpaceAfterBinaryOperators": true,
        "requireSpacesInConditionalExpression": true,
        "disallowDanglingUnderscores": true,
        "disallowEmptyBlocks": true,
        "disallowKeywords": [
            "with"
        ],
        "requireKeywordsOnNewLine": [
            "if",
            "else",
            "catch",
            "case",
            "default",
            "switch",
            "for",
            "while"
        ],
        "disallowMixedSpacesAndTabs": true,
        "disallowMultipleLineStrings": true,
        "disallowMultipleVarDecl": true,
        "disallowPaddingNewlinesInBlocks": true,
        "disallowSpaceAfterObjectKeys": true,
        "disallowSpaceBeforePostfixUnaryOperators": true,
        "disallowSpaceAfterPrefixUnaryOperators": true,
        "disallowSpacesInsideArrayBrackets": true,
        "disallowSpaceBeforeBlockStatements": true,
        "disallowSpacesInsideParentheses": true,
        "disallowSpacesInsideObjectBrackets": true,
        "disallowSpacesInFunctionDeclaration": {
            "beforeOpeningRoundBrace": true,
            "beforeOpeningCurlyBrace": true
        },
        "disallowTrailingComma": true,
        "disallowTrailingWhitespace": true,
        "safeContextKeyword": "context",
        "validateJSDoc": {
            "checkParamNames": true,
            "checkRedundantParams": true,
            "requireParamTypes": true
        }
    },

    dist: {
        files: {
            src: [
                "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
                "<%=pkg.directories.root %>Gruntfile.js",
                "<%=pkg.directories.grunt_root %>**\\*.js",
                "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
            ]
        }
    }
};