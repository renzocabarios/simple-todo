interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <button>{props.title}</button>
    </>
  );
}

export default Button;
