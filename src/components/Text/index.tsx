interface TextProps {
  content: string;
}

function Text(props: TextProps) {
  const { content } = props;
  return (
    <>
      <p>{content}</p>
    </>
  );
}

export default Text;
