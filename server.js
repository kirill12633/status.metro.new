const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = 3000;

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1403274247232819271/Ui4g8IJEMhdfwurKFHag9LUwHh9lRzC7oGF5i29MaDamHioSgubRuFBvT8GyHi39eIKc";
const ADMIN_PASSWORD = "2255";

let currentStatus = "Все системы работают стабильно";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Отдаём статический index.html из папки public
app.use(express.static(path.join(__dirname, "public")));

// API для получения текущего статуса (чтобы index.html мог через JS подгрузить)
app.get("/api/status", (req, res) => {
  res.json({ status: currentStatus });
});

// Админка — форма
app.get("/admin", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Админка — обновление статуса</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex flex-col items-center justify-center min-h-screen p-6">
  <h1 class="text-3xl font-bold mb-6">Админка — Обновление статуса</h1>
  <form method="POST" action="/admin" class="bg-white p-8 rounded shadow w-full max-w-lg">
    <label class="block mb-2 font-semibold" for="password">Пароль:</label>
    <input type="password" id="password" name="password" required
           class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Введите пароль" />
    <label class="block mb-2 font-semibold" for="status">Новый статус:</label>
    <textarea id="status" name="status" rows="3" required
           class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Напишите новый статус">${currentStatus}</textarea>
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
      Обновить статус
    </button>
  </form>
  <div class="mt-6 text-center">
    <a href="/" class="text-blue-600 underline">На главную</a>
  </div>
</body>
</html>
  `);
});

// Обработка формы админки
app.post("/admin", async (req, res) => {
  const { password, status } = req.body;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).send(`
      <p style="color: red; font-weight: bold; text-align:center; margin-top: 2rem;">
        Ошибка: неверный пароль!
      </p>
      <div style="text-align:center; margin-top:1rem;">
        <a href="/admin">Вернуться назад</a>
      </div>
    `);
  }

  currentStatus = status;

  try {
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: `🔔 **Обновление статуса:** ${status}` }),
    });

    if (!discordResponse.ok) {
      const text = await discordResponse.text();
      console.error("Ошибка при отправке в Discord:", text);
      return res.status(500).send(`
        <p style="color: red; font-weight: bold; text-align:center; margin-top: 2rem;">
          Ошибка при отправке уведомления в Discord.
        </p>
        <div style="text-align:center; margin-top:1rem;">
          <a href="/admin">Вернуться назад</a>
        </div>
      `);
    }
  } catch (err) {
    console.error("Ошибка запроса к Discord:", err);
    return res.status(500).send(`
      <p style="color: red; font-weight: bold; text-align:center; margin-top: 2rem;">
        Ошибка запроса к Discord.
      </p>
      <div style="text-align:center; margin-top:1rem;">
        <a href="/admin">Вернуться назад</a>
      </div>
    `);
  }

  res.send(`
    <p style="color: green; font-weight: bold; text-align:center; margin-top: 2rem;">
      Статус успешно обновлён и отправлен в Discord!
    </p>
    <div style="text-align:center; margin-top:1rem;">
      <a href="/admin">Обновить ещё раз</a> | <a href="/">На главную</a>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен http://localhost:${PORT}`);
});
