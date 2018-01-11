let upColor = '#004481',
    downColor = '#DA3851',
    sumColor = '#072146'

let app = new Vue({
            el: '#app',
            data: {
                show_spain: false,
                show_mexico: false,
                show_usa: false,
                show_colombia: false,
                show_venezuela: false,
                show_peru: false,
                show_chile: false,
                show_turkey: false,
                show_argentina: false,
                show_southamerica: false,

                data_for_spain: [],

                show_charts: true,
                show_graphs: false,
                show_all_graphs: true,

                active_countries: ['spain', 'mexico', 'usa', 'colombia', 'venezuela', 'chile', 'argentina', 'southamerica', 'peru', 'turkey'],

                financialPerformanceGraph: null
            },
    methods: {
        showGraph() {
            
            if(this.show_graphs){
                this.show_graphs = !this.show_graphs
                this.show_charts = true
            } else if(this.show_charts){
                this.show_charts = !this.show_charts
                this.show_graphs = true
            }

            if(this.show_graphs){
                setTimeout(() => {
                    
                    this.financialPerformanceGraph = Highcharts.chart('financialPerformanceGraph', {
                        chart: {
                            type: 'column',
                        },
                        title: {
                            text: 'P&L'
                        },
                        credits: {
                            enabled: false
                        },
                        rangeSelector:{
                          enabled: true  
                        },
                        xAxis: {
                            categories: [
                            'Interest Margin',
                            'Commissions',
                            'Financial Operations',
                            'Other Operations',
                            'Gross Margin',
                            'Operating Expenses',
                            'Net Margin',
                            'Non Performing Loan Provisions',
                            'Pre Tax Profit',
                            'Taxes',
                            'After-Tax Profit'
                            ],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Mn Euro'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} Mn Euro</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0,
                                events: {
                                    legendItemClick: function(){
                                        return false;
                                    }
                                },
                                colors: [
                                    'Yellow',
                                    'orange'
                                ],
                            }
                        },
                        series: [{
                            name: 'Spain',
                            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6]
                    }, {
                            name: 'Mexico',
                            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6]
                    }, {
                            name: 'USA',
                            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3]
                    }, {
                            name: 'Colombia',
                            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8]
                    }, {
                            name: 'Venezuela',
                            data: [53.6, 39.8, 78.5, 53.4, 96.0, 98.5, 115.0, 114.3, 81.2, 93.5, 109.6]
                    }, {
                            name: 'Peru',
                            data: [28.9, 48.8, 49.3, 51.4, 37.0, 68.3, 79.0, 49.6, 72.4, 55.2, 89.3]
                    }, {
                            name: 'Chile',
                            data: [59.9, 31.5, 101.4, 119.2, 134.0, 196.0, 125.6, 168.5, 196.4, 134.1, 25.6]
                    }, {
                            name: 'Argentina',
                            data: [49.9, 41.5, 99.4, 109.2, 114.0, 186.0, 135.6, 148.5, 186.4, 144.1, 35.6]
                    },          
                       {
                            name: 'SouthAmerica',
                            data: [68.9, 68.8, 49.3, 45.4, 41.0, 41.3, 51.0, 51.6, 59.4, 61.2, 51.3]
                    }, {
                            name: 'Turkey',
                            data: [38.9, 48.8, 59.3, 61.4, 77.0, 88.3, 49.0, 53.6, 59.4, 61.2, 49.3]
                    }]
                    });

                    this.updateChart()
                }, 300)
            }
        },
        updateSouthAmerica(){
            
                    setTimeout(() => {
                        Highcharts.chart('customerLoans', {
                    chart: {
                        type: 'waterfall'
                    },
                    credits: {
                        enabled: false
                    },

                    title: {
                        text: 'Customer Loans (Bn € Constant)'
                    },

                    xAxis: {
                        type: 'category'
                    },

                    yAxis: {
                        title: {
                            text: 'USD'
                        }
                    },

                    legend: {
                        enabled: false
                    },

                    tooltip: {
                        pointFormat: '<b>${point.y:,.2f}</b> USD'
                    },

                    series: [{
                        type: 'spline',
                        zIndex: 10,
                        data: [12, 6, 2, 22, 1, 12, 3]
                    }, {
                        type: 'waterfall',

                        upColor: upColor,
                        color: downColor,
                        data: [{
                            name: 'Argentina',
                            y: 5
                        }, {
                            name: 'Chile',
                            y: 14
                        }, {
                            name: 'Colombia',
                            y: 11
                        }, {
                            name: 'Peru',
                            y: 13
                        }, {
                            name: 'Venezuela',
                            y: 0
                        }, {
                            name: 'Uruguay',
                            y: 2
                        }, {
                            name: 'Paraguay',
                            y: 1
                        }, {
                            name: 'June 2017',
                            isSum: true,
                            color: sumColor
                        }],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                            },
                            style: {
                                fontWeight: 'bold'
                            }
                        },
                        pointPadding: 0
                    }]
});
                        Highcharts.chart('customerDeposits', {
                    chart: {
                        type: 'waterfall'
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: 'Customer Deposits (Bn € Constant)'
                    },

                    xAxis: {
                        type: 'category'
                    },

                    yAxis: {
                        title: {
                            text: 'USD'
                        }
                    },

                    legend: {
                        enabled: false
                    },

                    tooltip: {
                        pointFormat: '<b>${point.y:,.2f}</b> USD'
                    },

                    series: [{
                        type: 'spline',
                        zIndex: 10,
                        data: [200000, 300000, 400000, 100000, 200000, 300000, 400000]
                    }, {
                        type: 'waterfall',
                        upColor: upColor,
                        color: downColor,
                        data: [{
                            name: 'Argentina',
                            y: 120000
                        }, {
                            name: 'Chile',
                            y: 569000
                        }, {
                            name: 'Colombia',
                            y: 231000
                        }, {
                            name: 'Peru',
                            y: 500000,
                        }, {
                            name: 'Venezuela',
                            y: -342000
                        }, {
                            name: 'Uruguay',
                            y: -233000
                        }, {
                            name: 'June 2017',
                            isSum: true,
                            color: sumColor
                        }],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                            },
                            style: {
                                fontWeight: 'bold'
                            }
                        },
                        pointPadding: 0
                    }]
});
                        Highcharts.chart('grossIncome', {
                    chart: {
                        type: 'waterfall'
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: 'Gross Income (Mn € Constant)'
                    },

                    xAxis: {
                        type: 'category'
                    },

                    yAxis: {
                        title: {
                            text: 'USD'
                        }
                    },

                    legend: {
                        enabled: false
                    },

                    tooltip: {
                        pointFormat: '<b>${point.y:,.2f}</b> USD'
                    },

                    series: [{
                        type: 'spline',
                        zIndex: 10,
                        data: [200000, 300000, 400000, 100000, 200000, 300000, 400000]
                    }, {
                        type: 'waterfall',
                        upColor: upColor,
                        color: downColor,
                        data: [{
                            name: 'Argentina',
                            y: 120000
                        }, {
                            name: 'Chile',
                            y: 569000
                        }, {
                            name: 'Colombia',
                            y: 231000
                        }, {
                            name: 'Peru',
                            y: 500000,
                        }, {
                            name: 'Venezuela',
                            y: -342000
                        }, {
                            name: 'Uruguay',
                            y: -233000
                        }, {
                            name: 'June 2017',
                            isSum: true,
                            color: sumColor
                        }],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                            },
                            style: {
                                fontWeight: 'bold'
                            }
                        },
                        pointPadding: 0
                    }]
});
                        Highcharts.chart('profitAfterTax', {
                    chart: {
                        type: 'waterfall'
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: 'Profit After Tax (Mn € Constant)'
                    },

                    xAxis: {
                        type: 'category'
                    },

                    yAxis: {
                        title: {
                            text: 'USD'
                        }
                    },

                    legend: {
                        enabled: false
                    },

                    tooltip: {
                        pointFormat: '<b>${point.y:,.2f}</b> USD'
                    },

                    series: [{
                        type: 'spline',
                        zIndex: 10,
                        data: [200000, 300000, 400000, 100000, 200000, 300000, 400000]
                    }, {
                        type: 'waterfall',
                        upColor: upColor,
                        color: downColor,
                        data: [{
                            name: 'Argentina',
                            y: 120000,
                        }, {
                            name: 'Chile',
                            y: 569000
                        }, {
                            name: 'Colombia',
                            y: 231000
                        }, {
                            name: 'Peru',
                            y: 500000
                        }, {
                            name: 'Venezuela',
                            y: -342000
                        }, {
                            name: 'Uruguay',
                            y: -233000
                        }, {
                            name: 'June 2017',
                            isSum: true,
                            color: sumColor
                        }],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                            },
                            style: {
                                fontWeight: 'bold'
                            }
                        },
                        pointPadding: 0
                    }]
}); 
                    this.updateChart()
                }, 500)
            },
        updateCountry(country){
            if(this['show_' + country] ){
                
              setTimeout(() => {
                  Highcharts.chart(country + 'DigitalSalesMonthly', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: 'Monthly Sales ($USD)'
                        },
                        subtitle:{
                            text:'Units/Products<br>Click on a month to view the drilldown',
                            style:{
                                fontWeight: 'bold'
                            }
                        },
                        credits:{
                          enabled: false  
                        },
                        xAxis: {
                            type: 'category'
                        },
                        yAxis:{
                          text:'Dollars'  
                        },
                        legend: {
                            enabled: true
                        },

                        plotOptions: {
                            series: {
                                borderWidth: 0,
                                dataLabels: {
                                    enabled: true,
                                }
                            }
                        },

                        series: [{
                            name: 'Month',
                            colorByPoint: true,
                            data: [{
                                name: "Jan '17",
                                y: 16800,
                                color:'#5BBEFF',
                                drilldown: "Jan '17"
                            }, {
                                name: 'Feb',
                                y: 17445,
                                color:'#49A5E6',
                                drilldown: 'Feb'
                            }, {
                                name: 'Mar',
                                y: 21704,
                                color:'#1973B8 ',
                                drilldown: 'Mar'
                            }, {
                                name: 'Apr',
                                y: 20838,
                                color:'#1464A5',
                                drilldown: 'Apr'
                            }, {
                                name: 'May',
                                y: 21561,
                                color:'#043263 ',
                                drilldown: 'May'
                            }, {
                                name: 'Jun',
                                y: 21933,
                                color:'#072146',
                                drilldown: 'Jun'
                            }, {
                                name: 'Jul',
                                y: 22948,
                                color:'#004481',
                                drilldown: 'Jul'
                            }, {
                                name: 'Aug',
                                y: 27210,
                                color:'#1973B8 ',
                                drilldown: 'Aug'
                            }, {
                                name: 'Sep',
                                color:'#043263',
                                y: 20102,
                                drilldown: 'Sep'
                            }]
                        }],
                        drilldown: {
                            _animation: {
                                duration: 2000
                            },
                            series: [{
                                id: "Jan '17",
                                name: "Jan '17",
                                data: [
                                    ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: "Feb",
                                name: "Feb",
                                data: [
                                    ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: 'Mar',
                                name: 'Mar',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: 'Apr',
                                name: 'Apr',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            },{
                               id:"May",
                               name:"May",
                               data: [
                                   ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                               ]
                            }, {
                                id: 'Jun',
                                name: 'Jun',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: 'Jul',
                                name: 'Jul',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: 'Aug',
                                name: 'Aug',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }, {
                                id: 'Sep',
                                name: 'Sep',
                                data: [
                                     ['Checking', 4444],
                                    ['Debit Card', 4372],
                                    ['ClearSpend', 6256],
                                    ['Savings', 1501],
                                    ['Credit Card', 0],
                                    ['Consumer Loans', 66],
                                    ['Money Market', 101],
                                    ['Time Deposits', 14],
                                    ['Home Equity', 26],
                                    ['Investmetns', 0],
                                    ['Mortage Loans', 20],
                                    ['SME Loans', 0]
                                ]
                            }]
                        }
                    });
                  Highcharts.chart(country + 'DigitalPrvMonthly', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly PRV ($USD)'
        },
        subtitle:{
            style:{
              fontWeight: 'bold'  
            },
            text:'By Product (Thousands)<br>Click on a month to view the drilldown'
        },
        credits:{
          enabled: false  
        },
        xAxis: {
            type: 'category'
        },
        yAxis:{
          text:'Dollars'  
        },
        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: [{
            name: 'Month',
            colorByPoint: true,
            data: [{
                name: "Jan '17",
                y: 3998,
                drilldown: "Jan '17",
                color: '#004481'
            }, {
                name: 'Feb',
                y: 4106,
                drilldown: 'Feb',
                color: '#072146'
            }, {
                name: 'Mar',
                y: 5088,
                drilldown: 'Mar',
                color:'#043263'
            }, {
                name: 'Apr',
                y: 4856,
                drilldown: 'Apr',
                color:'#1464A5 '
            }, {
                name: 'May',
                y: 5345,
                drilldown: 'May',
                color:"#1973B8 "
            }, {
                name: 'Jun',
                y: 5930,
                drilldown: 'Jun',
                color:'#49A5E6'
            }, {
                name: 'Jul',
                y: 6662,
                drilldown: 'Jul',
                color:'#5BBEFF'
            }, {
                name: 'Aug',
                y: 7836,
                drilldown: 'Aug',
                color:'#D4EDFC'
            }, {
                name: 'Sep',
                y: 5777,
                drilldown: 'Sep',
                color:'#1464A5'
            }]
        }],
        drilldown: {
            _animation: {
                duration: 2000
            },
            series: [{
                id: "Jan '17",
                name: "Jan '17",
                data: [
                    ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: "Feb",
                name: "Feb",
                data: [
                    ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: 'Mar',
                name: 'Mar',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: 'Apr',
                name: 'Apr',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            },{
               id:"May",
               name:"May",
               data: [
                   ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
               ]
            }, {
                id: 'Jun',
                name: 'Jun',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: 'Jul',
                name: 'Jul',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: 'Aug',
                name: 'Aug',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }, {
                id: 'Sep',
                name: 'Sep',
                data: [
                     ['Checking', 4444],
                    ['Debit Card', 4372],
                    ['ClearSpend', 6256],
                    ['Savings', 1501],
                    ['Credit Card', 0],
                    ['Consumer Loans', 66],
                    ['Money Market', 101],
                    ['Time Deposits', 14],
                    ['Home Equity', 26],
                    ['Investmetns', 0],
                    ['Mortage Loans', 20],
                    ['SME Loans', 0]
                ]
            }]
        }
    });

                    this.updateChart()
                }, 500)
            }
        }, 
       updateChart() {
            
            let highchart_data = []
            
            let can_show_country = false,
                country_array = [this.financialPerformanceGraph.series]

            for (let k = 0; k < this.active_countries.length; k++) {
                if (this['show_' + this.active_countries[k]]) {
                    highchart_data.push(this.active_countries[k])
                }
            }

            console.log(highchart_data)

            for (let i = 0; i < country_array.length; i++) {
                for (let j = 0; j < country_array[i].length; j++) {
                    can_show_country = false
                    for (let l = 0; l < highchart_data.length; l++) {
                        if (country_array[i][j].name.toLocaleLowerCase() == highchart_data[l]) {
                            can_show_country = true;
                        }
                        
                    }
                    
                    if (can_show_country) {
                        country_array[i][j].show()
                    } else if (highchart_data.length == 0) {
                        country_array[i][j].show()

                    } else {
                        country_array[i][j].hide()
                    }
                }
            }
        },
        checkGraphDisplay(country) {
            
            this['show_' + country] = !this['show_' + country]

            if (this.show_spain || this.show_mexico || this.show_usa || this.show_colombia || this.show_venezuela || this.show_peru || this.show_argentina ||this.show_chile || this.show_southamerica || this.show_turkey) {
                this.show_all_graphs = false
            } else {
                this.show_all_graphs = true
            }

            if (this.show_graphs) {
                this.updateChart()
            }
        },
        datePicker() {
        
            $('input[name="date_range"]').daterangepicker();
                
//                document.getElementById("date_range").daterangepicker();
        }
}
});



























