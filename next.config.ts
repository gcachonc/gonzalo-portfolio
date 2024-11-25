// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "res.cloudinary.com",
              port: "",
              pathname: "/dzc4qte1c/**", // Ruta específica para tus imágenes
            },
          ],
      }
};

module.exports = withNextIntl(config);