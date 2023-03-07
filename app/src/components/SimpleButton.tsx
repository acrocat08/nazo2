import React,  {useState, useEffect} from 'react';
import {get_data} from "../util/API";

function SimpleButton() {
    const [str, setStr] = useState("");

    useEffect(() => {
        async function fetchData() {
            const res = await get_data();
            setStr(res.data);
        }
    
        fetchData();
    }, []);
    
    return (
        <div>
            {str}
        </div>
    );
}


export default SimpleButton;