import { useState, useEffect } from 'react';
import './App.css';
import AddBox from './components/AddBox';
import DisplayRecords from './components/DisplayRecords';

function App() {
  const [allRecords, setAllRecords] = useState([]);
  useEffect(() => {
    if(allRecords.length>0 ) localStorage.setItem('records', JSON.stringify(allRecords));
  }, [allRecords]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('records'));
    if (items) {
     setAllRecords(items);
    }
  }, []);
  const addInAllRecords = (record) =>{
    setAllRecords([...allRecords,record]);
  }
  return (
    <div>
      <AddBox addInAllRecords={addInAllRecords}/>
      <DisplayRecords allRecords={allRecords} />
    </div>
  );
}

export default App;
