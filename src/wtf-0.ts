const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const wtfOAlphabet = 'aeiouy';

export function useEncoding(text: string): string {
  return text
    .split('')
    .map((char: string) => {
      if (char.match(/[.,:'"!?\s]/i)) {
        return char;
      }
      return randomChar(alphabet.toLocaleUpperCase().includes(char));
    })
    .join('');
}

function randomChar(uppercase: boolean = false): string {
  const char = wtfOAlphabet.charAt(Math.floor(Math.random() * wtfOAlphabet.length));
  return uppercase ? char.toLocaleUpperCase() : char;
}
