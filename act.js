function getsearch() {
  const input=document.getElementById("searchBox");
  document.getElementById("goBox").innerHTML=
      `<a href="https://www.google.co.kr/search?q=${input.value}">Go!</a>`;
}
