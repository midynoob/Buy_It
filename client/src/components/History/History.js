import React, { useEffect,useState } from 'react';

function History(props) {

    const [History, setHistory] = useState([])

    useEffect(()=>{
        if(props.user && props.user.userData){
            setHistory(props.user.userData.history)
        }
        
    },[props.user])

    
    return (
        <div>
            History
            {History && History.map((item) => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                </tr>
            ))}
        </div>
    );
}

export default History;