import styles from "./Input.module.css";

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
        name=""
        placeholder={placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange(e.currentTarget.value);
        }}
        className={styles.input}
      />
    </>
  );
}

export default Input;
