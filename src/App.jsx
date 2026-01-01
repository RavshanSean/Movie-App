import { useState, useEffect } from 'react'

const Card = ({ title }) => {
  const [count, setCount] = useState( /*initialState:*/ 0);
  const [hasLiked, setHasLiked] = useState( /*initialState:*/ false);

  useEffect( /*effect:*/() => {
    console.log('${title} has een liked: ${hasLiked}');
  }, /*deps:*/[hasLiked]);

  return (
    <div className="card" onClick={() => setCount( /*value:*/ count + 1)}>
      <h2>{title} <br/> {count}</h2>

      <button onClick={() => setHasLiked( !hasLiked )}>
        {hasLiked ? '🫠' : '🫥'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
        <Card title="Star Wars" rating={5} isCool={true} />
        <Card title="Avatar" />
        <Card title="The Lion King" />
    </div>
  )
}

export default App
