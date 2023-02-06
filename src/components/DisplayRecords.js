import '../App.css';

const DisplayRecords = ({ allRecords }) => {
    const calculateInterest = (amount, roi, date) => {
        let oldDate = new Date(date);
        let curDate = new Date();
        let timePeriod = (curDate.getTime() - oldDate.getTime())/(1000 * 3600 * 24 * 30);
        return parseInt(amount)*timePeriod*(parseFloat(roi)/12)/100;
    }
    const calculateTotal = () => {
        let sum = 0;
        allRecords.map((record)=>{
            return sum+=parseInt(record.amount) + Math.floor(calculateInterest(record.amount,record.roi,record.date));
        })
        return sum;
    }
    return (
        <div>
            <table>
                {allRecords.length>0 && <thead>
                    <tr>
                        <th>Date</th>
                        <th>Vendor Name</th>
                        <th>ROI</th>
                        <th>Principal amount</th>
                        <th>Interest amount</th>
                        <th>Total amount</th>
                    </tr>
                </thead>}
                <tbody>
                    {allRecords.map((record,index) => (
                        <tr key={index}>
                            <td>{record.date}</td>
                            <td>{record.vendorName}</td>
                            <td>{record.roi}%</td>
                            <td>{record.amount}</td>
                            <td>{Math.floor(calculateInterest(record.amount,record.roi,record.date))}</td>
                            <td>{parseInt(record.amount) + Math.floor(calculateInterest(record.amount,record.roi,record.date))}</td>
                        </tr>
                    ))}
                    {allRecords.length>0 && <tr>
                        <td style={{font: "24px AssistantBold" , textAlign:'right'}} colSpan={5}>Total amount: </td>
                        <td style={{font: "24px AssistantBold"}}>{calculateTotal()}</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayRecords;