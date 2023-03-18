// import React, { useState } from "react";
// import Plot from "react-plotly.js";

// class Stock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: [],
//     };
//     this.symb = props.sign;
//   }

//   componentDidMount() {
//     this.fetchStock();
//   }

//   fetchStock() {
//     const pointerToThis = this;
//     console.log(pointerToThis);
//     const API_KEY = "HGJWFG4N8AQ66ICD";

//     let StockSymbol = pointerToThis.symb;
//     let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

//     let stockChartXValuesFunction = [];
//     let stockChartYValuesFunction = [];

//     fetch(API_Call)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data);

//         for (var key in data["Time Series (Daily)"]) {
//           stockChartXValuesFunction.push(key);
//           stockChartYValuesFunction.push(
//             data["Time Series (Daily)"][key]["1. open"]
//           );
//         }

//         // console.log(stockChartXValuesFunction);
//         pointerToThis.setState({
//           stockChartXValues: stockChartXValuesFunction,
//           stockChartYValues: stockChartYValuesFunction,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Plot
//           data={[
//             {
//               x: this.state.stockChartXValues,
//               y: this.state.stockChartYValues,
//               type: "scatter",
//               mode: "lines+markers",
//               marker: { color: "red" },
//             },
//           ]}
//           layout={{
//             width: 720,
//             height: 440,
//             title: `${this.symb} Chart`,
//           }}
//         />
//         <p>The prediction is that this stock goes up in price.</p>
//       </div>
//     );
//   }
// }

// export default Stock;

// CHAT GPT DID THIS
import React, { Component } from "react";
import Plot from "react-plotly.js";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
    };
  }

  componentDidMount() {
    this.fetchStock(this.props.sign);
  }

  componentDidUpdate(prevProps) {
    if (this.props.sign !== prevProps.sign) {
      this.fetchStock(this.props.sign);
    }
  }

  fetchStock(StockSymbol) {
    const API_KEY = "HGJWFG4N8AQ66ICD";

    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function(response) {
        return response.json();
      })
      .then(
        function(data) {
          console.log(data);

          for (var key in data["Time Series (Daily)"]) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(
              data["Time Series (Daily)"][key]["1. open"]
            );
          }

          this.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction,
          });
        }.bind(this)
      );
  }

  render() {
    return (
      <div>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: 720,
            height: 440,
            title: `${this.props.sign} Chart`,
          }}
        />
        <p>The prediction is that this stock goes up in price.</p>
      </div>
    );
  }
}

export default Stock;
