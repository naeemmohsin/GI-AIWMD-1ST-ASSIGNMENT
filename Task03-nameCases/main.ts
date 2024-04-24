let personname: string = "muhammad naeem Mohsin"
let lowercase : string = personname.toLowerCase();
let uppercase : string = personname.toUpperCase();
let titlecase : string = personname.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join('')
console.log(`Hello ${personname}, here are the three name cases:
lowercase: ${lowercase}
Uppercase: ${uppercase}
Titlecase: ${titlecase}`)