// eslint-disable-next-line no-undef
const cracoAlias = require("craco-alias");

// eslint-disable-next-line no-undef
module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                baseUrl: "./src",
                source: "jsconfig",
            }
        }
    ]
};
