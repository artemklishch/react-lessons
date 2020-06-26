import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi
        quam, eveniet nobis reiciendis maiores consectetur porro assumenda
        nostrum saepe!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </div>
  );
};

export default AboutPage;
