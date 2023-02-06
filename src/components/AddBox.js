import { useState } from 'react';
import '../App.css';
const AddBox = ({addInAllRecords}) =>{
    const defaultValue = {
        'vendorName': '',
        'amount': '',
        'roi': '',
        'date': ''
    }
    const [record, setRecord] = useState(defaultValue);
    const handleSubmit = () =>{
        if(record.amount==='' || record.vendorName==='' || record.roi==='' || record.date==='') return;
        addInAllRecords(record);
        setRecord(defaultValue);
    }
    const handleChange = (e) =>{
        setRecord({...record, [e.target.name]: e.target.value});
    }
    return (
        <div className='addBox'>
            <input type='text' name={'vendorName'} value={record.vendorName} placeholder={'Vendor name'} onChange={handleChange}/>
            <input type={'number'} name={'amount'} value={record.amount}  placeholder={'Enter amount'} onChange={handleChange}/>
            <input type={'number'} name={'roi'} value={record.roi} placeholder={'ROI'} onChange={handleChange}/>
            <input type={'date'} name={'date'} value={record.date} placeholder={'Select Date'} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddBox;