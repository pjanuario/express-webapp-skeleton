module.exports = {
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development"],
    default: "production",
    env: "NODE_ENV"
  },
  port: {
    doc: "The applicaton running port",
    format: 'port',
    default: 8080,
    env: "PORT"
  }
};
