//From Skon
var datafile="interactive_data.csv";
var title;
console.log("Ready!");
$(document).ready(function () {
	AutoRefresh() ;
//    $("#clear").click(clearResults);

 //    $(".dropdown-menu li a").click(function(){
// 	console.log("pick!"+$(this).text());
// 	$(this).parents(".btn-group").find('.selection').text($(this).text());
// 	title=$(this).text();
//         var fileName=$(this).attr("data-file");
// 	console.log(fileName);
// 	makechart(fileName,title);
//     });
 });

function makechart(filename) {
    var data;
    $.ajax({
	type: "GET",
	url: filename,
	dataType: "text",
	success: function(response)
	{
	    //console.log(response);
	    data = $.csv.toArrays(response);
	    var chartData = prepData(data);
	    //console.log(chartData);
	    showChart(chartData);
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




// From HighCharts demo
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
                    "Unknown",
                    "Male",
                    "Female"
                ],
                "data": [
                    25.00,
                    21.42,
                    3.58
                ]
            }
        },
        {
            "y": 31.34,
            "color": colors[4],
            "drilldown": {
                "name": "Suicide",
                "categories": [
                    "Unknown",
                    "Male",
                    "Female"
                ],
                "data": [
                    15.67,
                    13.52,
                    2.15
                ]
            }
        },
        {
            "y": 17.45,
            "color": colors[0],
            "drilldown": {
                "name": "Homicide",
                "categories": [
                    "Unknown",
                    "Male",
                    "Female"
                ],
                "data": [
                    8.72,
                    7.39,
                    1.34
                ]
            }
        },
        {
            "y": 0.81,
            "color": colors[3],
            "drilldown": {
                "name": "Accident",
                "categories": [
                    "Unknown",
                    "Male",
                    "Female"
                ],
                "data": [
                    0.41,
                    0.35,
                    0.05
                ]
            }
        },
        {
            "y": 0.40,
            "color": colors[4],
            "drilldown": {
                "name": "Unknown",
                "categories": [
                    "Unknown",
                    "Male",
                    "Female"
                ],
                "data": [
                    0.20,
                    0.16,
                    0.04
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

// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gun Deaths in the United States in 2016'
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
        name: 'Gender',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function () {
                // display only if larger than 1
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


var x=0;
function displaydeaths() {
	console.log("hello"+x);
	$('#people').append('<img rec="'+x+'" src="http://www.clker.com/cliparts/i/9/w/S/E/Q/red-male-toilet-symbol-md.png" hspace="20" Vspace="20" height="50" width=30">');
	x++
	var e = document.getElementById('people');
	
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
  var n=document.getElementById('popup').img.rec.value();
  console.log("n:"+n);
  System.out.println("n:"+n);
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}
}



var intVar;
function AutoRefresh() {

    intVar = setInterval(function(){ displaydeaths()}, 5000);
}


