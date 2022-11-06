export const validEmail = new RegExp(
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
); //x:1@c0.7c

export const validPassword = RegExp(
  // "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
  "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
); //At least 8 chars including uppercase,lowercase,numbers or symbols

export const validName = new RegExp(
  "(-?([A-Z].s)?([A-Z][a-z]+)s?)+([A-Z]'([A-Z][a-z]+))?"
);

export const nameRequiredText = "Name is required";
export const nameInvalidText = "Name is invalid";

export const emailRequiredText = "Email is required";
export const emailInvalidText = "Email format does not match 'aaa@bbb.ccc'";

export const phoneRequiredText = "Phone number is required";
export const phoneInvalidText = "Phone number is invalid";

export const passwordRequiredText = "Password is required"
export const passwordInvalidText =
  "Password must be at least 8 characters long including at least 1 capital letter, 1 small letter, 1 number and 1 special character";
