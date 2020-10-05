import Layout from "../components/Layout";
import Prices from "../components/Prices";
import fetch from "isomorphic-unfetch";

const Index = ({ bpi }) => {
  const { USD } = bpi;
  console.log(USD);
  return (
    <Layout>
      <div>
        <h1>About BizPrices</h1>
      </div>
      <p>Check current Bitcoin rates</p>
      <Prices bpi={bpi}></Prices>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const result = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  const data = await result.json();

  return {
    bpi: data.bpi,
  };
};

// Index.getInitialProps = async function () {
//   const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//   const data = await res.json();

//   return {
//     bpi: data.bpi,
//   };
// };

export default Index;
