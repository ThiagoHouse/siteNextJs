module.exports = {
    traillingSalsh: true,
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    }
}