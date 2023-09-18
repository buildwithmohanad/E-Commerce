/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=10, stale-while-revalidate=59"
          }
        ]
      }
    ];
  },
  images: {
    domains: ["cdn.chec.io"]
  }
};

module.exports = nextConfig;
