function store_carFeatures(manufacturer:string, modelName:string, ...aParam:{[key:string]:any}[]):
Object 
{
    let carinfo=
    {manufacturer,
     modelName,
     ...Object.assign({}, ...aParam)
    }
    return carinfo;
}
let car= store_carFeatures('Honda', 'Civic',{color: 'white'}, {features:['navigation','power window']})
console.log(car);