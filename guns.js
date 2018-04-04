//From Skon
var datafile="interactive_data.csv";
var title;
console.log("Ready!");
<<<<<<< HEAD

//    $("#clear").click(clearResults);

 //    $(".dropdown-menu li a").click(function(){
// 	console.log("pick!"+$(this).text());
// 	$(this).parents(".btn-group").find('.selection').text($(this).text());
// 	title=$(this).text();
//         var fileName=$(this).attr("data-file");
// 	console.log(fileName);
// 	makechart(fileName,title);
//     });

=======
$(document).ready(function () {
	AutoRefresh() ;
	makechart();
 });
>>>>>>> febb8277ca31ab6494db623e510e8786f4dfd0dc

function makechart() {
    var data;
    $.ajax({
	type: "GET",
	url: datafile,
	dataType: "text",
	success: function(response)
	{
		console.log(response+$.csv);
	    var data = $.csv.toArrays(response);
	    console.log(JSON.stringify(data));
	    
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
                    "Unknown1",
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
    data2 = [
        {
            "y": 50.00,
            "color": colors[2],
            "drilldown": {
                "name": "None Selected",
                "categories": [
                    "Unknown2",
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
    data3 = [
        {
            "y": 50.00,
            "color": colors[2],
            "drilldown": {
                "name": "None Selected",
                "categories": [
                    "Unknown3",
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
    browserData2 = [],
    versionsData2 = [],
    browserData3 = [],
    versionsData3 = [],
    i,
    j,
    dataLen = data.length,
    dataLen2 = data2.length,
    dataLen3 = data3.length,

    drillDataLen,
    brightness;
    
    processData1(data);
    processData2(data2);
    processData3(data3);
	

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
function processData2(data) {
// Build the data arrays
for (i = 0; i < dataLen2; i += 1) {

    // add browser data
    browserData2.push({
        name: categories[i],
        y: data2[i].y,
        color: data2[i].color
    });

    // add version data
    drillDataLen = data2[i].drilldown.data2.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData2.push({
            name: data2[i].drilldown.categories[j],
            y: data2[i].drilldown.data2[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
        });
    }
}
}

function processData3(data) {
// Build the data arrays
for (i = 0; i < dataLen3; i += 1) {

    // add browser data
    browserData3.push({
        name: categories[i],
        y: data3[i].y,
        color: data3[i].color
    });

    // add version data
    drillDataLen = data3[i].drilldown.data3.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData3.push({
            name: data3[i].drilldown.categories[j],
            y: data3[i].drilldown.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
        });
    }
}
}



// Create the chart for donut visualizations
Highcharts.chart('container1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gun Deaths: Intent and Gender'
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

// Create the chart for donut visualizations
Highcharts.chart('container2', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gun Deaths: Intent and Gender'
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
        data: browserData2,
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
        data: versionsData2,
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


// Create the chart for donut visualizations
Highcharts.chart('container3', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gun Deaths: Intent and Gender'
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
        data: browserData3,
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
        data: versionsData3,
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
<<<<<<< HEAD
	$('#people').append('<img  src="http://www.clker.com/cliparts/i/9/w/S/E/Q/red-male-toilet-symbol-md.png">');
=======
	$('#people').append('<img rec="'+x+'" src="https://www.clker.com/cliparts/i/9/w/S/E/Q/red-male-toilet-symbol-md.png" hspace="20" Vspace="10" height="50" width=30">');
>>>>>>> febb8277ca31ab6494db623e510e8786f4dfd0dc
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

<<<<<<< HEAD
    intVar = setInterval(function(){ displaydeaths()}, 2000);
}

/*
Papa.parse("https://raw.githubusercontent.com/fivethirtyeight/guns-data/master/full_data.csv", {
	download: true,
	step: function(row) {
		console.log("Row: ", row.data);
	},
	complete: function() {
		console.log("All done!");
	}
});*/

var csv="fulldata.csv";
if(csv){
	console.log("Working");
	console.log(csv);
}
var victimsArray = [];
let currentWinner;

function getAsText(file) {
	let reader = new FileReader();
	
	reader.readAsText(file);
	
	console.log("here");
	reader.onload = loadHandler;
	reader.onerror = errorhandler;
}

function loadHandler(event) {
	let csv = event.target.result;
	processData(csv);
}

function errorHandler(event) {
	if(event.target.error.name == "NotReadableError") {
		alert('Cannot read file!');
	}
}

function processData(csv) {
	let allTextLines = csv.split(/\r\n |\n/);
	console.log("Reading file");
	
	for (let i = 0; i < allTextLines.length; i++) {
		let row = allTextLines[i].split(',');
		
		let col = [];
		
		for (let j = 0; j < row.length; j++) {
			col.push(row[j]);
		}
	
		victimsArray.push(col);
	}
	console.log(victimsArray[0]);
}

function displayWinner() {
	$('#victims').append(currentWinner);
}

function randomizeWinner() {
	//stuff about file upload not working
	let min = 0;
	let max = victimsArray.length;
	let winnerIndex = Math.floor(Math.random() * (max - min + 1)) + min;
	
	currentWinner = victimsArray[winnerIndex];
	console.log("length: ");
	console.log(victimsArray.length);
	displayWinner();
=======
    intVar = setInterval(function(){ displaydeaths()}, 5000);
>>>>>>> febb8277ca31ab6494db623e510e8786f4dfd0dc
}


$(document).ready(function () {
	AutoRefresh() ; 
	$.ajax({
		url: "fulldata.csv",
		dataType:"text",
		success: function(data){
			processData(data);
			randomizeWinner();
		}
	})

});
















