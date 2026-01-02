// import sql from "mssql";

// let poolMain;
// let poolAdmin;

// /* ---------- BASE CONFIG ---------- */
// const baseConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER,
//   port: Number(process.env.DB_PORT) || 1433,

//   options: {
//     encrypt: false,               // VPS / local SQL Server
//     trustServerCertificate: true  // IMPORTANT for IP-based SSL
//   },

//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },

//   connectionTimeout: 30000,
//   requestTimeout: 30000
// };

// /* ---------- MAIN DATABASE (dtt) ---------- */
// export async function getConnection() {
//   if (poolMain) return poolMain;

//   try {
//     poolMain = await sql.connect({
//       ...baseConfig,
//       database: process.env.DB_DATABASE
//     });
//     return poolMain;
//   } catch (err) {
//     console.error("❌ Main DB Connection Failed:", err);
//     poolMain = null;
//     throw err;
//   }
// }

// /* ---------- ADMIN DATABASE (gtd_admin) ---------- */
// export async function getAdminDB() {
//   if (poolAdmin) return poolAdmin;

//   try {
//     poolAdmin = await sql.connect({
//       ...baseConfig,
//       database: process.env.DB_DATABASE1
//     });
//     return poolAdmin;
//   } catch (err) {
//     console.error("❌ Admin DB Connection Failed:", err);
//     poolAdmin = null;
//     throw err;
//   }
// }