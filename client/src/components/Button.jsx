import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease, border 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #949494;
    transform: scale(0.97);
    
  }

  &:active {
    color: #fc234f;
    transform: scale(1.1);
  }
`;

const Button = ({ icon: Icon, onClick, onHover, to}) => {
  return (
    <Link to={to}>
      <StyledButton onClick={onClick} onMouseOver={onHover}>
      {Icon && <Icon size={30} />}
      </StyledButton>
    </Link>

  );
};

export default Button