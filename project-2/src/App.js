import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho redenrizou ');
  return <button onClick={() => incrementButton(10)}>Comp</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai redenrizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

// COMPONENT EXAMPLE USEEFFECT
// const eventFn = () => console.log('h1-clicado');
// function App() {
// const [counter, setCounter] = useState(0);
// const [counter2, setCounter2] = useState(0);

// componentDidUpdate - executa toda vez que o componet atualiza
// useEffect(() => {
//   console.log('componentDidUpdate');
// });

// componentDidMount - executa 1x
// useEffect(() => {
// console.log('componentDidMount');
// document.querySelector('h1')?.addEventListener('click', eventFn);

// COMPONENT WILL UMOUNT - LIMPEZA
//   return () => {
//     document.querySelector('h1')?.removeEventListener('click', eventFn);
//   };
// }, []);

// com dependência - executa toda vez que a depedência mudar
// useEffect(() => {
//   console.log(`C1, ${counter} C2: ${counter2}`);
// }, [counter, counter2]);

// return (
//   <div className="App">
//     <p>Teste 1</p>
//     <h1>
//       C1: {counter} C2: {counter2}
//     </h1>
//     <button onClick={() => setCounter(counter + 1)}>+</button>
//     <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
//   </div>
// );
// }

//COMPONENT EXAMPLE USESTATE
// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const reverseClass = reverse ? 'reverse' : '';

//   const handleClick = () => {
//     setReverse((preventReverse) => !preventReverse);
//   };

//   const handleIncrement = () => {
//     setCounter((preventCounter) => preventCounter + 1);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//         <h1>Contador: {counter}</h1>

//         <p>
//           <button type="button" onClick={handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </p>

//         <p>
//           <button type="button" onClick={handleIncrement}>
//             Increment {counter}
//           </button>
//         </p>
//       </header>
//     </div>
//   );
// }

//COMPONENT EXAMPLE CLASS

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
