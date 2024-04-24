function describe_cities(City, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("\nThe ".concat(City, " is in ").concat(country, "."), "\n");
}
;
describe_cities('Lahore');
describe_cities('Karachi');
describe_cities('Dehli', 'India');
