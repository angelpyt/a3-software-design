$(function() {
    var chartData;

    // Load data in using d3's csv function.
    d3.csv('data/data.csv', function(error, data) {
        // Put data into generic terms
        var prepData = function() {
            chartData = data.map(function(d) {
                return {
                    key: d.fruit,
                    value: d.count
                };
            });
        };
        
        prepData();
        // console.log(chartData);

        // Define function to draw dounut chart
        var donuts = donut().key("key").value("value");

        $('select').material_select()

        // Set change event to the select menu
        $('select').on('change', function(d) {
            value = $(this).val();
            prepData();
            chart.datum(chartData)
                .call(donuts);
        });

        var chart = d3.select("#my-chart")
            .datum(chartData)    
            .call(donuts)

    });
});