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
        show_argentina: false,
        show_turkey: false,
        show_southamerica: false,
        
        active_countries: ['spain', 'mexico', 'usa', 'colombia', 'venezuela', 'southamerica', 'peru', 'turkey','chile','argentina']
    },

    methods: {

        toggleButton(country) {
            this['show_' + country] = !this['show_' + country]

            let highchart_data = []

            for (let i = 0; i < this.active_countries.length; i++) {
                if (this['show_' + this.active_countries[i]]) {
                    highchart_data.push(this.active_countries[i])
                }
            }
            this.updateChart(highchart_data)
        },
        updateChart(highchart_data) {

            let can_show_country = false
            let country_array = [targetCustomers.series, 
                                 attritionRate.series, 
                                 digitalCustomers.series,
                                 mobileCustomers.series,
                                 netPromoterScore.series
                                ]

            for (let i = 0; i < country_array.length; i++) {

                for (let k = 0; k < country_array[i].length; k++) {
                    can_show_country = false

                    for (let j = 0; j < highchart_data.length; j++) {
                        if (country_array[i][k].name.toLowerCase() == highchart_data[j]) {
                            can_show_country = true;
                            break;
                        }
                    }
                    if (can_show_country) {
                        country_array[i][k].show()
                    } else if (highchart_data.length == 0) {
                        country_array[i][k].show()

                    } else {
                        country_array[i][k].hide()

                    }
                }
            }
        }
    }
});

let targetCustomers = Highcharts.chart('targetCustomers', {
    chart: {
        //        zoomType: 'x',
    },
    title: {
        text: 'Target Customers',
        style: {
            color: '#043263',
            fontWeight: 'bold'
        },
    },
    credits: {
        enabled: false
    },

    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Dec16',
            'Jan17',
            'Feb17',
            'Mar17',
            'Apr17',
            'May17',
            'Jun17',
            'Jul17',
            'Aug17',
            'Sep17',
            'Oct17',
            'Nov17',
            'Dec17'
        ]
    },

    yAxis: {
        title: {
            style: {
                fontWeight: 'bold'
            },
            text: 'MM'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        allowPointSelect: false,
    },

    series: [{
        name: 'Spain',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'USA',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Mexico',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Colombia',
        data: [5988, 6988, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Venezuela',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    },{
        name: 'Peru',
        data: [21916, 21064, 21742, 21851, 31490, 31282, 31121, 41434]
    },{
        name:'Chile',
        data: [42934, 55503, 51177, 61658, 91031, 109931, 117133, 114175]
    },{
        name:'Argentina',
        data: [5188, 6188, 7188, 11169, 11112, 21452, 31400, 31227]
    },{
        name: 'SouthAmerica',
        data:[13908, 5348, 8305, 13248, 8389, 13816, 13274, 13111]
    }, {
        name: 'Turkey',
        data: [11908, 5148, 8005, 19248, 8189, 12816, 11274, 11111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
let attritionRate = Highcharts.chart('attritionRate', {
    chart: {
        //        zoomType: 'x',
    },
    title: {
        text: 'Attrition Rate',
        style: {
            color: '#043263',
            fontWeight: 'bold'
        },
    },
    credits: {
        enabled: false
    },

    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Dec16',
            'Jan17',
            'Feb17',
            'Mar17',
            'Apr17',
            'May17',
            'Jun17',
            'Jul17',
            'Aug17',
            'Sep17',
            'Oct17',
            'Nov17',
            'Dec17'
        ]
    },

    yAxis: {
        title: {
            style: {
                fontWeight: 'bold'
            },
            text: 'MM'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        allowPointSelect: false,
    },

    series: [{
        name: 'Spain',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'USA',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Mexico',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Colombia',
        data: [5988, 6988, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Venezuela',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    },{
        name: 'Peru',
        data: [21916, 21064, 21742, 21851, 31490, 31282, 31121, 41434]
    },{
        name:'Chile',
        data: [42934, 55503, 51177, 61658, 91031, 109931, 117133, 114175]
    },{
        name:'Argentina',
        data: [5188, 6188, 7188, 11169, 11112, 21452, 31400, 31227]
    },{
        name: 'SouthAmerica',
        data:[13908, 5348, 8305, 13248, 8389, 13816, 13274, 13111]
    }, {
        name: 'Turkey',
        data: [11908, 5148, 8005, 19248, 8189, 12816, 11274, 11111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
let digitalCustomers = Highcharts.chart('digitalCustomers', {
    chart: {
        //        zoomType: 'x',
    },
    title: {
        text: 'Digital Customers',
        style: {
            color: '#043263',
            fontWeight: 'bold'
        },
    },
    credits: {
        enabled: false
    },

    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Dec16',
            'Jan17',
            'Feb17',
            'Mar17',
            'Apr17',
            'May17',
            'Jun17',
            'Jul17',
            'Aug17',
            'Sep17',
            'Oct17',
            'Nov17',
            'Dec17'
        ]
    },

    yAxis: {
        title: {
            style: {
                fontWeight: 'bold'
            },
            text: 'MM'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        allowPointSelect: false,
    },

    series: [{
        name: 'Spain',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'USA',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Mexico',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Colombia',
        data: [5988, 6988, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Venezuela',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    },{
        name: 'Peru',
        data: [21916, 21064, 21742, 21851, 31490, 31282, 31121, 41434]
    },{
        name:'Chile',
        data: [42934, 55503, 51177, 61658, 91031, 109931, 117133, 114175]
    },{
        name:'Argentina',
        data: [5188, 6188, 7188, 11169, 11112, 21452, 31400, 31227]
    },{
        name: 'SouthAmerica',
        data:[13908, 5348, 8305, 13248, 8389, 13816, 13274, 13111]
    }, {
        name: 'Turkey',
        data: [11908, 5148, 8005, 19248, 8189, 12816, 11274, 11111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
let mobileCustomers = Highcharts.chart('mobileCustomers', {
    chart: {
        //        zoomType: 'x',
    },
    title: {
        text: 'Mobile Customers',
        style: {
            color: '#043263',
            fontWeight: 'bold'
        },
    },
    credits: {
        enabled: false
    },

    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Dec16',
            'Jan17',
            'Feb17',
            'Mar17',
            'Apr17',
            'May17',
            'Jun17',
            'Jul17',
            'Aug17',
            'Sep17',
            'Oct17',
            'Nov17',
            'Dec17'
        ]
    },

    yAxis: {
        title: {
            style: {
                fontWeight: 'bold'
            },
            text: 'MM'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        allowPointSelect: false,
    },

    series: [{
        name: 'Spain',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'USA',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Mexico',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Colombia',
        data: [5988, 6988, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Venezuela',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    },{
        name: 'Peru',
        data: [21916, 21064, 21742, 21851, 31490, 31282, 31121, 41434]
    },{
        name:'Chile',
        data: [42934, 55503, 51177, 61658, 91031, 109931, 117133, 114175]
    },{
        name:'Argentina',
        data: [5188, 6188, 7188, 11169, 11112, 21452, 31400, 31227]
    },{
        name: 'SouthAmerica',
        data:[13908, 5348, 8305, 13248, 8389, 13816, 13274, 13111]
    }, {
        name: 'Turkey',
        data: [11908, 5148, 8005, 19248, 8189, 12816, 11274, 11111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
let netPromoterScore = Highcharts.chart('netPromoterScore', {
    chart: {
        //        zoomType: 'x',
    },
    title: {
        text: 'Net Promoter Score (NPS)',
        style: {
            color: '#043263',
            fontWeight: 'bold'
        },
    },
    credits: {
        enabled: false
    },

    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Dec16',
            'Jan17',
            'Feb17',
            'Mar17',
            'Apr17',
            'May17',
            'Jun17',
            'Jul17',
            'Aug17',
            'Sep17',
            'Oct17',
            'Nov17',
            'Dec17'
        ]
    },

    yAxis: {
        title: {
            style: {
                fontWeight: 'bold'
            },
            text: 'MM'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            events: {
                legendItemClick: function () {
                    return false;
                }
            }
        },
        allowPointSelect: false,
    },

    series: [{
        name: 'Spain',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'USA',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Mexico',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Colombia',
        data: [5988, 6988, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Venezuela',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    },{
        name: 'Peru',
        data: [21916, 21064, 21742, 21851, 31490, 31282, 31121, 41434]
    },{
        name:'Chile',
        data: [42934, 55503, 51177, 61658, 91031, 109931, 117133, 114175]
    },{
        name:'Argentina',
        data: [5188, 6188, 7188, 11169, 11112, 21452, 31400, 31227]
    },{
        name: 'SouthAmerica',
        data:[13908, 5348, 8305, 13248, 8389, 13816, 13274, 13111]
    }, {
        name: 'Turkey',
        data: [11908, 5148, 8005, 19248, 8189, 12816, 11274, 11111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});















