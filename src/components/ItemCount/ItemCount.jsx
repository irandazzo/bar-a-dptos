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