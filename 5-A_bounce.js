const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
const info = document.getElementById("info");

// 初期設定
let x = 100;
let y = 80;
let vx = 180;
let vy = 140;
const r = 14;

// 重力の設定
const gravity = 500; // 下方向への加速度（px/s²）

let last = performance.now();

function update(dt) {
  // 重力を加える
  vy = vy + gravity * dt;

  // 座標を更新
  x = x + vx * dt;
  y = y + vy * dt;

  // 左右の壁
  if (x + r > canvas.width) {
    x = canvas.width - r;
    vx = -vx;
  }
  if (x - r < 0) {
    x = r;
    vx = -vx;
  }

  // 上の壁
  if (y - r < 0) {
    y = r;
    vy = -vy;
  }

  // 下の床
  if (y + r > canvas.height) {
    y = canvas.height - r;
    vy = -vy * 0.9; // 反発して速度を0.9倍
  }
}

// 描画
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffd166";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

// キー操作
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    vx = vx * 1.2;
    vy = vy * 1.2;
  }

  if (e.code === "ArrowDown") {
    vx = vx * 0.8;
    vy = vy * 0.8;
  }

  if (e.code === "KeyR") {
    vx = -vx;
    vy = -vy;
  }
});

// アニメーション
function loop(now) {
  const dt = (now - last) / 1000;
  last = now;

  info.textContent =
    "dt：" + dt.toFixed(4) +
    " 秒 ／ 1秒に約 " + (1 / dt).toFixed(0) + " 回";

  update(dt);
  draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);