/** @type {import('next').NextConfig} */
const nextConfig = {
  // Não precisa da configuração de 'images.domains' pois não usa imagens externas
  // Configurações opcionais úteis:
  output: 'standalone', // Melhor para deploy na Vercel
  images: {
    unoptimized: true // Desativa otimização se quiser (opcional)
  }
}

module.exports = nextConfig
