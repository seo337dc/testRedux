import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataUSA from "./mapDataUSA";

// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

var data = [
  ["Alabama", 2018, 1.7, 1],
  ["Alaska", 2018, 1.7, -1],
  ["Arizona", 2018, 1.7, -1],
  ["Arkansas", 2018, 1.7, -1],
  ["California", 2018, 1.7, -1],
  ["Colorado", 2018, 1.7, -1],
  ["Connecticut", 2018, 1.7, -1],
  ["Delaware", 2018, 1.7, -1],
  ["District of Columbia", 2018, 1.7, -1],
  ["Florida", 2018, 1.7, -1],
  ["Georgia", 2018, 1.7, -1],
  ["Hawaii", 2018, 1.7, -1],
  ["Idaho", 2018, 1.7, 28331, 8496, 635647, -1],
  ["Illinois", 2018, 1.7, -1],
  ["Indiana", 2018, 1.7, -1],
  ["Iowa", 2018, 1.7, -1],
  ["Kansas", 2018, 1.7, -1],
  ["Kentucky", 2018, 1.7, -1],
  ["Louisiana", 2018, 1.7, -1],
  ["Maine", 2018, 1.7, -1],
  ["Maryland", 2018, 1.7, -1],
  ["Massachusetts", 2018, 1.7, -1],
  ["Michigan", 2018, 1.7, 172136, 51463, 4771981, -1],
  ["Minnesota", 2018, 1.7, -1],
  ["Mississippi", 2018, 1.7, -1],
  ["Missouri", 2018, 1.7, -1],
  ["Montana", 2018, 1.7, -1],
  ["Nebraska", 2018, 1.7, -1],
  ["Nevada", 2018, 1.7, -1],
  ["New Hampshire", 2018, 1.7, -1],
  ["New Jersey", 2018, 1.7, -1],
  ["New Mexico", 2018, 1.7, -1],
  ["New York", 2018, 1.7, -1],
  ["North Carolina", 2018, 1.7, -1],
  ["North Dakota", 2018, 1.7, -1],
  ["Ohio", 2018, 1.7, 174266, -1],
  ["Oklahoma", 2018, 1.7, -1],
  ["Oregon", 2018, 1.7, -1],
  ["Pennsylvania", 2018, -1],
  ["Rhode Island", 2018, 1.7, -1],
  ["South Carolina", 2018, 1.7, -1],
  ["South Dakota", 2018, 1.7, -1],
  ["Tennessee", 2018, 1.7, -1],
  ["Texas", 2018, 1.7, -1],
  ["Utah", 2018, 1.7, -1],
  ["Vermont", 2018, 1.7, -1],
  ["Virginia", 2018, 1.7, -1],
  ["Washington", 2018, 1.7, -1],
  ["West Virginia", 2018, 1.7, -1],
  ["Wisconsin", 2018, 1.7, -1],
  ["Wyoming", 2018, 1.7, -1],
];

const mapOptions = {
  title: {
    text: "USA 2016 Presidential Election Results",
  },

  chart: {
    map: "countries/us/us-all",
  },

  colorAxis: {
    min: 0,
    max: 0,
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },

  tooltip: {
    useHTML: true,
  },

  series: [
    {
      mapData: mapDataUSA,
      data: data,
      name: "States",
      joinBy: ["name", "id"],
      dataLabels: {
        enabled: true,
        format: "{point.properties.postal-code}",
      },
      states: {
        hover: {
          color: "#BADA55",
        },
      },
      keys: ["id", "years", "bed"],
      tooltip: {
        headerFormat: "",
        pointFormatter: function () {
          return (
            `<h1>${this.id}</h1>` +
            `<hr/>` +
            `<b>year :         ${this.years}</b>` +
            `<hr/>` +
            `<b>Beds Per Resident          ${this.bed}</b>`
          );
        },
      },
    },
  ],
};

class TestMap extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact
          options={mapOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
      </div>
    );
  }
}

export default TestMap;
