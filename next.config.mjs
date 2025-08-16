/ @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Replace with actual domains where images are hosted
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp']
},
  webpack: (config) => {
    // Custom webpack configuration for luxury design elements
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
}
};

export default {
  ...nextConfig,
  env: {
    BRAND_NAME: 'luxury FashionTV cosmetics',
    THEME_COLORS: {
      primary: '#FFC0CB', // Pink
      secondary: '#FFFFFF', // White
    }
},
  publicRuntimeConfig: {
    brandName: 'luxury FashionTV cosmetics',
    themeColors: {
      primary: '#FFC0CB',
      secondary: '#FFFFFF'
}
}
};