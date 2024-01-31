import { useState } from "react";
import "./app.css";
import Canva from "./components/Canva";
import Header from "./components/Header/Header";
import PieChart from "./components/Pie";
import SideBar from './components/sidBar/SideBar';

function App() {
  const [person , serPerson] = useState("khalil")
  const datasets = [
    {
      label: "khalil",
      data: [
        { label: "jan", amount: 30, color: "#4CAF50" },
        { label: "fev", amount: 60, color: "#4CAF50" },
        { label: "mars", amount: 45, color: "#4CAF50" },
        { label: "avr", amount: 75, color: "#4CAF50" },
        { label: "may", amount: 40, color: "#4CAF50" },
      ],
    },

    {
      label: "lost",
      data: [
        { label: "jan", amount: 50, color: "#2196F3" },
        { label: "fev", amount: 30, color: "#2196F3" },
        { label: "mars", amount: 80, color: "#2196F3" },
        { label: "avr", amount: 4, color: "#2196F3" },
        { label: "may", amount: 60, color: "#2196F3" },
      ],
    },
    
  ];
  const pieData = [
    {
      label: 'jan',
      data: 50,
      color: '#4CAF50',
    },
    {
      label: 'fev',
      data: 30,
      color: '#2196F3',
    },
    {
      label: 'mars',
      data: 20,
      color: 'red',
    },
    {
      label: 'avr',
      data: 20,
      color: 'black',
    },
    {
      label: 'may',
      data: 20,
      color: 'yellow',
    },
  ];


  const displayName = (name) => {
    serPerson(name)
  }

  const ele = <p>{person}</p>
  return (
    <div className="App">
      <Header diplayName={displayName}/>
     
        <SideBar/>
        <div className="div">
        <Canva dataSet={datasets}/>
       <PieChart pieData={pieData}/>

        </div>
       
      
    </div>
  );
}

export default App;
