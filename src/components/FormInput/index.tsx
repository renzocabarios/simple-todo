import Input from "../Input";
import Text from "../Text";

interface FormInputProps {
  content: string;
  onChange: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
}

function FormInput(props: FormInputProps) {
  const { content, onChange } = props;
  return (
    <>
      <Text content={content} />
      <Input onChange={onChange} />
    </>
  );
}

export default FormInput;
