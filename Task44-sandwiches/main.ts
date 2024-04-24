function makeSandwich(items:string[])
{
console.log(`\nmaking your sandwich with:`);
items.forEach(element => {console.log(element)});
console.log(`enjoy your sandwich!\n`);
};
makeSandwich(['chicken','cheese','butter']);
makeSandwich(['egg','beef','bread']);
makeSandwich(['cheese','pottato','onions']);