module.exports = {
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    setupTestFrameworkScriptFile: '<rootDir>/config/jest/index.js',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/jest/fileMock.js',
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es)/)"],
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ]
};
