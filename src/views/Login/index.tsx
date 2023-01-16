import { Button, FormInput } from "../../components";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <FormInput content="email" onChange={setemail} />
      <FormInput content="password" onChange={setpassword} />
      <Button title="Login" onClick={() => {}} />
    </>
  );
}

export default Login;
