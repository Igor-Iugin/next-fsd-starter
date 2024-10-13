const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './'
})

/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	modulePathIgnorePatterns: ['<rootDir>/tests/'],
	testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(customJestConfig)
