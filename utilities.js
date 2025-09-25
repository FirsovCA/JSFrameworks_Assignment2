
// Takes first name, last name, and student ID and returns a welcome message.
export const greetNewStudent = (firstName, lastName, studentId) => (
    `Welcome ${firstName} ${lastName} (${studentId}) to Georgian@ILAC College!`);

    
// Converts kilometers to miles using the conversion factor.
export const convertKmToMiles = km => km * 0.621371;

// Calculates the average of numbers in an array.
// Returns null if the argument is not an array or the array is empty
export const getAverageOfNumericArray = numArray => {
    if (!Array.isArray(numArray) || numArray.length === 0) return null;
    const sum = numArray.reduce((acc, val) => acc + val, 0);
    return sum / numArray.length;
}

// Creates a random password of given length.
// Includes lowercase, uppercase, numbers, and special characters.
// Returns null if the length is zero or negative.
export const generatePassword = (passwordLength) => {
    if (passwordLength <= 0) return null;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}