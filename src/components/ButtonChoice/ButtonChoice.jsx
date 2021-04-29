import React from 'react'

function ButtonChoice({setShow}) {
    return (
        <div className="button_div">
            <button className="choice" onClick={() => (setShow('all'))}>ALL</button>
            <button className="choice" onClick={() => (setShow('child'))}>CHILD</button>
            <button className="choice" onClick={() => (setShow('adult'))} >ADULT</button>
            <button className="choice" onClick={() => (setShow('baby'))}>BABY</button>
        </div>
    )
}

export default ButtonChoice

