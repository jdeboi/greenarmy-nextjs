import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  
  // This tells Jest to transpile d3 and any other ES6 modules you use
  transformIgnorePatterns: [
    "/node_modules/(?!d3-.+)"
  ]
};

export default createJestConfig(config);