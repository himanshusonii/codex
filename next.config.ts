  const nextConfig = {
  images: {
    domains: ["codex-new.s3.amazonaws.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://maps.googleapis.com http://maps.google.com",
              "style-src 'self' 'unsafe-inline' https://js.stripe.com https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com https://js.stripe.com data: blob:",
              "connect-src 'self' https://api.stripe.com https://maps.googleapis.com https://o145r4of4g.execute-api.us-east-1.amazonaws.com",
              "frame-src https://js.stripe.com https://maps.googleapis.com",
              "img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https://codex-new.s3.amazonaws.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
