const cursor = document.getElementById('cursor');
const moveCursor = (e)=> {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 75%), calc(${e.clientY}px - 75%), 0)`;
}
window.addEventListener('mousemove', moveCursor)