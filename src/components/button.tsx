import { FC, HtmlHTMLAttributes, useMemo } from "react";

const OutlinedStyles = 'bg-transparent border text-vittude-primary border-vittude-primary hover:bg-vittude-50';

export type Button = {
  variant?: 'default' | 'outline'
} & HtmlHTMLAttributes<HTMLButtonElement>;

const Button: FC<Button> = props => {
  
  const className = useMemo(() => {
    return `${props.variant === 'outline' ? OutlinedStyles : ''} ${props.className}`;
  }, [props.variant, props.className])
  
  return <button {...props} className={className}/>
}

Button.defaultProps = {
  variant: 'default'
};

export default Button;