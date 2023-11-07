import { ButtonContainer } from "./style";

const Button = ({ label, onClick }) => {
  const isEquals = label === "=";
  return (
    <ButtonContainer onClick={onClick} type="button"  isEquals={isEquals}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
