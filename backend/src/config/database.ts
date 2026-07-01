import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER || 'rena_user',
  password: process.env.DATABASE_PASSWORD || 'rena_password',
  database: process.env.DATABASE_NAME || 'rena_db',
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
})

export { sequelize }
