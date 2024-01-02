let numbers: number[] = [1, 2, 3, 4];

numbers.push(5);

console.log(numbers[2]);

const nomes: string[] = ["Adrian", "Giovanna"];

//Outra sintaxe array

const nums: Array<number> = [12, 13, 14];

nums.push(15);

console.log(nums);

//type any

const arr1: any = [1, "teste", true, [], { nome: "Adrian" }];

console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);
