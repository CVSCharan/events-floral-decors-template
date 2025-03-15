import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ButtonProps {
  primary?: boolean;
  outlined?: boolean;
  small?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  padding: ${props => props.small ? '0.5rem 1.25rem' : '0.75rem 1.75rem'};
  font-size: ${props => props.small ? '0.9rem' : '1rem'};
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.secondary};
  cursor: pointer;
  
  background-color: ${props => 
    props.outlined 
      ? 'transparent' 
      : props.primary 
        ? theme.colors.primary 
        : theme.colors.secondary};
  
  color: ${props => 
    props.outlined 
      ? props.primary 
        ? theme.colors.primary 
        : theme.colors.secondary 
      : theme.colors.white};
  
  border: 2px solid ${props => 
    props.primary 
      ? theme.colors.primary 
      : theme.colors.secondary};
  
  &:hover {
    background-color: ${props => 
      props.outlined 
        ? props.primary 
          ? theme.colors.primary 
          : theme.colors.secondary 
        : 'transparent'};
    
    color: ${props => 
      props.outlined 
        ? theme.colors.white 
        : props.primary 
          ? theme.colors.primary 
          : theme.colors.secondary};
    
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  primary = true,
  outlined = false,
  small = false,
  children,
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      primary={primary}
      outlined={outlined}
      small={small}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;