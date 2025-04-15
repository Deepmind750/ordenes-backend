const { Pool } = require('pg');
require('dotenv').config();

const isRender = process.env.RENDER === 'true';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isRender ? { rejectUnauthorized: false } : false
});

module.exports = pool;