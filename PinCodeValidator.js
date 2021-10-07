
let pinCodeRegex = RegExp("^[0-9]{6}");

function validatePincode(pincode){
    if(pinCodeRegex.test(pincode))
        console.log("Valid Pincode");
    else
        throw 'Invalid pincode';
}

try{
    validatePincode("522201");
    validatePincode("A123456");
}catch(e){
    console.error(e);
}