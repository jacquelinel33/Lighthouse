const makeCase = (input, cases) => {
  let newString = "";
  let done = false;
  Array.isArray(cases) ? cases = cases : cases = [cases];
  while (done == false) {
    if (cases.includes("camel")) {
      function toCamel(match) {
        return match[1].toUpperCase();
      } newString = input.replace(/\s([a-z]{1})/g, toCamel);
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "camel") {
          cases.splice(i, 1);
        }
      }
    } if (cases.includes("pascal")) {
      let words = input.split(" ");
      for (let x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1);
      } newString = words.join(" ");
      cases.filter(word => word !== "pascal");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "pascal") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("snake")) {
      newsString = input.replace(/\s/g, "_");
      cases.filter(word => word !== "snake");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "snake") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("kebab")) {
      newString = input.replace(/\s/g, "-");
      cases.filter(word => word !== "kebab");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "kebab") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("title")) {
      let words = input.split(" ");
      for (let x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1); +" ";
      } newString = words.join(" ");
      cases.filter(word => word !== "title");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "title") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("vowel")) {
      function vowelUpper(match) {
        return match.toUpperCase();
      }
      newString = input.replace(/[aeiou]/g, vowelUpper);
      cases.filter(word => word !== "vowel");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "vowel") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("consonant")) {
      function consUpper(match) {
        return match.toUpperCase();
      } newString = input.replace(/[bcdfghjklmnpqrstvwxys]/g, consUpper);
      cases.filter(word => word !== "consonant");
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "consonant") {
          cases.splice(i, 1);
        }
      }
    }
    if (cases.includes("upper")) {
      for (let x = 0; x < input.length; x++) {
        input[x].toUpperCase;
      } newString = input;
      for (let i = 0; i < cases.length; i++) {
        if (cases[i] == "upper") {
          cases.splice(i, 1);
        }
      }
    } return newString;
  } 
}







console.log(makeCase("hello jello my names", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING