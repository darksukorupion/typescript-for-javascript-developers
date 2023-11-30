export {};

type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

type Profile = {
  name: string;
  age: number;
};

const example: Profile = {
  name: "Yuki",
  age: 27
};

type Profile2 = typeof example;