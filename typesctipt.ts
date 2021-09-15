// simple  types
const num: number = 6; // number
const str: string = 'some string'; // string
const bool: boolean = false; //boolean
const any: any = {}; //any

// shalom shalom
const v: void = undefined; // void
const arr: boolean[] = [true, false, false, false]; // array
const tuple: [string, string, number] = ['str 1', 'str 2', 5]; //tuple

// explicit object + class/interface
const Jeep = {
  wheels: 4,
};

class Car {
  wheels: number = 0;
}

interface someInterface {
  someProp: string;
}
class example1 implements someInterface {
  someProp: string = '';
}
const objExample = new example1();
const obj: someInterface = objExample;
const obj2: Car = Jeep;

// expand object with any key
const explicit: { [key: string]: number } = { someKey: 6 };

const union: number | number[] | string = '3';
const union2: number | number[] = [3, 7, 8];

// functions
// function return type
function someFunc(): number {
  return 6;
}

// function parameters
function someFuncParams(someNum: number): number {
  return 6;
}

someFuncParams(5);

//function signature
let arrFunc: (param1: number) => string; // function declaration

arrFunc = (param1: number) => {
  return 'string';
};

// Generics
const nums: string[] = [];
const numsGen: Array<string> = [];
