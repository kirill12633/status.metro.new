const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Текущий статус (хранится в памяти)
let currentStatus = 'Все системы работают стабильно';

// Твой Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1403274247232819271/Ui4g8IJEMhdfwurKFHag9LUwHh9lRzC7oGF5i29MaDamHioSgubRuFBvT8GyHi39eIKc';

// Пароль админа
const ADMIN_PASSWORD = '2255';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // для отдачи index.html из папки public

// API для получения статуса
app.get('/api/status', (req, res) => {
  res.json({ status: currentStatus });
});

// API для обновления статуса
app.post('/api/status', async (req, res) => {
  const { password, status } = req.body;

  if (password !== ADMIN_PASSWORD) {
    return res.status(403).json({ message: 'Неверный пароль' });
  }

  currentStatus = status;

  // Отправляем в Discord
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `Обновлён статус: **${currentStatus}**` }),
    });
  } catch (err) {
    console.error('Ошибка отправки в Discord:', err);
  }

  res.json({ message: 'Статус обновлён' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен http://localhost:${PORT}`);
});

