export const EmailPasswordValidator = (email, password) => {
  if (email === "" || password === "")
    return "Enter Email & Password to continue!";

  const isEmailValid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const isPassValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isEmailValid) return "Invalid Email ID";
  if (!isPassValid)
    return "Invalid Password, Please enter atleast One Number and One Special Character";

  return null;
};
