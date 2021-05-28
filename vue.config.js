module.exports = {
    devServer: {
        proxy: {
            '^/api/v1/': {
                target: 'https://jupiter.d.greeninvoice.co.il',
                ws: true,
                changeOrigin: true
            }
        }
    }
}