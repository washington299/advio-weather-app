/*
	* For a detailed explanation regarding each configuration property, visit:
	* https://jestjs.io/docs/configuration
*/

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/App.tsx",
		"!src/index.tsx",
		"!src/react-app-env.d.ts",
		"!src/components/index.ts",
		"!src/styles/**/*.{ts,tsx}",
		"!src/services/**/*.{ts,tsx}",
	],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
};
