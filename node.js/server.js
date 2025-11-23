import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 ตั้งค่าการเชื่อมต่อ MySQL
const db = mysql.createConnection({
  host: "Thanakrit12",
  user: "root",
  password: "Thanakrit1512",
  database: "myweb",
});

// 📌 ทดสอบเชื่อมต่อ
db.connect(err => {
  if (err) console.log("❌ Error:", err);
  else console.log("✅ MySQL Connected");
});

// API: ดึงข้อมูลทั้งหมด
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

// API: เพิ่มข้อมูล
app.post("/users", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ message: "เพิ่มข้อมูลสำเร็จ" });
    }
  );
});

app.listen(3000, () => console.log("🚀 Server running"));
