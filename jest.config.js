/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/packages', '<rootDir>/apps/backend'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  moduleNameMapper: {
    '^@refactory/auth$': '<rootDir>/packages/auth/src/index.ts',
    '^@refactory/rbac$': '<rootDir>/packages/rbac/src/index.ts',
    '^@refactory/integration-hub$': '<rootDir>/packages/integration-hub/src/index.ts',
    '^@refactory/metrics$': '<rootDir>/packages/metrics/src/index.ts',
    '^@refactory/dashboard$': '<rootDir>/packages/dashboard/src/index.ts',
  },
  passWithNoTests: true,
  collectCoverageFrom: [
    'packages/*/src/**/*.ts',
    'apps/backend/src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
};
