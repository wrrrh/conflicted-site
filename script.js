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
