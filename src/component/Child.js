import React from 'react'

function Child({parentCallBack}) {

    const onTigger=()=>{
        parentCallBack('Data from child')
    }
    return (
        <div>
            <form onSubmit={onTigger}>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default Child
