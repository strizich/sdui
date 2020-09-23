module.exports = {
  preset: 'ts-jest',
  globals: {
    __USE_BUILD__: process.argv.indexOf('-use-build') >= 0
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFiles: ['./setup.js'],
  moduleNameMapper: {
    '\\.(scss|css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
}
