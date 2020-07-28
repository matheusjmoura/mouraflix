import React from 'react';
import LogoMMW from '../../assets/img/onlyMMW.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/matheusjmoura/">
        <img src={LogoMMW} alt="Logo MM Branco" width="100" height="50" />
      </a>
      <p>
        Desenvolvido por{' '}
        <a href="https://github.com/matheusjmoura/mouraflix">Matheus Moura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
