const fn = {
  getCapitalizedString: (str) => {
    const capitalLetter = str[0].toUpperCase();
    const newStr = capitalLetter + str.slice(1);
    return newStr;
  },
  getYear: (str) => {
    if (str) {
      return str.slice(0, 4);
    } else {
      return "...";
    }
  },
  clearHTMLtags: (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  },
};

export default fn;
