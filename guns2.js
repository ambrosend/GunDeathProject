//From Skon
var datafile="interactive_data.csv";
var title;
//console.log("Ready!");
$(document).ready(function () {
	//AutoRefresh() ;
	makechart();
 });

function makechart() {
    var data;
    $.ajax({
	type: "GET",
	url: datafile,
	dataType: "text",
	success: function(response)
	{
		//console.log(response+$.csv);
	    var data = $.csv.toArrays(response);
	    //console.log(JSON.stringify(data));
	    
	    //var chartData = prepData(data);
	    //showChart(chartData);
	}
    });
}

function prepData(data) {
    var theData = [];
    $.each(data ,function (index, row) {
	if (index>0) {
	    var aRow = []
	    $.each(row ,function (index, item) {
		if (index < 2) {
		    if (index==1) item=+item;;
		    aRow.push(item);
		}
	    });
	    theData.push(aRow);
	}
    });
    return theData;
}


// From HighCharts demo for donut visualizations
var colors = Highcharts.getOptions().colors,
    categories = [
        "None Selected",
        "Suicide",
        "Homicide",
        "Accident",
        "Unknown"
    ],
    data = [
        {
            "y": 50.00,
            "color": colors[2],
            "drilldown": {
                "name": "None Selected",
                "categories": [
                    "None Selected",
                    "White",
                    "Black",
                    "Hispanic",
                    "Asian/Pacific Islander",
                    "Other"
                ],
                "data": [
                    25.00,
                    16.43,
                    5.78,
                    2.24,
                    0.33,
                    0.22  
                ]
            }
        },
        {
            "y": 31.34,
            "color": colors[4],
            "drilldown": {
                "name": "Suicide",
                "categories": [
                    "None Selected",
                    "White",
                    "Black",
                    "Hispanic",
                    "Asian/Pacific Islander",
                    "Other"
                ],
                "data": [
                    15.67,
                    13.73,
                    0.83,
                    0.79,
                    0.18,
                    0.14
                ]
            }
        },
        {
            "y": 17.45,
            "color": colors[0],
            "drilldown": {
                "name": "Homicide",
                "categories": [
                    "None Selected",
                    "White",
                    "Black",
                    "Hispanic",
                    "Asian/Pacific Islander",
                    "Other"
                ],
                "data": [
                    8.73,
                	2.26,
                    4.84,
                    1.40,
                    0.14,
                    0.08
                ]
            }
        },
        {
            "y": 0.81,
            "color": colors[3],
            "drilldown": {
                "name": "Accident",
                "categories": [
                    "None Selected",
                    "White",
                    "Black",
                    "Hispanic",
                    "Asian/Pacific Islander",
                    "Other"
                ],
                "data": [
                    0.41,
                    0.28,
                    0.08,
                    0.04,
                    0.00,
                    0.00
                ]
            }
        },
        {
            "y": 0.40,
            "color": colors[4],
            "drilldown": {
                "name": "Unknown",
                "categories": [
                    "None Selected",
                    "White",
                    "Black",
                    "Hispanic",
                    "Asian/Pacific Islander",
                    "Other"
                ],
                "data": [
                    0.20,
                    0.14,
                    0.04,
                    0.02,
                    0.00,
                    0.00
                ]
            }
        },
    ],

    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,


    drillDataLen,
    brightness;
    
    processData1(data);
	

function processData1(data) {
// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
        });
    }
}
}


//Create the chart for donut visualizations
Highcharts.chart('container2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gun Deaths: Intent and Race'
    },
    subtitle: {
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Intent',
        data: browserData,
        size: '60%',
        dataLabels: {
            formatter: function () {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Race',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                //display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});




