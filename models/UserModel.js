import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const User = db.define(
  "User",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.ENUM("laki-laki", "perempuan"),
  },
  {
    freezeTableName: true,
  }
);

export default User;

// Sinkronisasi database
(async () => {
  await db.sync({ alter: true }); // `alter: true` agar tabel diperbarui jika ada perubahan
  console.log("Tabel User telah dibuat!");
})();
