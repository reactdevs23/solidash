import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./Login.module.css";
import { mail, password, referel } from "../../../images/image";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    referelcode: "",
  });

  const inputs = [
    {
      icon: mail,
      type: "email",
      name: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      icon: password,
      type: "password",
      name: "password",
      placeholder: "Password",
      required: true,
    },
    {
      icon: referel,
      type: "text",
      name: "referelcode",
      placeholder: "Referral code (Optional)",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form action="" className={styles.formContainer}>
      {" "}
      {inputs.map((input, i) => (
        <div className={styles.inputContainer} key={i}>
          <img src={input.icon} alt="#" className={styles.icon} />
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            value={values[input.name]}
            className={`${styles.input} ${styles.text}`}
            placeholder={input.placeholder}
            onChange={onChange}
            required={input.required}
          />
        </div>
      ))}
      <button className={styles.button}>
        <p className={styles.buttonText}>Continue</p>{" "}
        <p className={styles.arrowContainer}>
          {" "}
          <BsArrowRightShort className={styles.arrow} />
        </p>
      </button>
    </form>
  );
};

export default Login;
