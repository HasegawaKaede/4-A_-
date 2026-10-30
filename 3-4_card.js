function addCard() {
  // カードを入れる箱（cardList）を取得する
  const cardList = document.getElementById("cardList");

  // 新しい div 要素（カード）を作る
  const card = document.createElement("div");
  card.className = "card";

  // 中身を書く
  card.innerHTML = "追加したカード要素";

  // カードを箱に追加する
  //cardList.appendChild(card);
}