const ranking = [
  { name: "ゆうき", score: 950 },
  { name: "さくら", score: 870 },
  { name: "はると", score: 820 },
  { name: "あおい", score: 700 } 
];

// データから一覧を作る関数
function showRanking() {
  const list = document.getElementById("rankingList");   // 箱を取得する

  for (let i = 0; i < ranking.length; i++) {
    const item = ranking[i];                             // i 番目のデータ
    const li = document.createElement("li");             // li を作る
    li.innerText = `${item.name}：${item.score}点`;      // 中身を書く
    list.appendChild(li);                                // 箱に追加する
  }
}
function addScore() {
  const name = document.getElementById("nameInput").value;            // 入力欄の文字を取り出す
  const score = Number(document.getElementById("scoreInput").value);  // 数値にする（１-Ａと同じ）

  ranking.push({ name: name, score: score });
    const list = document.getElementById("rankingList");   // 箱を取得する
  list.innerHTML = "";                                   // ← 足す：箱の中を空にする   // データに1件追加する（３-２の push）
  showRanking();                                // 表を作り直す
}