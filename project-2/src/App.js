import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('filho redenrizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('pai renderizou');
  // component did mount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não exitem posts.</p>}
    </div>
  );
}

//  EXEMPLO DE CALLBACK
// import React, { useState, useEffect, useCallback } from 'react';

// const Button = React.memo(function Button({ incrementButton }) {
//   console.log('filho redenrizou ');
//   return <button onClick={() => incrementButton(10)}>Comp</button>;
// });

// Button.propTypes = {
//   incrementButton: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('pai redenrizou');

//   return (
//     <div className="App">
//       <p>Teste 3</p>
//       <h1>C1: {counter}</h1>
//       <Button incrementButton={incrementCounter} />
//     </div>
//   );
// }

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
