export default function initLink() {
  window.document.addEventListener('click', e => {
    console.log(e.target);
  });
}