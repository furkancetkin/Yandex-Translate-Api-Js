var lang = document.getElementById("lang");
var langInput = document.getElementById("langinput");
var first = document.getElementById("first");
var last = document.getElementById("last");
var flag = document.getElementById("flag");

lang.addEventListener("change", function () {
  const language = lang.value;
  if(lang.value != "default"){
  flag.src = 'img/'+language+'.png';}else{
    flag.src = "";
  }
  langInput.value = language;
  first.value = "";
  last.value = "";
  console.log(language);
});

first.addEventListener("keyup", function () {
  if (lang.value == "default") {
    return last.placeholder = "Lütfen çevirmek istediğiniz dili seçiniz";
  } else {
    const text = first.value;
    const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=";
    const key =
      "trnsl.1.1.20210513T090459Z.129fd7bb6a957139.1c941bf77db244b22e45a119763eb4342594c949&text=";
    const lang = langInput.value;

    let data = fetch(url + key + text + "&lang=" + lang)
      .then((response) => response.json())
      .then((veri) => {
        if (first.value == "") {
          last.value = "";
        } else {
          last.value = veri.text;
        }
      });
  }
});
