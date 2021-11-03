const cracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                baseUrl: './src',
                source: 'jsconfig',
            }
        }
    ],
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
};
