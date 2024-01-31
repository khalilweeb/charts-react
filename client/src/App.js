import { useState } from "react";
import "./app.css";
import Canva from "./components/Canva";
import Header from "./components/Header/Header";
import PieChart from "./components/Pie";
import SideBar from './components/sidBar/SideBar';

const datasetskh = [
  {
    label: "gained",
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
const datasetsyo = [
  {
    label: "gained",
    data: [
      { label: "jan", amount: 80, color: "#4CAF50" },
      { label: "fev", amount: 80, color: "#4CAF50" },
      { label: "mars", amount: 70, color: "#4CAF50" },
      { label: "avr", amount: 60, color: "#4CAF50" },
      { label: "may", amount: 50, color: "#4CAF50" },
    ],
  },

  {
    label: "lost",
    data: [
      { label: "jan", amount: 50, color: "#2196F3" },
      { label: "fev", amount: 50, color: "#2196F3" },
      { label: "mars", amount: 50, color: "#2196F3" },
      { label: "avr", amount: 50, color: "#2196F3" },
      { label: "may", amount: 50, color: "#2196F3" },
    ],
  },
  
];
const datasetshi = [
  {
    label: "gained",
    data: [
      { label: "jan", amount: 80, color: "#4CAF50" },
      { label: "fev", amount: 80, color: "#4CAF50" },
      { label: "mars", amount: 80, color: "#4CAF50" },
      { label: "avr", amount: 80, color: "#4CAF50" },
      { label: "may", amount: 80, color: "#4CAF50" },
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

const pieDatakhalil = [
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
const pieDatayo = [
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
const pieDatahi = [
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





const data = [{name: "khalil" , data: datasetskh } , {name: "hello" , data: datasetsyo }, {name: "hi" , data: datasetshi }];
const pieData = [{name: "khalil" , data: pieDatakhalil } , {name: "hello" , data: pieDatayo }, {name: "hi" , data: pieDatahi }]


function App() {
 
  const [diplayedData , setDisplayedData] = useState(datasetskh);
  const [piediplayedData , setPieDisplayedData] = useState(pieDatakhalil);

  const displayName = (name ) => {
  
    data.forEach((ele) => {
      if(ele.name === name) {
        setDisplayedData(ele.data);
        
      }
    });
    pieData.forEach((ele) => {
      if(ele.name === name) {
        setPieDisplayedData(ele.data);
        
      }
    });
   
  }
  return (
    <div className="App">
      <Header diplayName={displayName}/>
     
        <SideBar/>
        <div className="div">
        <Canva dataSet={diplayedData}/>
       <PieChart pieData={piediplayedData}/>

        </div>
       
      
    </div>
  );
}

export default App;
