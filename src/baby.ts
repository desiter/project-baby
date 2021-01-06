import { useEncoding as useWtf0 } from './wtf-0';

/* eslint-disable no-console */
export enum Encoding {
  UTF_8 = 'utf-8',
  WTF_0 = 'wtf-0'
}

export enum Gender {
  BOY = 'boy',
  GIRL = 'girl'
}

export type SentenceOptions = {
  encoding: Encoding;
};

export type BabyOptions = {
  name: string;
  gender: Gender;
  weight: number;
  height: number;
  bornAt: Date;
};

export class Baby {
  private name: string;
  private gender: Gender;
  private weight: number;
  private height: number;
  private bornAt: Date;

  constructor(options: BabyOptions) {
    this.name = options.name;
    this.gender = options.gender;
    this.weight = options.weight;
    this.height = options.height;
    this.bornAt = options.bornAt;
  }

  announce() {
    const announcement = `\nA ${this.gender} named ${
      this.name
    } was born on ${this.bornAt.toDateString()} at ${this.bornAt.toLocaleTimeString()}`;
    this.printSeparator(announcement, '*');
    console.log(announcement);
    console.log(`${this.gender === Gender.BOY ? 'He' : 'She'} is ${this.height} cm high and weighs ${this.weight} kg.`);
  }

  say(sentence: string, options: SentenceOptions) {
    const statement = `\n${this.name} says: "${this.encode(sentence, options.encoding)}"\n`;
    console.log(statement);
  }

  private printSeparator(text: string, sepChar: string) {
    console.log(
      text
        .split('')
        .map(() => sepChar)
        .join('')
    );
  }

  private encode(text: string, encoding: Encoding): string {
    if (encoding === Encoding.WTF_0) {
      return useWtf0(text);
    }

    return text;
  }
}
