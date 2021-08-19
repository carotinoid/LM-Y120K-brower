function getsearch() {
  const input=document.getElementById("searchBox");
  window.location.replace(`https://www.google.co.kr/search?q=${input.value}`);
}

document.querySelector("body input[type='button']").addEventListener('click',getsearch);
