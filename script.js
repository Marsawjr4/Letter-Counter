const textbox = document.getElementById('textbox');
const count = document.getElementById('count');

textbox.addEventListener('keyup', ()=> {
  const text = textbox.value;
  const textlength = text.length;

  count.innerText = textlength;
});
