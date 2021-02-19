const makeCase = (input, cases) => {
  let newString = "";
  let done = false;
  Array.isArray(cases) ? cases = cases : cases = [cases];
  while (!done) {
    if (cases.includes("camel")) {
      function toCamel(match) {
        return match[1].toUpperCase();
      } newString = input.replace(/\s([a-z]{1})/g, toCamel);
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "camel");
          if (cases.length === 0) {
            done = true;
        }
      }
    } if (cases.includes("pascal")) {
      let words = input.split(" ");
      for (let x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1);
      } newString = words.join(" ");
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "pascal");
          if (cases.length === 0) {
            done = true;
        }
      }
    }if (cases.includes("snake")) {
      newsString = input.replace(/\s/g, "_");
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "snake");
          if (cases.length === 0) {
            done = true;
        }
      }
    } if (cases.includes("kebab")) {
      newString = input.replace(/\s/g, "-");
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "kebab");
          if (cases.length === 0) {
            done = true;
        }
      }
    } if (cases.includes("title")) {
      let words = input.split(" ");
      for (let x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1); +" ";
      } newString = words.join(" ");
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "title");
          if (cases.length === 0) {
            done = true;
        }
      }
    } if (cases.includes("vowel")) {
      function vowelUpper(match) {
        return match.toUpperCase();
      }
      newString = input.replace(/[aeiou]/g, vowelUpper);
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "vowel");
          if (cases.length === 0) {
            done = true;
        }
      }
    }if (cases.includes("consonant")) {
      function consUpper(match) {
        return match.toUpperCase();
      } newString = input.replace(/[bcdfghjklmnpqrstvwxys]/g, consUpper);
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "consonant");
          if (cases.length === 0) {
            done = true;
        }
      }
    }if (cases.includes("upper")) {
      for (let x = 0; x < input.length; x++) {
        input[x].toUpperCase;
      } newString = input;
      if (!Array.isArray(cases)) {
        done = true;
      } else {
        cases.filter(word => word !== "upper");
          if (cases.length === 0) {
            done = true;
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