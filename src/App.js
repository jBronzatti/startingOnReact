import './App.css';
import { useState } from 'react';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name} {props.lastName}</h1>
      <h2>Age: {props.age} - Life stage: {lifeStageCalc(props.age, props.name, props.lastName)}</h2>
    </>
  );
};
const lifeStageCalc = (age, name, lastName) =>
  age <= 0 ? 'Not even born yet' :
    age < 12 ? 'is a Child' :
      age < 18 ? 'is a Teenager' :
        age < 60 ? 'is an Adult' :
          age < 100 ? 'is a Senior' :
            `Had a good life, RIP ${name} ${lastName}`;

const App = () => {
  const name = 'John';
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'someone'}, let's learn React!</h1>
      <p>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      </p>
      <p>
        <Person name='John' lastName='Smith' age={1 + counter} />
        <Person name='Mary' lastName='Angel' age={16 + counter} />
        <Person name='José' lastName='Miguel' age={35 + counter} />
        <Person name='Bruce' lastName='Wayne' age={66 + counter} />
        <Person name='Matus' lastName='Além' age={100 + counter} />
      </p>
    </div>
  );
}

export default App;
