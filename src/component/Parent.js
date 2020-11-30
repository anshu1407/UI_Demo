import React,{useState} from 'react'
import Child from './Child'

function Parent() {
    const [data,setData]= useState('');
    const handleCallBack=(childData)=>{
          setData(childData)
    }
    console.log(data)
    return (
        <div>
            <Child parentCallBack={handleCallBack}></Child>
            {data}
        </div>
    )
}

export default Parent
