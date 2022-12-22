export default () => ({
  APP_URL: process.env.APP_URL,
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    mysql: {
      type: process.env.DB_CONNECTION || 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 3000,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: ['**/*.entity.js'],
      migrations: ['dist/src/migrations/*.js'],
      cli: {
        migrationsDir: 'src/migrations',
      },
      debug: process.env.DB_DEBUG === 'true',
    },
  },
  rabbitMq: {
    username: process.env.RABBITMQ_USERNAME,
    password: process.env.RABBITMQ_PASSWORD,
    host: process.env.RABBITMQ_HOST,
    vhost: process.env.RABBITMQ_VHOST,
  },
});
