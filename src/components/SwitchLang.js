import React from "react";
import { useTranslation } from "react-i18next";
import styled from 'styled-components'

const SwitchStyled = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  height: 30px;
    overflow: hidden;
 
  button:nth-child(2){
    border: 1px solid white;
    border-width: 0 1px 0 1px;
  }
  button{
    height: inherit;
    background-color: rgba(255,255,255, 0.2);
    border: none;
    color: white;
    cursor: pointer;
  }
`

function SwitchLang() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitchStyled>
      <button onClick={() => changeLanguage("es")}>es</button>
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("en")}>pr</button>
    </SwitchStyled>
  );
}

export default SwitchLang;
