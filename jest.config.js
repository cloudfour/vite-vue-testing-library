module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
};
