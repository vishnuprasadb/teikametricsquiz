export default (text:string) => {
    var el = document.createElement("textarea");
    el.innerHTML = text;
    return el.value;
  }