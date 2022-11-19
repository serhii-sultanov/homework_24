import { useState } from "react";

const RegistrationForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setErrorMessage("");
    setEmailValue(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setPasswordValue(value);
  };

  const handleConfirmPasswordChange = ({ target: { value } }) => {
    if (errorMessage) {
      setErrorMessage("");
    }

    setConfirmPasswordValue(value);
  };

  const handleReset = () => {
    setEmailValue("");
    setPasswordValue("");
    setConfirmPasswordValue("");
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailValue === "" || passwordValue === "") {
      setErrorMessage("Please, fill all fields");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValidEmail.test(emailValue)) {
      setErrorMessage("Please, enter valid email");
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      setErrorMessage("Your password doesn't match with confirm password");
      return;
    }
    console.log({ email: emailValue, password: passwordValue });
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="form">
      <label className="label-name">
        email:{" "}
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
        />
      </label>
      <label className="label-name">
        password:{" "}
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="label-name">
        confirm password:{" "}
        <input
          type="password"
          name="confirm"
          value={confirmPasswordValue}
          onChange={handleConfirmPasswordChange}
        />
      </label>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button type="submit" className="btn">
        Send
      </button>
      <button type="reset" className="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default RegistrationForm;
