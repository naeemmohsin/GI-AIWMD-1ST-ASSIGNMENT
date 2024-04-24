// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.

function make_shirt (size: string='large', text: string='I love typeScript')
{
    console.log(`\nCreate a ${size} size T-Shirt having a printed text'${text}'on it.\n`)  
};
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a differentmessage.

make_shirt();
make_shirt('medium');
make_shirt('small','I love Python');