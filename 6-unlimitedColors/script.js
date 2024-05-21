let intervalId = null;

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);

function startChangingColor() {
  // Check if there's already an interval running to prevent multiple intervals
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
}

function stopChangingColor() {
  // Check if there's an interval running before attempting to clear it
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
