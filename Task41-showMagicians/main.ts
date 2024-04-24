let magicians: string[] = ["shimada", "lumin", "li wei", "lu chen"];

function show_magicians(magicians: string[]) {
  magicians.forEach((element) => {
    console.log(`\n`,`The great ${element}`,`\n`);
  });
}
show_magicians(magicians);