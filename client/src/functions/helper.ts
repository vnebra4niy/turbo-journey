export function checkMainInfo(text: string): string {
    let readyMainInfo = '';
    if (text.length > 24) {
      for (let a = 0; a < text.length; a++) {
        if (a === 21) {
          return `${readyMainInfo}...`;
        }
        readyMainInfo += text[a];
      }
    } else {
      readyMainInfo = text;
    }
    return readyMainInfo;
  }