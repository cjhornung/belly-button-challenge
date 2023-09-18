//Use the D3 library to read in samples.json from the URL:
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
let metaData
let samples
d3.json(url).then(function(data) {
    console.log(data);
    let selector = d3.select("#selDataset");
    metaData = data.metadata;
    samples = data.samples;
    console.log("Meta_Data:",metaData);
    console.log("Samples:",samples);
    data.names.forEach((id) => {
        selector.append("option").text(id).property("value", id); 
    });
    barChart(samples)
});

function barChart(selection) {
    // Sample data for the horizontal bar chart
    var data = [{
        type: 'bar',
        orientation: 'h', // Set the orientation to horizontal
        x: [10, 20, 15, 25], // Data for the horizontal bars
        y: ['Label 1', 'Label 2', 'Label 3', 'Label 4'], // Labels for the bars
      }];

  // Layout configuration for the chart
  var layout = {
    title: 'Horizontal Bar Chart Example',
    xaxis: { title: 'Values' }, // X-axis title
    yaxis: { title: 'Labels' }, // Y-axis title
  };

  // Create the horizontal bar chart in the specified container
  Plotly.newPlot('bar', data, layout);

}


