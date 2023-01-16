import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { title, onClick } = props;
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {title}
      </button>
    </>
  );
}

export default Button;
