// lotin_kirill
function Translate() {
  let x = document.getElementsByTagName("textarea")[0].id;
  if (x == 'lotin') {
    let sentence = document.getElementsByTagName("textarea")[0].value;

    let trwords = sentence
      .replace(/ya|yA/g, 'я')
      .replace(/Ya|YA/g, 'Я')
      .replace(/yo'|yo|yO'|yO/g, 'ё')
      .replace(/Yo'|Yo|YO'|YO/g, 'Ё')
      .replace(/ye|yE|e/g, 'е')
      .replace(/YE|Ye|E/g, 'Е')
      .replace(/oʻ|o`|o'|oʻ|o`/g, 'ў')
      .replace(/Oʻ|O`|O'|Oʻ|O`/g, 'Ў')
      .replace(/g'|g`|gʻ/g, 'ғ')
      .replace(/G'|G`|Gʻ/g, 'Ғ')
      .replace(/sh|sH/g, 'ш')
      .replace(/SH|Sh/g, 'Ш')
      .replace(/ch|cH/g, 'ч')
      .replace(/CH|Ch/g, 'Ч')
      .replace(/yu|yU/g, 'ю')
      .replace(/Yu|YU/g, 'Ю')
      .replace(/a/g, 'а')
      .replace(/A/g, 'А')
      .replace(/b/g, 'б')
      .replace(/B/g, 'Б')
      .replace(/d/g, 'д')
      .replace(/D/g, 'Д')
      .replace(/f/g, 'ф')
      .replace(/F/g, 'Ф')
      .replace(/g/g, 'г')
      .replace(/G/g, 'Г')
      .replace(/h/g, 'ҳ')
      .replace(/H/g, 'Ҳ')
      .replace(/i/g, 'и')
      .replace(/I/g, 'И')
      .replace(/j/g, 'ж')
      .replace(/J/g, 'Ж')
      .replace(/k/g, 'к')
      .replace(/K/g, 'К')
      .replace(/l/g, 'л')
      .replace(/L/g, 'Л')
      .replace(/m/g, 'м')
      .replace(/M/g, 'М')
      .replace(/n/g, 'н')
      .replace(/N/g, 'Н')
      .replace(/o/g, 'о')
      .replace(/O/g, 'О')
      .replace(/p/g, 'п')
      .replace(/P/g, 'П')
      .replace(/q/g, 'қ')
      .replace(/Q/g, 'Қ')
      .replace(/r/g, 'р')
      .replace(/R/g, 'Р')
      .replace(/s/g, 'с')
      .replace(/S/g, 'С')
      .replace(/t/g, 'т')
      .replace(/T/g, 'Т')
      .replace(/u/g, 'у')
      .replace(/U/g, 'У')
      .replace(/v/g, 'в')
      .replace(/V/g, 'В')
      .replace(/x/g, 'х')
      .replace(/X/g, 'Х')
      .replace(/y/g, 'й')
      .replace(/Y/g, 'Й')
      .replace(/z/g, 'з')
      .replace(/Z/g, 'З')
      .replace(/TS/g, 'Ц')
      .replace(/s/g, 'ц')
      .replace(/'/g, 'ъ')
      .replace(/ʼ/g, 'ъ');
    // console.log(trwords)
    document.getElementById("textinput").innerHTML = trwords;
  }
  if (x == 'kirill') {
    let sentence = document.getElementsByTagName("textarea")[0].value;

    let trwords = sentence
      .replace(/Ы/g, 'i').replace(/ы/g, 'i')
      .replace(/я/g, 'ya').replace(/Я/g, 'Ya')
      .replace(/ё/g, 'yo').replace(/Ё/g, 'Yo')
      .replace(/е/g, 'ye').replace(/Е/g, 'Ye')
      .replace(/ў/g, "oʻ").replace(/Ў/g, "Oʻ")
      .replace(/ғ/g, "gʻ").replace(/Ғ/g, "Gʻ")
      .replace(/ш/g, 'sh').replace(/Ш/g, 'Sh')
      .replace(/ч/g, 'ch').replace(/Ч/g, 'Ch')
      .replace(/ю/g, 'yu').replace(/Ю/g, 'Yu')
      .replace(/э/g, 'e').replace(/Э/g, 'E')
      .replace(/а/g, 'a').replace(/А/g, 'A')
      .replace(/б/g, 'b').replace(/Б/g, 'B')
      .replace(/д/g, 'd').replace(/Д/g, 'D')
      .replace(/е/g, 'e').replace(/Е/g, 'E')
      .replace(/ф/g, 'f').replace(/Ф/g, 'F')
      .replace(/г/g, 'g').replace(/Г/g, 'G')
      .replace(/ҳ/g, 'h').replace(/Ҳ/g, 'H')
      .replace(/и/g, 'i').replace(/И/g, 'I')
      .replace(/ж/g, 'j').replace(/Ж/g, 'J')
      .replace(/к/g, 'k').replace(/К/g, 'K')
      .replace(/л/g, 'l').replace(/Л/g, 'L')
      .replace(/м/g, 'm').replace(/М/g, 'M')
      .replace(/н/g, 'n').replace(/Н/g, 'N')
      .replace(/о/g, 'o').replace(/О/g, 'O')
      .replace(/п/g, 'p').replace(/П/g, 'P')
      .replace(/қ/g, 'q').replace(/Қ/g, 'Q')
      .replace(/р/g, 'r').replace(/Р/g, 'R')
      .replace(/с/g, 's').replace(/С/g, 'S')
      .replace(/т/g, 't').replace(/Т/g, 'T')
      .replace(/у/g, 'u').replace(/У/g, 'U')
      .replace(/в/g, 'v').replace(/В/g, 'V')
      .replace(/х/g, 'x').replace(/Х/g, 'X')
      .replace(/й/g, 'y').replace(/Й/g, 'Y')
      .replace(/з/g, 'z').replace(/З/g, 'Z')
      .replace(/ц/g, 's').replace(/Ц/g, 'TS')
      .replace(/ъ/g, "ʼ").replace(/Ъ/g, "ʼ");
    // console.log(trwords)
    document.getElementById("textinput").innerHTML = trwords;
  }
  // let sentences = document.getElementById("textinput").value; 
  // // console.log(sentences);
  // if(sentences.length > 0){
  //     document.getElementById("downbtn").removeAttribute("disabled");
  //     document.getElementById("copytext").removeAttribute("disabled");
  // }

  // if(sentences.length == 0){
  //     document.getElementById("downbtn").setAttribute("disabled", "");
  //     document.getElementById("copytext").setAttribute("disabled", "");
  // }
}

export default Translate;