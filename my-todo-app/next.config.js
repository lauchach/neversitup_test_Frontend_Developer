

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://candidate-assignment.neversitup.com/:path*',
        },
      ]
    },
}