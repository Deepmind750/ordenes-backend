const { Pool } = require('pg');
require('dotenv').config();

// Detecta si estás en Render (Render automáticamente define esta variable)
const isRender = process.env.RENDER === 'true';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isRender
    ? { rejectUnauthorized: false }
    : false // Sin SSL en local
});

module.exports = pool;