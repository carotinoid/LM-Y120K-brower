function getsearch() {
  const input=document.querySelector("body input");
  location.href=`https://www.google.co.kr/search?q=${input.value}`;
}
