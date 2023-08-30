import { FC, HtmlHTMLAttributes } from "react";

const OutlinedStyles = 'bg-transparent border text-vittude-primary border-vittude-primary hover:bg-vittude-50';

export type Button = {
  variant?: 'default' | 'outline'
} & HtmlHTMLAttributes<HTMLButtonElement>;

const Button: FC<Button> = (props) => {
  return <button {...props} className={`${props.variant === 'outline' ? OutlinedStyles : ''} ${props.className}`}/>
}

Button.defaultProps = {
  variant: 'default'
};

export default Button;