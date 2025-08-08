const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Твой Discord webhook
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1403274247232819271/Ui4g8IJEMhdfwurKFHag9LUwHh9lRzC7oGF5i29MaDamHioSgubRuFBvT8GyHi39eIKc'; // Вставь сюда свой вебхук

app.use(bodyParser.json());
app.use(express.static('public')); // для отдачи фронтенда

// Хранилище статусов (в памяти)
let services = [
  { id: 1, name: 'Метро New', status: 'Все системы работают стабильно' },
  { id: 2, name: 'API', status: 'Работает без сбоев' },
];

// Простая базовая авторизация для админки (пароль: 2255)
const ADMIN_PASSWORD = '2255';

// Middleware для проверки пароля в запросах на изменение
function checkAuth(req, res, next) {
  const password = req.headers['x-admin-password'];
  if (password === ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ error: 'Неверный пароль' });
  }
}

// Получить статусы (публичный API)
app.get('/api/statuses', (req, res) => {
  res.json(services);
});

// Обновить статус (админ API)
app.post('/api/statuses/:id', checkAuth, async (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const service = services.find(s => s.id === id);
  if (!service) return res.status(404).json({ error: 'Сервис не найден' });

  service.status = status;

  // Отправка в Discord
  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `Обновлен статус сервиса **${service.name}**:\n${status}`
      }),
    });
  } catch (e) {
    console.error('Ошибка отправки в Discord:', e);
  }

  res.json(service);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
