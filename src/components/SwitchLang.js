import React from "react";
import { useTranslation } from "react-i18next";

function SwitchLang() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("es")}>es</button>
      <button onClick={() => changeLanguage("en")}>en</button>
    </div>
  );
}

export default SwitchLang;
