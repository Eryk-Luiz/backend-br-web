import React, { useContext, useEffect } from 'react';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { ThemeContext } from 'styled-components';
import Container from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <Container>
      <div className="contentLeft">
        <a href="/">
          <AiOutlineCloudServer size={34} />
          Backend Brasil
        </a>
      </div>
      <div className="contentRight">
        {name === 'dark' ? (
          <FiSun size={24} className="icon" onClick={toggleTheme} />
        ) : (
          <FiMoon size={24} className="icon" onClick={toggleTheme} />
        )}
        <FiGithub
          size={24}
          className="icon"
          onClick={() =>
            window.open('https://github.com/Eryk-Luiz/backend-br-web')
          }
        />
      </div>
    </Container>
  );
};

export default Header;
