// function Button(props) {
//   return (
//     <button style={{ color: props.color }}>
//       {props.text}-{props.color.toUpperCase()}
//     </button>
//   );
// }
function Button({ text, color, children }) {
  return (
    <button style={{ color: color }}>
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "black",
};

export default Button;
