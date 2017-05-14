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
          "pYAxisName": "Cost of Inventory (US $ in thousands)",
          "sYAxisName": "Units in Inventory"
      };
      var  column2dproperties= {
                "caption": "Employee Satisfaction",
              //  "subCaption": "Harry's SuperMart",
                "xAxisName": "Sentiment",
                "yAxisName": "Responses",
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
          "theme": "fint",
          "caption": "Percentage of Employee-Satisfaction Analysis",
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
          "chartLeftMargin": "40",
          "isSliced": "0",
          "showPlotBorder": "1",
          "plotBorderThickness": "1",
          "plotBorderAlpha": "100",
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
          "caption": "Employee Satisfaction",
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
      }

      var categoriesArray = [{
          "category" : data["categories"]
      }];

      var column_Chart = new FusionCharts({
        type: 'column2d',
        renderAt: 'chart-location',
        width: '500',
        height: '500',
        dataFormat: 'json',
        dataSource: {
          chart: column2dproperties,
          categories : categoriesArray,
            data: data["dataset"]
        }
      });

      var barChart = new FusionCharts({
            type: 'bar2d',
            renderAt: 'bar2d-location',
            width: '500',
            height: '500',
            dataFormat: 'json',
            dataSource: {

                chart: bar2d_properties,
                categories : categoriesArray,
                data : data["dataset"]
            }
        }).render();

        var pyramidChart = new FusionCharts({
            type: 'pyramid',
            renderAt: 'pyramid-location',
            width: '700',
            height: '700',
            dataFormat: 'json',
            dataSource: {

                chart: pyramidProperties,
                categories : categoriesArray,
                data : data["dataset"]
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
                data : data["dataset"]

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
                data: data["dataset"]
            }
        }).render();



      column_Chart.render();
    //  barChart.render();
      pieChart.render();
      //donughtChart.render();
      //  pyramidChart.render();

    }
  });
});
