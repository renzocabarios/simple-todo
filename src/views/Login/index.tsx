import { Button, FormInput } from "../../components";
import { useState } from "react";

function Login() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <FormInput content="password" onChange={setform} />
      <Button
        title="Login"
        onClick={() => {
          console.log(form);
        }}
      />
    </>
  );
}

export default Login;
