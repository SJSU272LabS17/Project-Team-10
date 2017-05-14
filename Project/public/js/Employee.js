/**
 * Created by avni on 5/11/17.
 */
var chartData;

$(function(){
    $.ajax({

        url: 'http://localhost:3300/employee',
        type: 'GET',
        success : function(data) {
            chartData = data;
            var template = Handlebars.compile($("#tabular-template").html());
            $("#table-location").html(template(data));


            // var chartProperties = {
            //     "caption": "Monthly revenue for last year",
            //     "subCaption": "Employee Engagement",
            //     "xAxisName": "Month",
            //     "yAxisName": "Revenues (In USD)",
            //     //"numberPrefix": "$",
            //     //"paletteColors": "#414cc2",
            //     "bgColor": "#ffffff",
            //     "borderAlpha": "20",
            //     "canvasBorderAlpha": "0",
            //     "usePlotGradientColor": "0",
            //     "plotBorderAlpha": "10",
            //     "placevaluesInside": "1",
            //     "rotatevalues": "1",
            //     "valueFontColor": "#000000",
            //     "showXAxisLine": "1",
            //     "xAxisLineColor": "#993132",
            //     "divlineColor": "#ffffff",
            //     "divLineIsDashed": "1",
            //     "showAlternateHGridColor": "0",
            //     "subcaptionFontBold": "0",
            //     "subcaptionFontSize": "14",
            //     "pYAxisName": "Cost of Inventory (US $ in thousands)",
            //     "sYAxisName": "Units in Inventory"
            // };
            var  column2dproperties= {
                "caption": "Monthly revenue for last year",
                "subCaption": "Harry's SuperMart",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14"
            };
            var doughnutProperties={
                "caption": "Split of revenue by product categories",
                "subCaption": "Last year",
                "numberPrefix": "$",
                "startingAngle": "20",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "enableSmartLabels": "0",
                "enableMultiSlicing": "0",
                "decimals": "1",
                //Theme
                "theme": "fint"
            };

            var pieProperties ={
                paletteColors: "#88c057, #008487, #005072, #feb000, #5b8ab0",
                plotHoverEffect: "1",
                showBorder: "0",
                showPercentValues: "1",
                showPlotBorder: "0",
                showShadow: "0",
                toolTipBgColor: "#333333",
                toolTipBorderRadius: "2",
                toolTipColor: "#EEEEEE",
                toolTipFontSize: "11",
                use3DLighting: "0"
            };

            var categoriesArray = [{
                "category" : data["categories"]
            }];

            var column_Chart = new FusionCharts({
                type: 'column2D',
                renderAt: 'chart-location',
                width: '300',
                height: '400',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    dataset: data
                }
            });

            var barChart = new FusionCharts({
                type: 'mscombidy2d',
                renderAt: 'chart2-location',
                width: '700',
                height: '700',
                dataFormat: 'json',
                dataSource: {

                    chart: chartProperties,
                    categories : categoriesArray,
                    dataset : data['dataset']
                }
            });
            var pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'pie_chart-location',
                width: '700',
                height: '700',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    dataset : data["dataset"]

                }
            });
            var donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'doughnut-location',
                width: '700',
                height: '700',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    "data": [
                        {
                            "label": "Food",
                            "value": "285040"
                        },
                        {
                            "label": "Apparels",
                            "value": "146330"
                        },
                        {
                            "label": "Electronics",
                            "value": "105070"
                        },
                        {
                            "label": "Household",
                            "value": "49100",
                            "isSliced": "1"
                        }
                    ]
                }
            }).render();



            column_Chart.render();
            barChart.render();
            pieChart.render();
            //donughtChart.render();

        }
    });
});
