# a3-software-design
INFO 474 A3 Software Design

a3.js is a d3-based, reusable, and minimal donut chart library.

## Prerequisite
In order to use this library,  you will need to:

* Link a d3.js and a3.js files in your html file(s).
* Insert a <code>div</code> (or equivalent) tag with the **id = "my-chart"** in your HTML body tag in order to indicate where a3.js should render a donut chart.

## Methods (Alphabetized)
The following methods are available to customize a donut chart.
* [color](#color)
* [height](#height)
* [key](#key)
* [legend size](#legendSize)
* [legend spacing](#legendSpacing)
* [margin](#margin)
* [Radii Ratio](#radiiRatio)
* [width](#width)
* [value](#value)

### color(string) <a name="color"></a>
**Default Value:** schemeCategory20c  

**Available Parameters:**
* schemeCategory10
* schemeCategory20
* schemeCategory20b
* schemeCategory20c

"Color" refers to the [d3 color schemes (d3.scaleOrdinal)](https://github.com/d3/d3-scale/blob/master/README.md#schemeCategory10). This color scheme determines the color scheme of a donut chart pieces.

### height(integer) <a name="height"></a>
**Default Value:**  540

"Height" is the height of a svg. The height and width together determine the inner and outer radius of a donut chart by computing <code>"Math.min(width, height) / 2;"</code>, the position of the g (<code>.attr("transform", "translate(" + width / 2  + "," + height / 2 + ")");</code>)


### key(string) <a name="key"></a>
**Default Value:** ""

"key" refers to the data you want to compare by.

### legendSize(integer) <a name="legendSize"></a>
**Default Value:** 18

"legendSize" is the size of the legend "box." This determines the overall height of the legend area, the width and height of a legend "box" and the position of the legend.

### legendSpacing(integer) <a name="legendSpacing"></a>
**Default Value:** 4

"legendSpacing" is the spacing between the legend. This determines the overall height of the legend area, size, x and y position of the legend text.

### margin(object{}) <a name="margin"></a>
**Default Value:** {top: 20, right: 20, bottom: 20, left: 20}

"margin" refers the margin of the svg. <code>Margin.left</code> and <code>margin.top</code> controls the position of the legend.

### radiiRatio(integer) <a name="radiiRatio"></a>
**Default Value:** 2

"radiiRatio" is the ratio between the outer radius and inner radius. While the outer radius is computed by the height and width variables (<code>"outerRadius(Math.min(width, height) / 2)"</code>), the inner radius is computed by <code>"innerRadius(radius / radiiRatio)"</code>

### width(integer) <a name="width"></a>
**Default Value:** 720

"width" refers to the width of the svg. Again, the height and the width determines the radius of a donut chart.

### value(string) <a name="value"></a>
**Default Value:** ""

"value" refers to the values in data that will dictate proportions on chart.
