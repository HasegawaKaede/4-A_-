function showNewEnemies() {

    // 新しい敵を追加
    enemies.push(
        { name: "盗賊", hp: 10 },
        { name: "異形", hp: 15 },
        { name: "熊", hp: 15 }
    );

    // リストを更新
    showEnemies();
}