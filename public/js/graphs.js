Highcharts.chart('Trend_of_change', {
    chart: {
        height: 252,
        type: 'area',
        spacing: [10, 10, 45, 0],
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: {
            text: 'אחוז שינוי יומי',
            style: {
                visibility: "visible"
            }
        },
        gridLineWidth: 0
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "rgb(134,219,253)"],
                    [1, Highcharts.color("rgb(134,219,253)").setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 3,
                lineWidth: 2,
                fillColor: '#FFFFFF',
                lineColor: "rgb(80,203,253)"
            },
            lineWidth: 2,
            lineColor: "rgb(80,203,253)",
            states: {
                hover: {
                    enabled:false
                }
            },
            //threshold: null,
            dataLabels: {
                enabled: true,
                style:{
                    fontSize:"0.8rem"
                } ,
                format: "{y}%<br/><span style='font-weight: 400;'>(1)</span>"
            },
            enableMouseTracking: false
        }
    },
    tooltip:{
        enabled: false,
    },

    series: [{
        type: 'area',
        name: 'USD to EUR',
        data: [[Date.UTC(2012, 0, 22),1],[Date.UTC(2012, 0, 23),2],[Date.UTC(2012, 0, 24),3]]
    }]
});





Highcharts.chart('criticalPatients', {
    chart: {
        height: 276,
        type: 'area',
        spacing: [10, 80, 35, 10]
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        lineWidth: 0,
        tickWidth: 0,
        showFirstLabel: true,

    },
    yAxis: {
        title: {
            text: 'Exchange rate'
        },
        gridLineWidth: 0,
        endOnTick: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "rgb(99,166,166)"],
                    [1, Highcharts.color("rgb(99,166,166)").setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2.5,
                lineWidth: 2,
                fillColor: '#FFFFFF',
                lineColor: "rgb(43,133,134)"
            },
            lineWidth: 1,
            lineColor: "rgb(43,133,134)",
            states: {
                hover: {
                    enabled:false
                }
            },
            //threshold: null,
            dataLabels: {
                enabled: true,
                style:{
                    fontSize:"0.8rem",
                    fontWeight: "400",
                    color: "gray"
                },
                overflow: "allow",
                crop:false
                //format: "<span>  </span>{y}<br/><span style='font-weight: 400;'>(1)</span>"
            },
            enableMouseTracking: false
        }
    },
    tooltip:{
        enabled: false,
    },

    series: [{
        type: 'area',
        name: 'criticalPatient',
        data: [[Date.UTC(2012, 0, 22),450],[Date.UTC(2012, 0, 23),550],[Date.UTC(2012, 0, 24),650]]
    }]
});






Highcharts.chart('newSurpriseIll', {
    chart: {
        height: 252,
        type: 'column',
        spacing: [15, -10, 40, 10],
        borderRadius: 10
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        threshold: 0,
        endOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        showFirstLabel: true,
        tickInterval:60*60*24* 1000
    },
    yAxis: {
      	endOnTick: false,
        startOnTick: true,
        gridLineWidth: 0,
        labels: {
            step: 1
        },
        tickInterval:500
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
        	//borderRadius: 5,
          pointWidth: 8,
          dataLabels: {
            enabled: true,
            style:{
                fontSize:"0.8rem",
                fontWeight:"400"
            } ,
            format: "{y}",
            overflow: false,
            crop:false
            },
        }
    },
    tooltip:{
        enabled:false
    },
    legend: false,
    series: [{
        data: [[Date.UTC(2012, 0, 22),2000], [Date.UTC(2012, 0, 23), 4000],
        [Date.UTC(2012, 0, 24), 3000],[Date.UTC(2012, 0, 25),2000],[Date.UTC(2012, 0, 26),2000],[Date.UTC(2012, 0, 27),2000],[Date.UTC(2012, 0, 28),2000]],
        borderRadiusTopLeft: '5px',
        borderRadiusTopRight: '5px',
        color: 'rgb(182,202,81)'
    }]
});






Highcharts.chart('infectedPerDate', {
    chart: {
        height: 252,
        type: 'area',
        spacing: [10, 10, 45, 0],
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: {
            text: 'אחוז שינוי יומי',
            style: {
                visibility: "visible"
            }
        },
        gridLineWidth: 0
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "rgb(134,219,253)"],
                    [1, Highcharts.color("rgb(134,219,253)").setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 3,
                lineWidth: 2,
                fillColor: '#FFFFFF',
                lineColor: "rgb(80,203,253)"
            },
            lineWidth: 2,
            lineColor: "rgb(80,203,253)",
            states: {
                hover: {
                    enabled:false
                }
            },
            //threshold: null,
            // dataLabels: {
            //     enabled: true,
            //     style:{
            //         fontSize:"0.8rem"
            //     } ,
            //     format: "{y}%<br/><span style='font-weight: 400;'>(1)</span>"
            // },
            //enableMouseTracking: false
        },
        column:{
            PointWidth: 8,
            //groupPadding: 0.47,
            pointRange: 60*12*24* 1000,
            //pointPadding: 0.07,
            borderRadiusTopLeft: '5px',
            borderRadiusTopRight: '5px',
        }
    },
    tooltip:{
        enabled: false,
    },
    legend: {
        //enabled: false,
        align: 'right',
        verticalAlign: 'top',
        rtl: true,
        symbolPadding: 0,
        navigation:{
            enabled: false
        },
        reversed: true,
        title:{
            style:{
                fontWeight: 400
            }
        },
        itemStyle:{
            fontWeight: "400",
            fontSize: "0.9rem",
            //margin: "0.5rem",
            cursor: "text"
            //height: "90"
        },
        itemHoverStyle: {
            color: '#000000',
            cursor: 'text'
        },
        states: {
            hover: false
        },
        symbolHeight: "10",
        useHTML: false 
        //layout: 'vertical'
    },

    series: [{
        type: 'area',
        name: 'מאומתים מצטבר',
        data: [[Date.UTC(2012, 0, 22),1],[Date.UTC(2012, 0, 23),2],[Date.UTC(2012, 0, 24),3]],
        events:{legendItemClick:function(){
            return false;        
        }}
    },
    {
        type: 'column',
        name: 'מחלימים חדשים',
        data: [[Date.UTC(2012, 0, 22),1],[Date.UTC(2012, 0, 23),2],[Date.UTC(2012, 0, 24),3],[Date.UTC(2012, 0, 25),1],[Date.UTC(2012, 0, 26),1],[Date.UTC(2012, 0, 27),1],[Date.UTC(2012, 0, 28),1],[Date.UTC(2012, 0, 29),1]],
        pointPlacement: "on",
        events:{legendItemClick:function(){
            return false;        
        }}
    },{
        type: 'column',
        name: 'מאומתים חדשים',
        data: [[Date.UTC(2012, 0, 22),1],[Date.UTC(2012, 0, 23),2],[Date.UTC(2012, 0, 24),3]],
        //pointPlacement: "on"
        events:{legendItemClick:function(){
            return false;        
        }}
    }]
}, function(chart){

    $.each(chart.series, function(i, series){
    
        series.legendGroup.element.onmouseover = null;
        series.legendGroup.element.onmouseclick = null;
        series.legendGroup.element.enabled = false
    });
});
