import clss from "./Header.module.css";
import { useState } from "react";
const Header = (props) => {
  const [selectedName, setSlectedName] = useState("khalil");

  const onChangeNameHandler = (event) => {
    setSlectedName(event.target.value);
    props.diplayName(selectedName);
  };

  return (
    <div className={clss.header}>
      <h1>Data</h1>
      <select  value={selectedName} onChange={(event) => onChangeNameHandler(event)}>
        <option value="khalil">Khalil</option>
        <option value="hello">hello</option>
        <option value="hi">hi</option>

      </select>
    </div>
  );
};

export default Header;
