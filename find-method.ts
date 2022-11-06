console.clear();

interface IObjectInterface {
  id: number;
  name: string;
  age: number;
}

const firstArray: IObjectInterface[] = [
  {
    age: 111,
    name: "aaa",
    id: 1,
  },
  {
    age: 222,
    name: "bbb",
    id: 2,
  },
  {
    age: 333,
    name: "ccc",
    id: 3,
  },
];

console.log("firstArray:", firstArray);

firstArray.find((element) => {
  element.id === 2 && (element.name = "name changed")
});

console.log("firstArray2:", firstArray);
