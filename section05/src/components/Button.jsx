// function Button(props) {
//   return (
//     <button style={{ color: props.color }}>
//       {props.text}-{props.color.toUpperCase()}
//     </button>
//   );
// }
function Button({ text, color, children }) {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
};

export default Button;
