/*
	* For a detailed explanation regarding each configuration property, visit:
	* https://jestjs.io/docs/configuration
*/

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/styles/**/*.{ts,tsx}",
		"!src/pages/**/*.{ts,tsx}",
		"!src/services/**/*.{ts,tsx}",
		"!src/Icons/**/*.{ts,tsx}",
		"!src/models/**/*.{ts,tsx}",
		"!src/const/**/*.{ts,tsx}",
	],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
};
