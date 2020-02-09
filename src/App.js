import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person.js";
const App = props => {
  // useState 建立component 會回傳一個初始狀態值，另一個是要更新初始值的function
  // personsState 初始設定值，setPersonsState 要更新初始值的function
  // 要更新的組成，要初始組成一樣。因為會被完全取代
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "mac", age: 28 },
      { name: "alex", age: 23 },
      { name: "pei", age: 22 }
    ]
  });
  // 多重用法，直接傳入物件或字串 setOtherState目前沒設定function
  const [otherState, setOtherState] = useState({
    otherState: "set other state"
  });

  console.log(personsState, otherState);

  const switchNameHandler = name => {
    //要用arrow function
    // console.log('ckicked')
    //DO DO THIS: this.state.persons[0].name = 'apple'
    setPersonsState({
      persons: [
        { name: name, age: 28 },
        { name: "lux", age: 23 },
        { name: "pei", age: 30 }
      ],
      otherState: "update other value"
    });
  };
  return (
    <div className="App">
      <h1>I'm a react app</h1>
      <p>
        <button onClick={() => switchNameHandler("Luia")}>switch name</button>
      </p>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        hello
      </Person>
      <Person
        click={() => switchNameHandler("pasd")}
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
