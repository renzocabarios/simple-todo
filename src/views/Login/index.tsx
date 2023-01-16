import styles from "./Login.module.css";
import { Button, FormInput } from "../../components";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <div className={styles.view}>
        <div className={styles.form}>
          <FormInput content="email" onChange={setemail} />
          <FormInput content="password" onChange={setpassword} />
          <Button title="Login" onClick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default Login;
