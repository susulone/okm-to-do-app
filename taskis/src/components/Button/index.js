import "./Button.css";

export const Button = ({ buttonType, text, onClick }) => {
  return (
    <button className={`Btn__${buttonType}`} onClick={onClick} tabIndex="0">
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonStyle: "Btn__Primary",
};
