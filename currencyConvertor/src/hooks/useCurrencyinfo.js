
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data, setData] = useState({});

    useEffect(()=>{
        fetch(`url`).then((res)=>res.json())
        .then((res)=>setData(res))
    }, [currency])
    

    console.log(data);
    
    return data;
}

export default useCurrencyInfo;