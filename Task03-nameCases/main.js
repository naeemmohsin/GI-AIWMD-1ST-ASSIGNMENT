var personname = "muhammad naeem Mohsin";
var lowercase = personname.toLowerCase();
var uppercase = personname.toUpperCase();
var titlecase = personname.split('').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase(); }).join('');
console.log("Hello ".concat(personname, ", here are the three name cases:\nlowercase: ").concat(lowercase, "\nUppercase: ").concat(uppercase, "\nTitlecase: ").concat(titlecase));
