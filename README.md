<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Статус проекта</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f9f9f9;
    }
    header {
      background: #2c3e50;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header h1 {
      margin: 0;
      font-size: 20px;
    }
    .login-btn {
      background: #3498db;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
    }
    nav {
      display: flex;
      background: #ecf0f1;
      border-bottom: 1px solid #ccc;
    }
    nav button {
      flex: 1;
      padding: 12px;
      border: none;
      background: #ecf0f1;
      cursor: pointer;
      font-size: 16px;
    }
    nav button.active {
      background: white;
      border-bottom: 3px solid #3498db;
    }
    .tab {
      display: none;
      padding: 20px;
    }
    .tab.active {
      display: block;
    }
    .status-item {
      margin: 10px 0;
      padding: 10px;
      background: white;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .status-name {
      font-weight: bold;
      font-size: 18px;
    }
    .status-value {
      margin-top: 5px;
      color: green;
    }
  </style>
  <script>
    function showTab(index) {
      const tabs = document.querySelectorAll('.tab');
      const buttons = document.querySelectorAll('nav button');
      tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        buttons[i].classList.toggle('active', i === index);
      });
    }
    window.onload = () => showTab(0);
  </script>
</head>
<body>
  <header>
    <h1>Статус проекта</h1>
    <button class="login-btn">Вход</button>
  </header>

  <nav>
    <button onclick="showTab(0)">Игры</button>
    <button onclick="showTab(1)">Discord</button>
    <button onclick="showTab(2)">Telegram</button>
    <button onclick="showTab(3)">YouTube</button>
    <button onclick="showTab(4)">Сайт</button>
  </nav>

  <div class="tab">
    <div class="status-item">
      <div class="status-name">Minecraft сервер</div>
      <div class="status-value">🟢 Онлайн</div>
    </div>
    <div class="status-item">
      <div class="status-name">CS2 сервер</div>
      <div class="status-value" style="color:red;">🔴 Оффлайн</div>
    </div>
  </div>

  <div class="tab">
    <div class="status-item">
      <div class="status-name">Основной Discord-сервер</div>
      <div class="status-value">🟢 Работает</div>
    </div>
  </div>

  <div class="tab">
    <div class="status-item">
      <div class="status-name">Telegram-канал</div>
      <div class="status-value">🟢 Доступен</div>
    </div>
  </div>

  <div class="tab">
    <div class="status-item">
      <div class="status-name">YouTube-канал</div>
      <div class="status-value">🟢 В сети</div>
    </div>
  </div>

  <div class="tab">
    <div class="status-item">
      <div class="status-name">Главный сайт</div>
      <div class="status-value">🟢 Работает стабильно</div>
    </div>
  </div>
</body>
</html>
