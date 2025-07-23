function increaseProgress() {
  const progressBar = document.getElementById('progressBar');
  let current = parseInt(progressBar.value, 10);
  if (current < 100) {
    current += 10;
    progressBar.value = current;
    progressBar.nextElementSibling.textContent = `${current}%`;
  } else {
    alert('You have completed this course!');
  }
}
