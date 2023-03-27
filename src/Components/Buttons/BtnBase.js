import "./BtnBase.css";

const BtnBase = (props) => {
  const {className, onClick, text} = props;
  return(
    <button className={`BtnBase ${className}`} onClick={onClick}>
      {text}
    </button>
  )
};export default BtnBase;