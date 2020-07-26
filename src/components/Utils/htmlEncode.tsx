export default (text: string) => {
  var el = document.createElement("div");
  el.innerText = el.textContent = text;
  text = el.innerHTML;
  return text;
};
