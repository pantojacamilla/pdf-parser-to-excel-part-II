const readTozetti = (textItems) => {

  for (let i = 60; i < textItems.length; i++) {

    if (parseInt(textItems[i].width) == 133) {
      console.log(textItems[i - 1].str);
    }

    if (parseInt(textItems[i].width) == 133) {
      console.log(textItems[i].str);
    }

    if (parseInt(textItems[i].width) == 161) {
      console.log(textItems[i].str);
    }

    if (parseInt(textItems[i].width) == 199) {
      console.log(textItems[i].str);
    }

    if (parseInt(textItems[i].width) == 37) {
      console.log(textItems[i].str);
    }

  }
}

export default readTozetti;