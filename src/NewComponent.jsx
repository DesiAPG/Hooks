import "./App.css";

function NewComponent({name,img,price,setTotal}) {

  const calculate = (e) => {
    e.target.parentNode.style.display='none';
    setTotal((e)=>e+price);
  };

  return (
      <>  
          <h2>King {name}</h2>
          <img src={img} alt="" />
          <p>Price: ${price}</p>
          <button onClick={calculate}>Buy</button>
        </>
  );
}

export default NewComponent;
