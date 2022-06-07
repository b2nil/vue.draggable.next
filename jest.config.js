module.exports = {
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.jsx?$": "@swc/jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  collectCoverageFrom: [
    "<rootDir>/src/vuedraggable.js",
    "<rootDir>/src/util/*.js",
    "<rootDir>/src/core/*.js"
  ],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!(babel-jest|jest-vue-preprocessor|vue)/)"
  ],
};