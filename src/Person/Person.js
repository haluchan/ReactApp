import React from 'react'

const person = (props) => {
        // return <p>I'm a { props.name } and i { Math.floor( Math.random() * 30 )} years old</p>
        return (
          <div>
            <p>I'm a { props.name } and I { props.age } years old</p>
            <p>{ props.children }</p>
          </div>
        )// props.children 是父組件內的
};

export default person
