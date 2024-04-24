function describe_cities(City: string, country: string='Pakistan')
{
    console.log(`\nThe ${City} is in ${country}.`,`\n`);
};

describe_cities('Lahore');
describe_cities('Karachi');
describe_cities('Dehli','India');