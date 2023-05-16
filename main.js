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
    text.textContent = "I'm a Magician";
  } else if (width <= 300 && height <= 500) {
    text.textContent = "I play with colors";
  } else {
    text.textContent = "also make users less frustrated";
  }
}

resizeObserver.observe(device);
