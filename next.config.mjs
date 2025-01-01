/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configura o Next.js para gerar arquivos estáticos
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /libheif-bundle\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });

    // Ignorar warnings relacionados ao uso de 'require'
    config.ignoreWarnings = [
      {
        message: /Critical dependency: require function is used/,
      },
    ];

    return config;
  },
};

export default nextConfig;  // Use 'export default' em vez de 'module.exports'
