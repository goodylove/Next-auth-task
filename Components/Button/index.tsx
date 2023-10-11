import { ButtonProps } from "@/types";

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
