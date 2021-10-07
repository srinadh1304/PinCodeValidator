let pinCodePattern = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode){
    if(pinCodePattern.test(pincode))
        console.log("Valid Pincode")
    else
        throw 'Invalid pincode'
}

try{
    validatePincode("522201")
    validatePincode("522 201")
    validatePincode("40088B")
}catch(e){
    console.error(e)
}