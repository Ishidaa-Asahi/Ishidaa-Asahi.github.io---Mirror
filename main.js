const device = document.querySelector('.device');
const text = document.querySelector('.text-content');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const { width, height } = entry.contentRect;
    updateTextContent(width, height);
  }
});

function updateTextContent(width, height) {
  if (width <= 200 && height <= 400) {
    text.textContent = "";
  } else if (width <= 300 && height <= 500) {
    text.textContent = "";
  } 
  else {
    text.textContent = "Ummm, which means I'm a UX/UI Designer";
  }
}

resizeObserver.observe(device);
