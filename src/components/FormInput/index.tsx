import Input from "../Input";
import Text from "../Text";

interface FormInputProps {
  content: string;
  onChange: any;
}

function FormInput(props: FormInputProps) {
  const { content, onChange } = props;
  return (
    <>
      <Text content={content} />
      <Input onChange={onChange} type="password" />
    </>
  );
}

export default FormInput;
