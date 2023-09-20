# Belly Button Challenge

Link to dashboard: https://cjhornung.github.io/
![image](https://github.com/cjhornung/belly-button-challenge/assets/134234019/9c6377f7-e675-4fe5-be13-cc49338ef6d0)

## Background
In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site, which catalogsthe microbes that colonize human navels.
The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dashboard Functions
A horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
- Uses sample_values as the values for the bar chart.
- Uses otu_ids as the labels for the bar chart.
- Uses otu_labels as the hovertext for the chart.

A bubble chart that displays each sample.
- Uses otu_ids for the x values.
- Uses sample_values for the y values.
- Uses sample_values for the marker size.
- Uses otu_ids for the marker colors.
- Uses otu_labels for the text values.

Each key-value pair from the metadata JSON object are displayed in the Demographic Info box

All the plots update when a new sample is selected
