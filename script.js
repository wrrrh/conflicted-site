function addPhrase(text) {
  const container = document.getElementById('phrase-container');
  const phrase = document.createElement('div');
  phrase.className = 'phrase';
  phrase.textContent = text;

  // 初始化位置：更大范围
  let posX = Math.random() * 100;
  let posY = Math.random() * 100;
  phrase.style.left = posX + '%';
  phrase.style.top = posY + '%';

  phrase.addEventListener('click', () => {
    phrase.classList.toggle('clicked');
  });

  container.appendChild(phrase);
  animatePhrase(phrase, posX, posY);
}

// 🌀 更慢，更自由的漂浮动画
function animatePhrase(el, startX, startY) {
  let posX = startX;
  let posY = startY;

  function move() {
    // 更慢：速度降低到 0.1
    posX += (Math.random() - 0.5) * 0.1;
    posY += (Math.random() - 0.5) * 0.1;

    // 更大范围：限制从 0 到 98%
    posX = Math.max(0, Math.min(98, posX));
    posY = Math.max(0, Math.min(98, posY));

    el.style.left = posX + '%';
    el.style.top = posY + '%';

    requestAnimationFrame(move);
  }

  move();
}

document.getElementById('phrase-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('phrase-input');
  const text = input.value.trim();

  if (text.split(/\s+/).length > 12) {
    alert('Please enter no more than 12 words.');
    return;
  }

  addPhrase(text);
  input.value = '';
});
