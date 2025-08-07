<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Metro New — Статус</title>
<style>
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f4f8;
    color: #222;
    display: flex;
    min-height: 100vh;
  }
  header {
    background: #1f2d3d;
    color: white;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo img {
    width: 32px;
    height: 32px;
  }
  .login {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .login input[type="password"] {
    padding: 6px 10px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    outline: none;
  }
  .login button {
    background: #3498db;
    border: none;
    padding: 8px 16px;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .login button:hover {
    background: #217dbb;
  }
  main {
    display: flex;
    flex: 1;
    padding: 20px 30px;
    gap: 20px;
    box-sizing: border-box;
  }
  .left-panel {
    flex: 3;
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
  .section {
    margin-bottom: 30px;
  }
  .section h2 {
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
    margin-bottom: 15px;
    font-weight: 700;
    color: #1f2d3d;
  }
  .status-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #f7f9fc;
    padding: 12px 15px;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  .status-item img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  .status-item .name {
    font-weight: 600;
    flex: 1;
  }
  .status-item .status {
    font-weight: 700;
    color: green;
  }
  .status-item .status.offline {
    color: red;
  }
  .right-panel {
    flex: 1;
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 14px;
    color: #555;
  }
  .right-panel h3 {
    margin-top: 0;
    font-weight: 700;
    color: #1f2d3d;
  }
  .info-item {
    display: flex;
    justify-content: space-between;
  }
  .info-label {
    font-weight: 600;
  }
  /* Стили формы админа */
  #adminForm {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 15px;
  }
  #adminForm label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #1f2d3d;
  }
  #adminForm input[type="text"] {
    width: 100%;
    padding: 6px 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  #adminForm button {
    background: #27ae60;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
  #adminForm button:hover {
    background: #1e8449;
  }
</style>
</head>
<body>

<header>
  <div class="logo">
    <img src="https://cdn-icons-png.flaticon.com/512/61/61449.png" alt="Metro Icon" />
    Metro New Статус
  </div>
  <div class="login">
    <input type="password" id="adminCode" placeholder="Введите код" />
    <button onclick="checkCode()">Вход</button>
  </div>
</header>

<main>
  <div class="left-panel">
    <div class="section">
      <h2>Статус серверов</h2>

      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="Discord" />
        <div class="name">Discord Сервер</div>
        <div class="status" id="discordStatus">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Server" />
        <div class="name">Сам сервер</div>
        <div class="status" id="serverStatus">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Chat" />
        <div class="name">Чат</div>
        <div class="status" id="chatStatus">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="Settings" />
        <div class="name">Другие настройки</div>
        <div class="status" id="otherSettingsStatus">🟢 Онлайн</div>
      </div>
    </div>

    <div class="section">
      <h2>Веб-сайт</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="Website" />
        <div class="name">Основной сайт</div>
        <div class="status" id="websiteStatus">🟢 Работает</div>
      </div>
    </div>

    <div class="section">
      <h2>Телеграм канал</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
        <div class="name">Канал</div>
        <div class="status" id="telegramStatus">🟢 Доступен</div>
      </div>
    </div>

    <div class="section">
      <h2>Игровые сервера</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png" alt="Game Server" />
        <div class="name">Minecraft сервер</div>
        <div class="status" id="mcServerStatus">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1674/1674301.png" alt="Game Server" />
        <div class="name">CS2 сервер</div>
        <div class="status offline" id="cs2ServerStatus">🔴 Оффлайн</div>
      </div>
    </div>
  </div>

  <div class="right-panel" id="infoPanel">
    <h3>Информация о проекте</h3>
    <div class="info-item"><div class="info-label">Дата запуска:</div> <div id="launchDate">20 марта 2024</div></div>
    <div class="info-item"><div class="info-label">Онлайн игроков:</div> <div id="onlinePlayers">Загрузка...</div></div>
    <div class="info-item"><div class="info-label">Последнее обновление:</div> <div id="lastUpdate">Загрузка...</div></div>
    <div class="info-item"><div class="info-label">Следующее обновление:</div> <div id="nextUpdate">Загрузка...</div></div>
  </div>
</main>

<script>
  // Изначальные данные
  let data = {
    onlinePlayers: '120',
    lastUpdate: '5 августа 2025, 18:00',
    nextUpdate: '10 августа 2025, 12:00',
    statuses: {
      discordStatus: '🟢 Онлайн',
      serverStatus: '🟢 Онлайн',
      chatStatus: '🟢 Онлайн',
      otherSettingsStatus: '🟢 Онлайн',
      websiteStatus: '🟢 Работает',
      telegramStatus: '🟢 Доступен',
      mcServerStatus: '🟢 Онлайн',
      cs2ServerStatus: '🔴 Оффлайн',
    }
  };

  function updateDisplay() {
    document.getElementById('onlinePlayers').textContent = data.onlinePlayers;
    document.getElementById('lastUpdate').textContent = data.lastUpdate;
    document.getElementById('nextUpdate').textContent = data.nextUpdate;

    for (const key in data.statuses) {
      const el = document.getElementById(key);
      if (!el) continue;
      el.textContent = data.statuses[key];
      // меняем цвет для оффлайн
      if(data.statuses[key].toLowerCase().includes('🔴')) {
        el.classList.add('offline');
        el.classList.remove('status');
      } else {
        el.classList.remove('offline');
        el.classList.add('status');
      }
    }
  }

  updateDisplay();

  function checkCode() {
    const input = document.getElementById('adminCode');
    const code = input.value.trim();
    if(code === '2255') {
      alert('Вход успешен! Админ режим активирован.');
      input.value = '';
      showAdminForm();
    } else {
      alert('Неверный код!');
      input.value = '';
    }
  }

  function showAdminForm() {
    const infoPanel = document.getElementById('infoPanel');

    if(document.getElementById('adminForm')) return; // если форма уже есть — не создаём

    const form = document.createElement('form');
    form.id = 'adminForm';

    form.innerHTML = `
      <h3>Админ панель</h3>

      <label for="onlinePlayersInput">Онлайн игроков</label>
      <input type="text" id="onlinePlayersInput" value="${data.onlinePlayers}" />

      <label for="lastUpdateInput">Последнее обновление</label>
      <input type="text" id="lastUpdateInput" value="${data.lastUpdate}" />

      <label for="nextUpdateInput">Следующее обновление</label>
      <input type="text" id="nextUpdateInput" value="${data.nextUpdate}" />

      <h4>Статусы серверов</h4>

      <label for="discordStatusInput">Discord Сервер</label>
      <input type="text" id="discordStatusInput" value="${data.statuses.discordStatus}" />

      <label for="serverStatusInput">Сам сервер</label>
      <input type="text" id="serverStatusInput" value="${data.statuses.serverStatus}" />

      <label for="chatStatusInput">Чат</label>
      <input type="text" id="chatStatusInput" value="${data.statuses.chatStatus}" />

      <label for="otherSettingsStatusInput">Другие настройки</label>
      <input type="text" id="otherSettingsStatusInput" value="${data.statuses.otherSettingsStatus}" />

      <label for="websiteStatusInput">Веб-сайт</label>
      <input type="text" id="websiteStatusInput" value="${data.statuses.websiteStatus}" />

      <label for="telegramStatusInput">Телеграм канал</label>
      <input type="text" id="telegramStatusInput" value="${data.statuses.telegramStatus}" />

      <label for="mcServerStatusInput">Minecraft сервер</label>
      <input type="text" id="mcServerStatusInput" value="${data.statuses.mcServerStatus}" />

      <label for="cs2ServerStatusInput">CS2 сервер</label>
      <input type="text" id="cs2ServerStatusInput" value="${data.statuses.cs2ServerStatus}" />

      <button type="submit">Сохранить изменения</button>
    `;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      data.onlinePlayers = document.getElementById('onlinePlayersInput').value.trim();
      data.lastUpdate = document.getElementById('lastUpdateInput').value.trim();
      data.nextUpdate = document.getElementById('nextUpdateInput').value.trim();

      data.statuses.discordStatus = document.getElementById('discordStatusInput').value.trim();
      data.statuses.serverStatus = document.getElementById('serverStatusInput').value.trim();
      data.statuses.chatStatus = document.getElementById('chatStatusInput').value.trim();
      data.statuses.otherSettingsStatus = document.getElementById('otherSettingsStatusInput').value.trim();
      data.statuses.websiteStatus = document.getElementById('websiteStatusInput').value.trim();
      data.statuses.telegramStatus = document.getElementById('telegramStatusInput').value.trim();
      data.statuses.mcServerStatus = document.getElementById('mcServerStatusInput').value.trim();
      data.statuses.cs2ServerStatus = document.getElementById('cs2ServerStatusInput').value.trim();

      updateDisplay();
      alert('Данные успешно сохранены!');
    });

    infoPanel.appendChild(form);
  }
</script>

</body>
</html>
