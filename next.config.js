/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para páginas estáticas
  images: {
    unoptimized: true // Necessário para export estático
  },
  // Remove a configuração 'standalone' se não estiver usando
}

module.exports = nextConfig
