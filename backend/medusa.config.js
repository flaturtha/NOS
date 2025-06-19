const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL || "redis://redis:6379",
    database_url: process.env.DATABASE_URL || "postgres://medusa:medusadev@postgres:5432/medusa",
    store_cors: "http://localhost:3000",
    admin_cors: "http://localhost:7001"
  },
  plugins: [
    "medusa-fulfillment-manual",
    {
      resolve: "medusa-payment-stripe",
      options: {
        api_key: process.env.STRIPE_API_KEY,
      },
    },
  ],
}

