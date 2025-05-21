function addPhrase(text) {
  const container = document.getElementById('phrase-container');
  const phrase = document.createElement('div');
  phrase.className = 'phrase';
  phrase.textContent = text;
  phrase.style.top = Math.random() * 90 + '%';
  phrase.style.left = Math.random() * 90 + '%';

  phrase.addEventListener('click', () => {
    phrase.classList.toggle('clicked');
  });

  container.appendChild(phrase);
  animatePhrase(phrase); // 💡 添加动画
}

// 🎈 漂浮动画，调得更明显一些
function animatePhrase(el) {
  let posX = parseFloat(el.style.left);
  let posY = parseFloat(el.style.top);

  function move() {
    posX += (Math.random() - 0.5) * 0.5;  // 比原来快一倍
    posY += (Math.random() - 0.5) * 0.5;

    posX = Math.max(0, Math.min(95, posX));
    posY = Math.max(0, Math.min(95, posY));

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
