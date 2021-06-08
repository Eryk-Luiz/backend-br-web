import React, { useContext } from 'react';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <a href="/">
          <AiOutlineCloudServer size={33} />
          Backend Brasil
        </a>
      </div>
      <div>
        {name === 'dark' ? (
          <FiSun size={24} className="icon" onClick={toggleTheme} />
        ) : (
          <FiMoon size={24} className="icon" onClick={toggleTheme} />
        )}
        <FiGithub
          size={24}
          onClick={() =>
            window.open('https://github.com/Eryk-Luiz/backend-br-web')
          }
        />
      </div>
    </Container>
  );
};

export default Header;
