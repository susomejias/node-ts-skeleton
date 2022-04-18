module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '/__tests__/**.{js,ts}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!.eslintrc.js',
    '!/__tests__/config',
    '!/__mocks__',
    '!/build'
  ],
  transform: {},
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/setupTests.ts'],
  moduleNameMapper: {},
  transformIgnorePatterns: ['./node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/config',
    '<rootDir>/__mocks__',
    '<rootDir>/build'
  ]
};
