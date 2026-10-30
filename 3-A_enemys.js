const enemies = [
  { name: "スライム", hp: 5 },
  { name: "ゴブリン", hp: 9 },
  { name: "ドラゴン", hp: 20 }
];

// データからリストを作る（３-５・３-６と同じ形）
function showEnemies() {
  const list = document.getElementById("enemyList");
  list.innerHTML = "";

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const li = document.createElement("li");
    li.innerText = `${enemy.name}（HP：${enemy.hp}）`;
    list.appendChild(li);
  }
}

// 攻撃：全員の HP を 3 減らして、リストを作り直す
function attack() {

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];

    // HPを3減らす
    enemy.hp = enemy.hp - 3;
  }

  // リストを作り直す
  showEnemies();
}

showEnemies();