import L from "leaflet";

// const iconPerson = new L.Icon({
//     iconUrl: require('../img/marker-pin-person.svg'),
//     iconRetinaUrl: require('../img/marker-pin-person.svg'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
// });

// var myIcon = L.icon({
//     iconUrl: 'my-icon.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'my-icon-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });

const iconPerson = new L.Icon({
  iconUrl: "https://www.flaticon.com/svg/static/icons/svg/3791/3791253.svg",
  iconRetinaUrl:
    "https://www.flaticon.com/svg/static/icons/svg/3791/3791253.svg",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { iconPerson };
