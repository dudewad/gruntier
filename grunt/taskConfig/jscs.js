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
                //Update directory path in this directive to go to project dev JS root
                "<%=pkg.directories.dev_root %><%=pkg.directories.js %>*.js",
                //Lint the gruntfile (this shouldn't change ever)
                "<%=pkg.directories.root %>Gruntfile.js",
                //Lint the grunt tasks/configs (set grunt_root)
                "<%=pkg.directories.grunt_root %>**/*.js",
                //Ignore any concatinated files, etc
                "!<%=pkg.directories.dev_root %><%=pkg.directories.js %>app.js"
            ]
        }
    }
};