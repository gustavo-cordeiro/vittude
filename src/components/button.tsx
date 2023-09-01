import { FC, ButtonHTMLAttributes, useMemo } from "react";

const OutlinedStyles = 'bg-transparent border text-vittude-primary border-vittude-primary hover:bg-vittude-50';

export type Button = {
  variant?: 'default' | 'outline'
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Button> = ({
  variant = 'default',
  ...props
}) => { 
  const className = useMemo(() => {
    return `${variant === 'outline' ? OutlinedStyles : ''} ${props.className}`;
  }, [variant, props.className])
  
  return <button {...props} className={className}/>
}

export default Button;
