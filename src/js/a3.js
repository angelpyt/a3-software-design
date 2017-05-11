/* 
** Shin Choi
** INFO 474 A3 Software Design
** This is a js file for generating a resuable d3 donut chart
*/
function donut() {
	// default settings	
	var margin = {top: 20, right: 20, bottom: 20, left: 20},
		width = 720,
		height = 540,
		color = d3.scaleOrdinal(d3.schemeCategory20c),
		legendSize = 18,
		legendSpacing = 4,
		radiiRatio = 2,
		key,
		value;
	

	// Internal function that gets returned
	function chart(selection) {

	    // For each selected element, perform the function
	    selection.each(function(data) {
	     	// generate chart here; `data` is the data and `this` is the element

	     	// Create a new pie chart
            var pie = d3.pie()
                .value(function(d) { return +d[value]; })
				.sort(null);

	     	// Construct radius
	     	var radius = Math.min(width, height) / 2;

	     	// Construct an arc
	     	var arc = d3.arc()
	     			.outerRadius(radius)
	     			.innerRadius(radius / radiiRatio);

            var svg = selection.append('svg')
                .attr('width', width)
                .attr('height', height)
            
            var g = svg.append('g')
            			.attr("transform", "translate(" + width / 2  + "," + height / 2 + ")");

            // draw each donut chart slice
            var path = g.selectAll('path')
            			.data(pie(data))
            			.enter()
            			.append('path')
            			.attr('fill', function(d) { return color(d.data[key]); })
            			.attr('d', arc);

		    // add legend
			var legend = svg.append('g')
				.attr("transform", "translate(" + margin.left  + "," + margin.top + ")")
				.selectAll('.legend')
				.data(pie(data))
		    	.enter()
		    	.append('g')
		    	.attr('class', 'legend')
		    	.attr('transform', function(d, i) {
					var height = legendSize + legendSpacing;
					var x = legendSize;
					var y = i * height;
					return 'translate(' + x + ',' + y + ')';
		    	});
		    	      
		   	legend.append('rect')
		    	.attr('width', legendSize)
		    	.attr('height', legendSize)
		    	.style('fill', function(d) { return color(d.data[key]); })
		    	.style('stroke', function(d) { return color(d.data[key]); });
		    	      
		   	legend.append('text')
		    	.attr('x', legendSize + legendSpacing)
		    	.attr('y', legendSize - legendSpacing)
		    	.text(function(d) { return d.data[key] + ": " + d[value]; });
		});
	}

	chart.margin = function(value) {
	    if (!arguments.length) return margin;
	    margin = value;
	    return chart;
	}

	chart.width = function(value) {
		if (!arguments.length) return width;
		width = value;
		radius = Math.min(width, height) / 2;
		return chart;
	};

	chart.height = function(value) {
		if (!arguments.length) return height;
		height = value;
		radius = Math.min(width, height) / 2;
		return chart;
	};

    chart.color = function(value) {
        if (!arguments.length) return color;
        color = d3.scaleOrdinal(value);
        return chart;
    };

    chart.radiiRatio = function(value) {
        if (!arguments.length) return radiiRatio;
        radiiRatio = value;
        return chart;
    };

    chart.key = function(value) {
        if (!arguments.length) return key;
        key = value;
        return chart;
    };

    chart.value = function(inputValue) {
        if (!arguments.length) return value;
        value = inputValue;
        return chart;
    };

    chart.legendSize = function(value) {
        if (!arguments.length) return legendSize;
        legendSize = value;
        return chart;
    };

    chart.legendSpacing = function(value) {
        if (!arguments.length) return legendSpacing;
        legendSpacing = value;
        return chart;
    };

	return chart;
};