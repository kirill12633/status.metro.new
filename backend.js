const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Пароль для админки
const ADMIN_PASSWORD = '2255';

// Discord webhook URL — вставь сюда свой
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1403274247232819271/Ui4g8IJEMhdfwurKFHag9LUwHh9lRzC7oGF5i29MaDamHioSgubRuFBvT8GyHi39eIKc';

// Хранилище статусов (можно заменить на БД)
let statuses = {
  discord: { name: "Discord", status: "online" },
  roblox: { name: "Roblox", status: "online" },
  youtube: { name: "YouTube", status: "online" },
  telegram: { name: "Telegram", status: "online" },
  site: { name: "Сайт", status: "online" },
};

// Статусы для выбора
const validStatuses = ['online', 'maintenance', 'offline'];

app.use(bodyParser.json());
app.use(express.static('public')); // Фронтенд в папке public

// Получить текущие статусы
app.get('/api/statuses', (req, res) => {
  res.json(statuses);
});

// Обновить статусы (только с паролем)
app.post('/api/statuses/update', async (req, res) => {
  const { password, updates } = req.body;

  if (password !== ADMIN_PASSWORD) {
    return res.status(403).json({ error: 'Неверный пароль' });
  }

  // Проверяем входящие данные
  for (const key in updates) {
    if (!statuses[key]) {
      return res.status(400).json({ error: `Сервис ${key} не найден` });
    }
    if (!validStatuses.includes(updates[key])) {
      return res.status(400).json({ error: `Неверный статус для ${key}` });
    }
  }

  // Обновляем
  for (const key in updates) {
    statuses[key].status = updates[key];
  }

  // Отправляем сообщение в Discord
  try {
    const statusStrings = Object.values(statuses)
      .map(s => `**${s.name}** — ${formatStatusText(s.status)}`)
      .join('\n');

    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `Обновление статусов:\n${statusStrings}`
      }),
    });
  } catch (e) {
    console.error('Ошибка при отправке в Discord:', e);
  }

  res.json({ success: true, statuses });
});

function formatStatusText(status) {
  switch(status) {
    case 'online': return '🟢 Online';
    case 'maintenance': return '🟡 Технические работы';
    case 'offline': return '🔴 Не доступен';
    default: return status;
  }
}

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
