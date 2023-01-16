import Input from "../Input";
import Text from "../Text";

interface FormInputProps {
  content: string;
}

function FormInput(props: FormInputProps) {
  const { content } = props;
  return (
    <>
      <Text content={content} />
      <Input />
    </>
  );
}

export default FormInput;
