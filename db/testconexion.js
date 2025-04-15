const pool = require('./conexion');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa a la base de datos:', res.rows[0]);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error de conexión a la base:', error.message);
    process.exit(1);
  }
})();
