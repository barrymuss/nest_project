const nextJest = require('next/jest');

// @ts-ignore
const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
	testEnvironment: 'jsdom',
	clearMocks: true,
	moduleDirectories: ['node_modules', 'src'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	testRegex: '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
};

module.exports = createJestConfig(customJestConfig);
