module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.weatherapi.com/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
