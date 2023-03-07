// jest.config.js
import nextJest from "next/jest";
import type { JestConfigWithTsJest } from "ts-jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig: JestConfigWithTsJest = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^~/(.*)": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/utils/testSetup.ts"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
