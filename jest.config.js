module.exports = {
    testEnvironment: 'node', 
    transform: {
        '^.+\\.jsx?$': 'babel-jest', 
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'], 
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', 
    },
    testMatch: ['**/tests/**/*.test.js'], 
    verbose: true,
    collectCoverage: true, 
    collectCoverageFrom: [
        'src/**/*.js', 
        '!src/**/index.js',
        '!src/**/__mocks__/**', 
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageDirectory: 'coverage', 
    coverageReporters: ['text', 'lcov', 'html'], 
    transformIgnorePatterns: ['/node_modules/'], 
};