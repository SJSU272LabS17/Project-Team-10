var chartData;

$(function(){
    $.ajax({

        url: 'http://localhost:3300/employee',
        type: 'GET',
        success : function(data) {
            chartData = data;
            var template = Handlebars.compile($("#tabular-template").html());
            $("#table-location").html(template(data));


            var chartProperties = {
                "caption": "Monthly revenue for last year",
                "subCaption": "Employee Engagement",
                "xAxisName": "Month",
                "yAxisName": "Revenues (In USD)",
                //"numberPrefix": "$",
                //"paletteColors": "#414cc2",
                "bgColor": "#ffffff",
                "borderAlpha": "20",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#000000",
                "showXAxisLine": "1",
                "xAxisLineColor": "#993132",
                "divlineColor": "#ffffff",
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
             //   "pYAxisName": "Cost of Inventory (US $ in thousands)",
             //   "sYAxisName": "Units in Inventory"
            };
            var  column2dproperties= {
                //  "caption": "Employee Satisfaction",
                //  "subCaption": "Harry's SuperMart",
                "xAxisName": "Sentiment",
                "yAxisName": "Responses",
                //   "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "borderAlpha": "10",
                "canvasBorderAlpha": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "20",
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
                "theme": "fint",
                "caption": "Employee-Response Analysis",
                "captionOnTop": "0",
                "captionPadding": "25",
                "alignCaptionWithCanvas": "1",
                "subcaption": "",
                "subCaptionFontSize": "12",
                "borderAlpha": "20",
                "is2D": "1",
                "bgColor": "#ffffff",
                "showValues": "1",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "plotTooltext": "Percentage of Employees ",
                "showPercentValues": "1",
                "chartLeftMargin": "0",
                "isSliced": "0",
                "showPlotBorder": "1",
                "plotBorderThickness": "1",
                "plotBorderAlpha": "50",
                "plotBorderColor": "#333333"
            };

            var pyramidProperties={
                "caption": "Harry's SuperMart - Electronics Products",
                "subcaption": "Revenue breakup by major categories for the last year",
                "paletteColors": "#e44a00,#f8bd19,#6baa01,#008ee4",
                "bgAlpha": "0",
                "decimals": "2",
                "borderAlpha": "20",
                "labelDistance": "15",
                "is2D": "1",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "plotTooltext": "$label constitute $percentvalue of total revenue."
            };
            var pieProperties ={
                // caption: "Pie-Chart Distribution",
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

            var bar2d_properties={
                "caption": "Employee Engagement",
                "subCaption": "400 k plus Federal Employees",
                "yAxisName": "Number of Employees",
                //  "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placeValuesInside": "1",
                "valueFontColor": "#ffffff",
                "showAxisLines": "1",
                "axisLineAlpha": "25",
                "divLineAlpha": "10",
                "alignCaptionWithCanvas": "0",
                "showAlternateVGridColor": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5"
            };

            var categoriesArray = [{
                "category" : data["categories"]
            }];

            var emp_sat_columnChart = new FusionCharts({
                //   caption: "Supervisor",
                type: 'column2d',
                renderAt: 'emp_sat_chart-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    data: data["employee_satisfaction"]["dataset"]
                }
            }).render();
            var supervisor_columnChart = new FusionCharts({
                //   caption: "Supervisor",
                type: 'column2d',
                renderAt: 'sup_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    data: data["immediate_supervisor"]["dataset"]
                }
            }).render();
            var work_life_columnChart = new FusionCharts({
                //   caption: "Supervisor",
                type: 'column2d',
                renderAt: 'wl_chart-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    data: data["work_life"]["dataset"]
                }
            }).render();
            var career_columnChart = new FusionCharts({
                //   caption: "Supervisor",
                type: 'column2d',
                renderAt: 'career_chart-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    data: data["career_growth"]["dataset"]
                }
            }).render();
            var viability_columnChart = new FusionCharts({
                //   caption: "Supervisor",
                type: 'column2d',
                renderAt: 'viability_column2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: column2dproperties,
                    categories : categoriesArray,
                    data: data["survey_viability"]["dataset"]
                }
            }).render();

            var emp_sat_barChart = new FusionCharts({
                type: 'bar2d',
                renderAt: 'emp_sat_bar2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {

                    chart: bar2d_properties,
                    categories : categoriesArray,
                    data: data["employee_satisfaction"]["dataset"]
                }
            }).render();

            var work_life_barChart = new FusionCharts({
                type: 'bar2d',
                renderAt: 'wl_bar2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {

                    chart: bar2d_properties,
                    categories : categoriesArray,
                    data: data["work_life"]["dataset"]
                }
            }).render();
            var supervisor_barChart = new FusionCharts({
                type: 'bar2d',
                renderAt: 'sup_bar2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {

                    chart: bar2d_properties,
                    categories : categoriesArray,
                    data: data["immediate_supervisor"]["dataset"]
                }
            }).render();
            var career_barChart = new FusionCharts({
                type: 'bar2d',
                renderAt: 'career_bar2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: bar2d_properties,
                    categories : categoriesArray,
                    data: data["career_growth"]["dataset"]
                }
            }).render();
            var viability_barChart = new FusionCharts({
                type: 'bar2d',
                renderAt: 'viability_bar2d-location',
                width: '500',
                height: '500',
                dataFormat: 'json',
                dataSource: {
                    chart: bar2d_properties,
                    categories : categoriesArray,
                    data: data["survey_viability"]["dataset"]
                }
            }).render();

            // var pyramidChart = new FusionCharts({
            //     type: 'pyramid',
            //     renderAt: 'pyramid-location',
            //     width: '750',
            //     height: '750',
            //     dataFormat: 'json',
            //     dataSource: {
            //
            //         chart: pyramidProperties,
            //         categories : categoriesArray,
            //         data : data["collection_one"]["dataset"]
            //     }
            // });
            var emp_sat_pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'emp_sat_pie_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    data: data["employee_satisfaction"]["dataset"]

                }
            }).render();

            var sup_pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'sup_pie_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    data: data["immediate_supervisor"]["dataset"]

                }
            }).render();

            var work_life_pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'wl_pie_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    data: data["work_life"]["dataset"]

                }
            }).render();
            var career_pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'career_pie_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    data: data["career_growth"]["dataset"]

                }
            }).render();

            var viability_pieChart = new FusionCharts({
                type: 'pie3d',
                renderAt: 'viability_pie_chart-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: pieProperties,
                    categories : categoriesArray,
                    data: data["survey_viability"]["dataset"]

                }
            }).render();

            var emp_sat_donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'emp_sat_doughnut-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    data: data["employee_satisfaction"]["dataset"]
                }
            }).render();

            var supervisor_donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'sup_doughnut-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    data: data["immediate_supervisor"]["dataset"]
                }
            }).render();

            var work_life_donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'wl_doughnut-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    data: data["work_life"]["dataset"]
                }
            }).render();
            var career_donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'career_doughnut-location',
                width: '600',
                height: '600',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    data: data["career_growth"]["dataset"]
                }
            }).render();
            var viability_donughtChart = new FusionCharts({
                type: 'doughnut2d',
                renderAt: 'viability_doughnut-location',
                width: '900',
                height: '900',
                dataFormat: 'json',
                dataSource: {
                    chart: doughnutProperties,
                    categories : categoriesArray,
                    data: data["survey_viability"]["dataset"]
                }
            }).render();
        }
    });
});
