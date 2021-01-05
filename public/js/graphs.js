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
            maxPointWidth: 8,
            pointPadding: 0.4,
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


Highcharts.chart('hardInfectedPerDate', {
    chart: {
        height: 252,
        type: 'line',
        spacing: [10, 10, 45, 0],
        animation: {
            duration: 50
        },
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
        endOnTick: true,
        startOnTick: true,
        labels: {
            step: 1
        },
        gridLineColor: 'rgb(200,200,200)',
    },
    plotOptions: {
        line: {
            marker: {
                symbol: "circle"
            },
            states: {
                hover: {
                    enabled:true,
                    halo: false,
                    lineWidthPlus: 0
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
        }
    },
    tooltip:{
        enabled: true,
        shared: true
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
        symbolWidth: 0,
        symbolHeight: 0,
        useHTML: true,
        labelFormatter: function() {
            console.log(this.resetA11yMarkerOptions.lineColor)
            return '<div style="direction: rtl;"><div style="margin-left:2px;width:8px;height:8px;transform: scaleY(1.1) scaleX(1.05); margin-bottom: 1px;display:inline-block;padding:3px 2px 3px 2px;text-align:center;color:#FFF;background-color:' + this.resetA11yMarkerOptions.lineColor + ';border-radius: 20px; "></div><span>' + this.name + '&nbsp</span></div>';
        }
        //layout: 'vertical'
    },

    series: [{
        type: 'line',
        name: 'מונשמים',
        data: [[Date.UTC(2012, 0, 22),1],[Date.UTC(2012, 0, 23),2],[Date.UTC(2012, 0, 24),3]],
        events:{legendItemClick:function(){
            return false;        
        }},
        marker: {
            radius: 3,
            lineWidth: 2,
            fillColor: 'rgb(80,203,253)',
            lineColor: "rgb(80,203,253)",
        },
        lineWidth: 1,
        lineColor: "rgb(80,203,253)",
    },
    {
        type: 'line',
        name: 'חולים קשים',
        data: [[Date.UTC(2012, 0, 22),3],[Date.UTC(2012, 0, 23),4],[Date.UTC(2012, 0, 24),5],[Date.UTC(2012, 0, 25),3],[Date.UTC(2012, 0, 26),3],[Date.UTC(2012, 0, 27),3],[Date.UTC(2012, 0, 28),3],[Date.UTC(2012, 0, 29),3]],
        pointPlacement: "on",
        events:{legendItemClick:function(){
            return false;        
        }},
        marker: {
            radius: 3,
            lineWidth: 2,
            fillColor: 'rgb(182,202,81)',
            lineColor: "rgb(182,202,81)",
        },
        lineWidth: 1,
        lineColor: "rgb(182,202,81)"
    }]
}, function(chart){

    $.each(chart.series, function(i, series){
    
        series.legendGroup.element.onmouseover = null;
        series.legendGroup.element.onmouseclick = null;
        series.legendGroup.element.enabled = false
    });
});


Highcharts.chart('dailyTests', {
    chart: {
        height: 252,
        type: 'column',
        spacing: [15, 20, 3, 10],
        borderRadius: 10
    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        title:{
            text:'תאריך הבדיקה'
        },
        threshold: 0,
        endOnTick: false,
        lineWidth: 0,
        tickWidth: 0,
        showFirstLabel: true,
        tickInterval:60*60*24* 1000
    },
    yAxis: {
        title:{
            text:"מספר בדיקות",
            style: {
                visibility: "visible"
            }
        },
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
            pointWidth: 12,
            grouping: false,
            shared: true,
            states:{
                hover: {
                    boxShadow: "0 10px 10px 0 rgba(0,0,0,1)"
                },
                inactive:{
                    enabled: false
                }
            },
            useHTML: true
        	//borderRadius: 5,
        //   pointWidth: 8,
        //   dataLabels: {
        //     enabled: true,
        //     style:{
        //         fontSize:"0.8rem",
        //         fontWeight:"400"
        //     } ,
        //     format: "{y}",
        //     overflow: false,
        //     crop:false
        //     },
        }
    },
    tooltip:{
        enabled:false
    },
    legend: false,
    series: [{
        //grouping: false,
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
        data: [[Date.UTC(2012, 0, 22),2000], [Date.UTC(2012, 0, 23), 4000],
        [Date.UTC(2012, 0, 24), 3000],[Date.UTC(2012, 0, 25),2000],[Date.UTC(2012, 0, 26),2000],[Date.UTC(2012, 0, 27),2000]],
        borderRadiusTopLeft: '20px',
        borderRadiusTopRight: '20px',
        color: 'rgb(80,203,253)',
        useHTML: true
    },{
        data: [],
        color: "rgb(28 125 126)"
    }]
}, function(chart){

    $.each(chart.series, function(i, series){
        if(i===0){
            percentSeries = chart.series[1];
            series.data.forEach(function(item, index){
                console.log(item)
                let y = Number(item.plotY)
                + Number(series.getPlotBox().translateY);
                let height = Number(chart.plotTop + chart.plotHeight) - y 
                y += height
                y -= height * 0.1
                percentSeries.addPoint([item.x, chart.yAxis[0].toValue(y)],true)
                //+ (Number(chart.plotTop + chart.plotHeight-(Number(item.plotY)
                //+ Number(series.getPlotBox().translateY)))) * 1;
                let x = Number(item.plotX)
                //Number(item.dataLabel.x) + Number(item.dataLabel.bBox.x)
                + Number(series.getPlotBox().translateX);
                if (chart.series[i].rossLabelY) {
                    // update label
                    chart.series[i].crossLabelY.attr({
                    y: y,
                    x:x,
                    text: chart.yAxis[0].toValue(y).toFixed(2)
                    });
                } else {
                    // draw label
                    //console.log(series);
                    chart.series[i].crossLabelY = series.chart.renderer.text(chart
                    .yAxis[0].toValue(y).toFixed(0), x, y, true)
                    .add()
                    .addClass("percentOfInfected")
                }
            })
        }
        /*for(let j = 0; j<series.data.length;j++){
            let item = series.data[j];
            console.log(item)
            if(j%2===0){
                let y = Number(item.plotY)
                + Number(series.getPlotBox().translateY);
                let height = Number(chart.plotTop + chart.plotHeight) - y 
                y += height
                y -= height * 0.1
                series.addPoint([item.x, y],true)
                //+ (Number(chart.plotTop + chart.plotHeight-(Number(item.plotY)
                //+ Number(series.getPlotBox().translateY)))) * 1;
                let x = Number(item.dataLabel.x) + Number(item.dataLabel.bBox.x)
                + Number(series.getPlotBox().translateX);
                if (chart.series[i].rossLabelY) {
                  // update label
                  chart.series[i].crossLabelY.attr({
                    y: y,
                    x:x,
                    text: chart.yAxis[0].toValue(y).toFixed(2)
                  });
                } else {
                  // draw label
                  //console.log(series);
                  chart.series[i].crossLabelY = series.chart.renderer.text(chart
                  .yAxis[0].toValue(y).toFixed(0), x, y, true)
                  .add()
                  .addClass("percentOfInfected")
                }
            }
            else{
                item.color = "rgb(0,0,0)";
                item.dataLabel=null;
                item.dataLabels=[];
            }
        }*/
        series.render();
    })
});