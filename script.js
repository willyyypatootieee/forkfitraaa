// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
     
    let charSet = "";
    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;   

    if (charSet.length === 0) {
        return "No character set selected, please select at least one option.";
    }
    // Build the character set based on selected options
    
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return pass;
};
