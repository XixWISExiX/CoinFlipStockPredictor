anychart.onDocumentReady(function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/csv-data/csco-daily.csv
  anychart.data.loadCsvFile(
    "https://cdn.anychart.com/csv-data/csco-daily.csv",
    function (data) {
      // create data table on loaded data
      var dataTable = anychart.data.table();
      dataTable.addData(data);

      // map loaded data for the ohlc series
      var mapping = dataTable.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4,
      });

      // map loaded data for the scroller
      var scrollerMapping = dataTable.mapAs();
      scrollerMapping.addField("value", 5);

      // create stock chart
      var chart = anychart.stock();

      // create first plot on the chart
      var plot = chart.plot(0);
      // set grid settings
      plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

      // create EMA indicators with period 50
      plot
        .ema(dataTable.mapAs({ value: 4 }))
        .series()
        .stroke("1.5 #455a64");

      var series = plot.candlestick(mapping);
      series.name("CSCO");
      series.legendItem().iconType("rising-falling");

      // create scroller series with mapped data
      chart.scroller().candlestick(mapping);

      // set chart selected date/time range
      chart.selectRange("2007-01-03", "2007-05-20");

      // set container id for the chart
      chart.container("container");
      // initiate chart drawing
      chart.draw();

      // create range picker
      var rangePicker = anychart.ui.rangePicker();
      // init range picker
      rangePicker.render(chart);

      // create range selector
      var rangeSelector = anychart.ui.rangeSelector();
      // init range selector
      rangeSelector.render(chart);
    }
  );
});

// anychart.onDocumentReady(function () {
//   anychart.data.loadCsvFile(
//     "https://gist.githubusercontent.com/shacheeswadia/cd509e0b0c03964ca86ae7d894137043/raw/5f336c644ad61728dbac93026f3268b86b8d0680/teslaDailyData.csv",
//     function (data) {
//       // create data table on loaded data
//       var dataTable = anychart.data.table();
//       dataTable.addData(data);

//       // map loaded data for the candlestick series
//       var mapping = dataTable.mapAs({
//         open: 1,
//         high: 2,
//         low: 3,
//         close: 4,
//       });
//     }
//   );
// });

// // create stock chart
// var chart = anychart.stock();

// // create first plot on the chart
// var plot = chart.plot(0);

// // set grid settings
// plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

// var series = plot.candlestick(mapping).name("Tesla");

// series.legendItem().iconType("rising-falling");

// // create scroller series with mapped data
// chart.scroller().candlestick(mapping);

// // set chart selected date/time range
// chart.selectRange("2020-11-27", "2021-11-26");

// // create range picker
// var rangePicker = anychart.ui.rangePicker();

// // init range picker
// rangePicker.render(chart);

// // create range selector
// var rangeSelector = anychart.ui.rangeSelector();

// // init range selector
// rangeSelector.render(chart);

// // sets the title of the chart
// chart.title("Tesla Inc. Stock Chart");

// // set container id for the chart
// chart.container("container");

// // initiate chart drawing
// chart.draw();

// // create and setup line series
// var lineSeries = plot.line(dataTable).name("Tesla");

// // set rising/falling and normal stroke settings
// lineSeries.risingStroke("#2FA85A", 3, null, "round", "round");
// lineSeries.fallingStroke("#EE4237", 3, null, "round", "round");

// // create scroller series
// chart.scroller().line(dataTable);

// // create EMA indicators with period 50
// plot
//   .ema(dataTable.mapAs({ value: 4 }))
//   .series()
//   .stroke("1.5 #455a64");

// // create envelope indicator
// chart.plot().env(mapping);

// // second plot to show macd values
// var indicatorPlot = chart.plot(1);

// // map the values
// var macdIndicator = indicatorPlot.macd(mapping);

// // set series type for histogram series.
// macdIndicator.histogramSeries("area");

// macdIndicator.histogramSeries().normal().fill("green .3").stroke("green");

// macdIndicator
//   .histogramSeries()
//   .normal()
//   .negativeFill("red .3")
//   .negativeStroke("red");

// // set second plot's height
// indicatorPlot.height("40%");

// // create awesome oscillator series
// var aoIndicator = indicatorPlot.ao(mapping);

// // set rising and falling stroke settings
// aoIndicator.series().risingStroke("green");
// aoIndicator.series().fallingStroke("red");

// // set second plot's height
// indicatorPlot.height("40%");

// // create annotation rectangle
// annotation.rectangle({
//   // X - part of the first anchor
//   xAnchor: "2021-11-08",
//   // Y - part of the first anchor
//   valueAnchor: 950,
//   // X - part of the second anchor
//   secondXAnchor: "2021-11-26",
//   // Y - part of the second anchor
//   secondValueAnchor: 1250,
//   // set stroke settings
//   stroke: "3 #c20000",
//   // set fill settings
//   fill: "#c20000 0.25",
// });

// // create annotation and set settings
// annotation
//   .label()
//   .xAnchor("2021-11-26")
//   .valueAnchor(950)
//   .anchor("right-top")
//   .offsetY(5)
//   .padding(6)
//   .text("Elon Musk sells Tesla stock worth $1.05 billion")
//   .fontColor("#fff")
//   .background({
//     fill: "#c20000 0.75",
//     stroke: "0.5 #c20000",
//     corners: 2,
//   });
