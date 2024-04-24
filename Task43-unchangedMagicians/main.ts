let magicians: string[] = ["shimada", "lumin", "li wei", "lu chen"];

function copyArray(arr:string[]){
  return[...arr]
}

function make_great(magician: string[]) {
  magician.forEach((element) => {
    console.log(`\n`,element,`\n`);
  });
}

function show_magicians(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(`The great ${element}`,`\n`);
  });
}

let copymagician=copyArray(magicians);
make_great(copymagician);

console.log(`\n`,`This is my original array:`,`\n`)
show_magicians(magicians);
