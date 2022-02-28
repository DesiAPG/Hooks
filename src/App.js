import "./App.css";
import { useState } from "react";
import atanagildo from "./reyes/rey_atanagildo.png";
import ervigio from "./reyes/rey_ervigio.png";
import ataulfo from "./reyes/rey_ataulfo.png";
import leogivildo from "./reyes/rey_leogivildo.png";
import recesvinto from "./reyes/rey_recesvinto.png";
import sisebuto from "./reyes/rey_sisebuto.png";
import NewComponent from "./NewComponent";

const App = () => {
  const [total, setTotal] = useState(0);

  const kings = [
    {
      name: "Atanagildo",
      color: "darkolivegreen",
      price: 178,
    },
    {
      name: "Ervigio",
      color: "crimson",
      price: 169,
    },
    {
      name: "Ataúlfo",
      color: "peru",
      price: 81,
    },
    {
      name: "Leogivildo",
      color: "darkmagenta",
      price: 126,
    },
    {
      name: "Recesvinto",
      color: "royalblue",
      price: 141,
    },
    {
      name: "Sisebuto",
      color: "teal",
      price: 69,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total to pay: ${total}</h1>
        <div className="container">
          <div className="card atanagildo">
            <NewComponent
              name={kings[0].name}
              img={atanagildo}
              price={kings[0].price}
              setTotal={setTotal}
            />
          </div>

          <div className="card ervigio">
            <NewComponent
              name={kings[1].name}
              img={ervigio}
              price={kings[1].price}
              setTotal={setTotal}
            />
          </div>
          <div className="card ataulfo">
            <NewComponent
              name={kings[2].name}
              img={ataulfo}
              price={kings[2].price}
              setTotal={setTotal}
            />
          </div>
          <div className="card leogivildo">
            <NewComponent
              name={kings[3].name}
              img={leogivildo}
              price={kings[3].price}
              setTotal={setTotal}
            />
          </div>
          <div className="card recesvinto">
            <NewComponent
              name={kings[4].name}
              img={recesvinto}
              price={kings[4].price}
              setTotal={setTotal}
            />
          </div>
          <div className="card sisebuto">
            <NewComponent
              name={kings[5].name}
              img={sisebuto}
              price={kings[5].price}
              setTotal={setTotal}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
