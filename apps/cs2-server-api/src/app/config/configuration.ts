export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  DIGITAL_OCEAN: {
    API_KEY: process.env.DIGITAL_OCEAN_API_KEY,
    DROPLET_ID: process.env.DROPLET_ID,
  },
  rcon: {
    options: {
      host: process.env.RCON_IP,
      port: parseInt(process.env.RCON_PORT, 10),
      password: process.env.RCON_PASSWORD,
    },
  },
});
