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
  .hidden {
    display: none;
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
        <div class="status">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Server" />
        <div class="name">Сам сервер</div>
        <div class="status">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Chat" />
        <div class="name">Чат</div>
        <div class="status">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="Settings" />
        <div class="name">Другие настройки</div>
        <div class="status">🟢 Онлайн</div>
      </div>
    </div>

    <div class="section">
      <h2>Веб-сайт</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" alt="Website" />
        <div class="name">Основной сайт</div>
        <div class="status">🟢 Работает</div>
      </div>
    </div>

    <div class="section">
      <h2>Телеграм канал</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
        <div class="name">Канал</div>
        <div class="status">🟢 Доступен</div>
      </div>
    </div>

    <div class="section">
      <h2>Игровые сервера</h2>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1674/1674291.png" alt="Game Server" />
        <div class="name">Minecraft сервер</div>
        <div class="status">🟢 Онлайн</div>
      </div>
      <div class="status-item">
        <img src="https://cdn-icons-png.flaticon.com/512/1674/1674301.png" alt="Game Server" />
        <div class="name">CS2 сервер</div>
        <div class="status offline">🔴 Оффлайн</div>
      </div>
    </div>
  </div>

  <div class="right-panel" id="infoPanel">
    <h3>Информация о проекте</h3>
    <div class="info-item"><div class="info-label">Дата запуска:</div> <div>20 марта 2024</div></div>
    <div class="info-item"><div class="info-label">Онлайн игроков:</div> <div>Загрузка...</div></div>
    <div class="info-item"><div class="info-label">Последнее обновление:</div> <div>Загрузка...</div></div>
    <div class="info-item"><div class="info-label">Следующее обновление:</div> <div>Загрузка...</div></div>
  </div>
</main>

<script>
  function checkCode() {
    const input = document.getElementById('adminCode');
    const code = input.value.trim();
    if(code === '2255') {
      alert('Вход успешен! Вы администратор.');
      // Здесь можно добавить админский функционал
      document.getElementById('infoPanel').innerHTML +=
        '<p style="color:green; font-weight:bold; margin-top: 20px;">Админский режим активирован.</p>';
      input.value = '';
    } else {
      alert('Неверный код!');
      input.value = '';
    }
  }
</script>

</body>
</html>
