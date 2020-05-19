import { useTranslation } from "react-i18next";
import React from "react";

const IntlContent = ({ label, htmlElement, href }) => {
  const { t } = useTranslation();
  switch (htmlElement) {
    case "h1":
      return <h1>{t(label)}</h1>;
    case "h2":
      return <h2>{t(label)}</h2>;
    case "h3":
      return <h3>{t(label)}</h3>;
    case "h4":
      return <h4>{t(label)}</h4>;
    case "a":
      return <a href={href}>{t(label)}</a>
    case "ul":
      const elements = t(label, { returnObjects: true });
      return (
        <ul>
          {elements.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      );
    default:
      return <p>{t(label)}</p>;
  }
};

export default IntlContent;
