import  {useCounterStore} from './store/counterStore';
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react';


export default function App() {
  // const count = useCounterStore((state)=> state.count);
  // const title = useCounterStore((state)=> state.title);
  //Otra forma para llamar a los valores de manera conjunta
  const {title, count, posts} = useCounterStore((state)=> ({
    count: state.count,
    title: state.title,
    posts: state.posts
  }), shallow);

  const {increment, getPosts, clearStore, multiply} = useCounterStore();

  useEffect(() => {
      getPosts();
    }, []);


  return (
    <>
      <h1>Aplicación usando Zunstand</h1>
      <h2>Título: {title}</h2>

      <button
        onClick={() => {
          increment(10);
        }}
      >
        Incrementa en 10
      </button>
      <h3>Count: {count}</h3>

      <hr />
      {
        JSON.stringify(posts)
      }

      <button
        onClick={() => clearStore()}
      >Clear</button>


      <button onClick={() => multiply(2)}>Multiply by 2</button>
    </>
  )
}
