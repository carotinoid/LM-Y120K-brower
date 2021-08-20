function getsearch() {
  const input=document.getElementById("searchBox");
  document.getElementById("searchBox").innerHMTL=
      `<a href="https://www.google.co.kr/search?q=${input}">Go!</a>`;
}
