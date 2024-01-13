import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import data from "./data.js";

// import katieZaferes from "./assets/katie-zaferes.png";

function App() {
  console.log(data);
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // {...item}
        item={item}
        // id={item.id}
        // title={item.title}
        // desc={item.desription}
        // price={item.price}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // location={item.location}
        // reviewCount={item.stats.reviewCount}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>{" "}
    </>
  );
}

export default App;
