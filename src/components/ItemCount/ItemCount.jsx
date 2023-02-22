import "./ItemCount.css";

const ItemCount = ({count, setCount}) => {
  const onAdd = () => {
    setCount (count + 1);
  };
  const restar = () => {
    if (count === 0) {
      return;
    }
    setCount (count - 1);
  };
  
  return (
    <div className="counter"> 
    <div className="controllers">
      <button onClick={restar}>-</button>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
    </div>
  );
};

export default ItemCount;
  
    /* const [counter, setCounter] = useState (0);
    const onAdd = () => {
        setCounter(counter + 1);
    }
    const substract = () =>{
        if (counter!== 0){
            setCounter(counter - 1);
        }
    };
    
    return (
        <div>
            <h2>{counter}</h2>
        
            <div>
                <button onClick={onAdd}>+</button>
                <button onClick={substract}>-</button>
            </div>
        </div>
    );*/




/* import "./ItemCount.css";

const ItemCount = ({count, setCount}) => {
  const onAdd = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>-</button>
        <div>
          <span>{count}</span>
        </div>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

export default ItemCount; */
