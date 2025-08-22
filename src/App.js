import React, { useState,useEffect, useReducer, useRef } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Exercise from './pages/Exercise';
import Edit from './pages/Edit';
import Diet from './pages/Diet';

const day = new Date();
day.getDate(day.getDate()-1);
const mockData=[
  {
    id:"0",
    date:day.getTime(),
    category:"exercise",
    item:"축구",
    kcal: 300,
  },
  {
    id:"1",
    date:day.getTime(),
    category:"exercise",
    item:"헬스",
    kcal: 400,
  },
  {
    id:"2",
    date:day.getTime(),
    category:"diet",
    item:"치킨",
    kcal: 400,
  },
  {
    id:"3",
    date:day.getTime(),
    category:"exercise",
    item:"복싱",
    kcal: 800,
  },
  {
    id:"4",
    date:day.getTime(),
    category:"diet",
    item:"짜장면",
    kcal: 600,
  },
  {
    id:"5",
    date:day.getTime(),
    category:"diet",
    item:"카라멜마끼야또",
    kcal: 280,
  },

];

function reducer(state, action){
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      return [action.data,...state];
    }
    case "UPDATE":{
      return state.map((it)=>
          String(it.id) === String(action.data.id)?{...action.data}:it
      );
    }
    case "DELETE":{
      return state.filter((it)=>String(it.id)!==String(action.targetId));
    }

    default:{
      return state;
    }
  }
}

export const XStateContext = React.createContext();

export const XDispatchContext = React.createContext();


const App =()=> {
  const [isDataLoaded,setIsDataLoaded] = useState(false);
  const [data,dispatch] = useReducer(reducer,[]);
  const idRef = useRef(5);

  useEffect(()=>{
    dispatch({
      type:"INIT",
      data:mockData,
    });
    setIsDataLoaded(true);
  },[]);

  const onCreate=(date,category,item,kcal)=>{
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current,
        date:new Date(date).getTime(),
        category,
        item,
        kcal,
      },
    });
    idRef.current +=1;
  };

  const onUpdate=(targetId,date,category,item,kcal)=>{
    dispatch({
      type:"UPDATE",
      data:{
        id:targetId,
        date: new Date(date).getTime(),
        category,
        item,
        kcal
      },
    });
  };

  const onDelete=(targetId)=>{
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if(!isDataLoaded){
    return <div> 데이터를 불러 오는 중입니다...</div>
  }else{  
    return (
    <XStateContext.Provider value={data}>
      <XDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/exercise/:id" element={<Exercise />} />
          <Route path="/diet/:id" element={<Diet />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
      </XDispatchContext.Provider>
    </XStateContext.Provider>
  );
}
};

export default App;
