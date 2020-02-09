import React from 'react'


const TagFilter = (props) => {
    return (
        <>
            <h1>{props.data} </h1>
            <button value= {props.data} onClick={props.toogleMap}> Some but</button>
        </>
    )

}


export default TagFilter