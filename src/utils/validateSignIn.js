//using regex validation
export const validateEmail = (email) => {
   // ^[^\s@]+ → Start with at least one character (excluding spaces & @).
   // @ → Must have exactly one @.
   // [^\s@]+\.[^\s@]+$ → Must contain a domain (e.g., gmail.com).
   const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   if(!isEmailValid) return "Please enter a valid email address";


   return null;
}

export const validatePassword = (password) => {
   //    (?=.*\d) → Ensures at least one number.
   // (?=.*[@$!%*?&]) → Ensures at least one special character.
   // [A-Za-z\d@$!%*?&]{4,60} → Allows uppercase, lowercase, numbers, and special characters, ensuring length between 4 and 60.
   const isPasswordValid = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,60}$/.test(password);

   if(!isPasswordValid) return "Your password must contain between 4 and 60 characters,with atleast one number and one special character";

   return null;
}
