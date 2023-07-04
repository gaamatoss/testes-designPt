module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  testEvviroment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
