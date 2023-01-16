interface InputProps {
  type?: string;
  placeholder?: string;
  onChange: (setState: any) => void;
}
function Input(props: InputProps) {
  const { type = "text", placeholder = "", onChange = () => {} } = props;

  return (
    <>
      <input
        type={type}
        name="name"
        placeholder={placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange(e);
        }}
      />
    </>
  );
}

export default Input;
