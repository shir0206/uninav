(this.webpackJsonpuninav=this.webpackJsonpuninav||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),l=a(9),o=a.n(l),s=(a(19),a(2)),d=(a(20),a(21),a.p+"static/media/locate.405f1ef7.svg"),g=function(e){return Object(n.jsx)("button",{className:"locate",onClick:function(){e.setLocate(!0),e.setIsDragged(!1),console.log("Locate","false")},children:Object(n.jsx)("img",{src:d,alt:"compass-locate me"})})},m=(a(22),a(10)),p=a(5),r=(a(23),a.p+"static/media/area.1050d6ae.svg"),u=a.p+"static/media/art.ecfd9ac0.svg",b=a.p+"static/media/bench.2e0c4201.svg",j=a.p+"static/media/history.6670f990.svg",y=a.p+"static/media/table.96decc4b.svg",h=a.p+"static/media/lookout.860da646.svg",f=function(e){var t=function(t){e.setDisplayPOITypes(Object(p.a)(Object(p.a)({},e.displayPOITypes),{},Object(m.a)({},t.target.name,t.target.checked)))};Object(c.useEffect)((function(){console.log("props.displayPoiType: ",e.displayPOITypes)}),[e.displayPOITypes]);var a=[{name:"bench",key:"bench",label:"\u05e1\u05e4\u05e1\u05dc",icon:b},{name:"area",key:"area",label:"\u05d0\u05d9\u05d6\u05d5\u05e8",icon:r},{name:"table",key:"table",label:"\u05e9\u05d5\u05dc\u05d7\u05df",icon:y},{name:"art",key:"art",label:"\u05d0\u05d5\u05de\u05e0\u05d5\u05ea",icon:u},{name:"lookout",key:"lookout",label:"\u05ea\u05e6\u05e4\u05d9\u05ea",icon:h},{name:"history",key:"history",label:"\u05d0\u05ea\u05e8 \u05d4\u05d9\u05e1\u05d8\u05d5\u05e8\u05d9",icon:j}];return Object(n.jsxs)("div",{className:"display-poi",children:[Object(n.jsx)("lable",{children:"\u05de\u05d4 \u05d9\u05d5\u05e6\u05d2 \u05d1\u05de\u05e4\u05d4"})," ",Object(n.jsx)("br",{}),a.map((function(a){return Object(n.jsxs)("label",{children:[a.label,Object(n.jsx)("img",{src:a.icon,alt:a.name,className:"checkbox-icon"}),Object(n.jsx)("input",{type:"checkbox",name:a.name,checked:e.displayPOITypes[a.name],onChange:t})]},a.key)}))]})},O=a.p+"static/media/settings.1e979f81.svg",v=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),i=a[0],l=a[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"settings-button",onClick:function(){l(!0)},children:Object(n.jsx)("img",{src:O,alt:"settings"})}),i&&Object(n.jsxs)("div",{className:"settings",children:[Object(n.jsx)(f,{displayPOITypes:e.displayPOITypes,setDisplayPOITypes:e.setDisplayPOITypes}),Object(n.jsx)("button",{className:"save",onClick:function(){l(!1)},children:Object(n.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/190/190411.svg",alt:"OK"})})]})]})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enableHighAccuracy,a=e.maximumAge,n=e.timeout,i=arguments.length>1?arguments[1]:void 0,l=Object(c.useState)({accuracy:null,altitude:null,altitudeAccuracy:null,heading:null,latitude:null,longitude:null,speed:null,timestamp:null,error:null}),o=Object(s.a)(l,2),d=o[0],g=o[1];return Object(c.useEffect)((function(){var e,c,l=function(t){var a=t.coords,n=void 0===a?{}:a,c=t.timestamp,l=n.accuracy,o=n.altitude,s=n.altitudeAccuracy,d=n.heading,m=n.latitude,p=n.longitude,r=n.speed;e||(g({accuracy:l,altitude:o,altitudeAccuracy:s,heading:d,latitude:m,longitude:p,speed:r,timestamp:c,error:null}),i instanceof Function&&i({accuracy:l,altitude:o,altitudeAccuracy:s,heading:d,latitude:m,longitude:p,speed:r,timestamp:c,error:null}))},o=function(t){e||l({accuracy:null,altitude:null,altitudeAccuracy:null,heading:null,latitude:null,longitude:null,speed:null,timestamp:null,error:t})};return navigator.geolocation&&(navigator.geolocation.getCurrentPosition(l,o),c=navigator.geolocation.watchPosition(l,o,{enableHighAccuracy:t,maximumAge:a,timeout:n})),function(){c&&navigator.geolocation.clearWatch(c),e=!0}}),[]),d},k=(a(24),a(30)),w=a(31),I=a(32),A=a(29),P=a(28),T=a(3),S=a.n(T),C=a.p+"static/media/marker.218b2e3e.svg",H=[{id:"1",location:{lat:32.759852654767,lng:35.0223930358948},type:"area",name:"1",img:"1",desc:"\u05d1\u05de\u05ea \u05d9\u05e9\u05d9\u05d1\u05d4"},{id:"2",location:{lat:32.7599465689222,lng:35.0208494110026},type:"area",name:"2",img:"2",desc:"\u05d2\u05df \u05d4\u05d6\u05d9\u05db\u05e8\u05d5\u05df"},{id:"3",location:{lat:32.7592323767394,lng:35.0216806036188},type:"area",name:"3",img:"3",desc:"\u05d2\u05df \u05d4\u05e0\u05d3\u05d9\u05d1\u05d9\u05dd"},{id:"4",location:{lat:32.760306,lng:35.020382},type:"area",name:"4",img:"15",desc:"\u05d2\u05df \u05e4\u05e1\u05dc\u05d9\u05dd \u05e2\u05e9 \u05e4\u05e8\u05d5\u05e4 \u05d0\u05d1\u05e8\u05d4\u05dd \u05e9. \u05e7\u05de\u05e4\u05e3, \u05de\u05d9\u05d9\u05e1\u05d3 \u05d4\u05d7\u05d5\u05d2 \u05dc\u05d0\u05de\u05e0\u05d5\u05ea \u05d1\u05d0\u05d5\u05e0\u05d9\u05d1\u05e8\u05e1\u05d9\u05d8\u05ea \u05d7\u05d9\u05e4\u05d4."},{id:"5",location:{lat:32.7605835160928,lng:35.0218254101482},type:"area",name:"5",img:"4",desc:"\u05d3\u05e9\u05d0 \u05d1\u05e0\u05d9\u05df \u05e8\u05d1 \u05ea\u05db\u05dc\u05d9\u05ea\u05d9"},{id:"6",location:{lat:32.7586747310855,lng:35.0217654032939},type:"area",name:"6",img:"5",desc:"\u05d3\u05e9\u05d0 \u05de\u05d5\u05dc \u05d4\u05de\u05e2\u05d5\u05e0\u05d5\u05ea \u05d5\u05d4\u05d1\u05d9\u05d8\u05d7\u05d5\u05df"},{id:"7",location:{lat:32.7580447864327,lng:35.0237045947527},type:"history",name:"7",img:"6",desc:"\u05de\u05d1\u05e0\u05d4 \u05e2\u05ea\u05d9\u05e7, \u05d3\u05e8\u05da \u05d4\u05d3\u05d5\u05e8\u05d5\u05ea"},{id:"8",location:{lat:32.7594507060252,lng:35.0216799312722},type:"bench",name:"8",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"9",location:{lat:32.7594932413072,lng:35.0214790674772},type:"bench",name:"9",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"10",location:{lat:32.7594542657952,lng:35.0213091312899},type:"bench",name:"10",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"11",location:{lat:32.7596544758423,lng:35.0213667012038},type:"bench",name:"11",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"12",location:{lat:32.7594997102279,lng:35.0213560276607},type:"bench",name:"12",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"13",location:{lat:32.7594032817133,lng:35.0214552831551},type:"bench",name:"13",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"14",location:{lat:32.7593985241907,lng:35.0216430362428},type:"bench",name:"14",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"15",location:{lat:32.7594142760234,lng:35.0217842289783},type:"bench",name:"15",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"16",location:{lat:32.7593280071112,lng:35.0216754769756},type:"bench",name:"16",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"17",location:{lat:32.7603064,lng:35.0206637},type:"table",name:"17",img:"16",desc:"\u05e1\u05e4\u05e1\u05dc-\u05e9\u05d5\u05dc\u05d7\u05df"},{id:"18",location:{lat:32.760492170103,lng:35.0222804187132},type:"table",name:"18",img:"14",desc:"\u05e1\u05e4\u05e1\u05dc-\u05e9\u05d5\u05dc\u05d7\u05df"},{id:"19",location:{lat:32.7584172500081,lng:35.0217915407385},type:"art",name:"19",img:"7",desc:"\u05e4\u05e1\u05dc, \u05d0\u05de\u05d0 \u05d0\u05d5\u05d4\u05d1\u05ea"},{id:"20",location:{lat:32.7591997275392,lng:35.0221845259047},type:"art",name:"20",img:"8",desc:"\u05e4\u05e1\u05dc \u05d0\u05e0\u05d2\u05f3\u05dc\u05d4 \u05e7\u05dc\u05d9\u05d9\u05df \u05dc\u05dc\u05d0 \u05db\u05d5\u05ea\u05e8\u05ea  2013"},{id:"21",location:{lat:32.7596161969653,lng:35.0209926221255},type:"art",name:"21",img:"9",desc:"\u05e4\u05e1\u05dc \u05d2\u05d3\u05e2\u05d5\u05df \u05d2\u05db\u05d8\u05de\u05df \u05de\u05e1\u05ea\u05dd 1998"},{id:"22",location:{lat:32.7589039896424,lng:35.0218407900494},type:"art",name:"22",img:"10",desc:"\u05e4\u05e1\u05dc \u05d9\u05e2\u05e7\u05d1 \u05d3\u05d5\u05e8\u05e6\u05d9\u05df \u05db\u05e0\u05e3 2013"},{id:"23",location:{lat:32.7599114081362,lng:35.0224348891075},type:"art",name:"23",img:"11",desc:"\u05e4\u05e1\u05dc \u05e2\u05e5 \u05d4\u05db\u05e1\u05e3"},{id:"24",location:{lat:32.7601157794675,lng:35.0220610669045},type:"art",name:"24",img:"12",desc:"\u05e4\u05e1\u05dc \u05e8\u05d5\u05d9\u05ea \u05de\u05e9\u05dc\u05d9 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4 \u05dc\u05d3\u05e8\u05d0\u05d2 \u05e7\u05d5\u05d5\u05d9\u05df \u05de\u05d6\u05e8\u05d7\u05d9"},{id:"25",location:{lat:32.7593874652566,lng:35.0220849350983},type:"art",name:"25",img:"13",desc:"\u05e4\u05e1\u05dc \u05e9\u05dc\u05d9 \u05e8\u05d9\u05d9\u05db\u05de\u05df \u05de\u05d2\u05d1\u05d5\u05ea 2014"},{id:"26",location:{lat:32.763738,lng:35.017436},type:"art",name:"26",img:"14",desc:"\u05e4\u05e1\u05dc \u05d0\u05d5\u05e8\u05d9 \u05e7\u05e6\u05e0\u05e9\u05d8\u05d9\u05d9\u05df, \u05d9\u05dc\u05d3, 2013"},{id:"27",location:{lat:32.763762,lng:35.017315},type:"art",name:"27",img:"15",desc:"\u05e4\u05e1\u05dc \u05de\u05e0\u05e9\u05d4 \u05e7\u05d3\u05d9\u05e9\u05de\u05df, \u05e8\u05d0\u05e9, 2007"},{id:"28",location:{lat:32.76339,lng:35.016977},type:"art",name:"28",img:"16",desc:"\u05e4\u05e1\u05dc \u05d2\u05d9\u05dc \u05e9\u05d7\u05e8, \u05d3\u05d2, 2013"},{id:"29",location:{lat:32.763336,lng:35.016794},type:"art",name:"29",img:"17",desc:"\u05e4\u05e1\u05dc \u05d0\u05dc\u05d5\u05e0\u05d9, \u05d0\u05dc\u05e4\u05d0, 2015"},{id:"30",location:{lat:32.763632,lng:35.01768},type:"art",name:"30",img:"18",desc:"\u05e4\u05e1\u05dc \u05e4\u05d9\u05dc\u05d9\u05e4 \u05e8\u05e0\u05e6\u05e8, \u05d3\u05de\u05d5\u05ea, 2013"},{id:"31",location:{lat:32.761819,lng:35.019967},type:"art",name:"31",img:"19",desc:"\u05e4\u05e1\u05dc \u05de\u05e9\u05d5\u05dc\u05dd, \u05e8\u05d0\u05e9 \u05e2\u05d2\u05dc, 2015"},{id:"32",location:{lat:32.761858,lng:35.019629},type:"art",name:"32",img:"20",desc:"\u05e4\u05e1\u05dc \u05d2\u05d5\u05dc\u05d5\u05de\u05d1\u05e7, \u05e0\u05d9\u05d9\u05e8 \u05d8\u05d5\u05d0\u05dc\u05d8, 2013"},{id:"33",location:{lat:32.76143,lng:35.019007},type:"art",name:"33",img:"21",desc:"\u05e4\u05e1\u05dc \u05d4\u05d9\u05d9\u05de\u05df, \u05de\u05d1\u05e0\u05d4, 1988"},{id:"34",location:{lat:32.762226,lng:35.017881},type:"art",name:"34",img:"22",desc:"\u05e4\u05e1\u05dc \u05d3\u05d5\u05de\u05d9\u05e0\u05d9, \u05e6\u05de\u05d7 \u05d0\u05d1\u05df, 2013"},{id:"35",location:{lat:32.758938,lng:35.020916},type:"art",name:"35",img:"32",desc:"\u05e4\u05e1\u05dc \u05e0\u05d6\u05e8\u05d9\u05d0\u05df, \u05de\u05d5\u05e8\u05e9\u05ea, 2009"},{id:"36",location:{lat:32.761798,lng:35.021149},type:"area",name:"36",img:"23",desc:"\u05d2\u05d9\u05e0\u05ea \u05ea\u05d1\u05dc\u05d9\u05e0\u05d9\u05dd"},{id:"37",location:{lat:32.764885,lng:35.0165},type:"lookout ",name:"37",img:"24",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05dc\u05d9\u05d3 \u05d1\u05e0\u05d9\u05df IBM"},{id:"38",location:{lat:32.764825,lng:35.017086},type:"lookout ",name:"38",img:"25",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e8\u05d7\u05d1\u05d4 \u05dc\u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05d0\u05d7\u05d5\u05e8\u05d9 \u05d1\u05e0\u05d9\u05df \u05d0\u05de\u05e0\u05d5\u05ea"},{id:"39",location:{lat:32.762831,lng:35.019713},type:"lookout ",name:"39",img:"26",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05d4\u05db\u05d1\u05d9\u05e9 \u05d4\u05e0\u05d5\u05e4\u05d9"},{id:"40",location:{lat:32.762427,lng:35.019907},type:"lookout ",name:"40",img:"27",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05e7\u05e4\u05d4 \u05d3\u05e9\u05d0"},{id:"41",location:{lat:32.761601,lng:35.018644},type:"lookout ",name:"41",img:"28",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05d9\u05dd \u05de\u05e4\u05d9\u05e0\u05ea \u05e2\u05d9\u05e9\u05d5\u05df \u05d1\u05d9\u05df \u05d1\u05e0\u05d9\u05df \u05d2\u05f3\u05d9\u05d9\u05e7\u05d5\u05d1\u05e1 \u05dc\u05d1\u05e0\u05d9\u05d9\u05df \u05d7\u05d9\u05e0\u05d5\u05da"},{id:"42",location:{lat:32.762256,lng:35.017834},type:"lookout ",name:"42",img:"29",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05d9\u05dd \u05d1\u05d9\u05df \u05d1\u05e0\u05d9\u05d9\u05df \u05d7\u05d9\u05e0\u05d5\u05da \u05dc\u05d1\u05d9\u05df \u05d1\u05e0\u05d9\u05d9\u05df \u05d1\u05e8\u05d9\u05d0\u05d5\u05ea"},{id:"43",location:{lat:32.762884,lng:35.016841},type:"lookout ",name:"43",img:"-",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05d9\u05dd \u05de\u05d4\u05e8\u05db\u05d1\u05dc\u05d9\u05ea"},{id:"44",location:{lat:32.762215,lng:35.021468},type:"lookout ",name:"44",img:"-",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05d2\u05d2 \u05d1\u05e0\u05d9\u05df \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8 \u05e2\u05dd \u05de\u05e9\u05e7\u05e4\u05ea"},{id:"45",location:{lat:32.762248,lng:35.021246},type:"lookout ",name:"45",img:"-",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05e7\u05d5\u05de\u05d4 \u05ea\u05d7\u05ea\u05d5\u05e0\u05d4 \u05e9\u05dc \u05d1\u05d9\u05ea \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8"},{id:"46",location:{lat:32.762172,lng:35.021178},type:"lookout ",name:"46",img:"31",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05e7\u05d5\u05de\u05d4 \u05e9\u05e0\u05d9\u05d4 \u05e9\u05dc \u05d1\u05d9\u05ea \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8"},{id:"47",location:{lat:32.76211,lng:35.021173},type:"lookout ",name:"47",img:"-",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05e7\u05d5\u05de\u05d4 \u05e9\u05dc\u05d9\u05e9\u05d9\u05ea \u05e9\u05dc \u05d1\u05d9\u05ea \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8"},{id:"48",location:{lat:32.762041,lng:35.02107},type:"lookout ",name:"48",img:"30",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05e7\u05d5\u05de\u05d4 \u05e2\u05dc\u05d9\u05d5\u05e0\u05d4 \u05e9\u05dc \u05d1\u05d9\u05ea \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8"},{id:"49",location:{lat:32.762047,lng:35.020738},type:"lookout ",name:"49",img:"-",desc:"\u05ea\u05e6\u05e4\u05d9\u05ea \u05e0\u05d5\u05e3 \u05dc\u05e6\u05e4\u05d5\u05df \u05de\u05db\u05d1\u05d9\u05e9 \u05e0\u05d5\u05e4\u05d9 \u05dc\u05d9\u05d3 \u05d1\u05d9\u05ea \u05d4\u05e1\u05d8\u05d5\u05d3\u05e0\u05d8"},{id:"50",location:{lat:32.764828,lng:35.016854},type:"bench",name:"50",img:"23",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"51",location:{lat:32.764851,lng:35.016916},type:"bench",name:"51",img:"24",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"52",location:{lat:32.763613,lng:35.018637},type:"bench",name:"52",img:"25",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"53",location:{lat:32.763584,lng:35.018647},type:"bench",name:"53",img:"26",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"54",location:{lat:32.763484,lng:35.018768},type:"bench",name:"54",img:"27",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"55",location:{lat:32.763495,lng:35.0188},type:"bench",name:"55",img:"28",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"56",location:{lat:32.762395,lng:35.019875},type:"bench",name:"56",img:"29",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"57",location:{lat:32.762274,lng:35.020078},type:"bench",name:"57",img:"30",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"58",location:{lat:32.762225,lng:35.020048},type:"bench",name:"58",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"59",location:{lat:32.762146,lng:35.020056},type:"bench",name:"59",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"60",location:{lat:32.762146,lng:35.020056},type:"bench",name:"60",img:"",desc:"\u05e1\u05e4\u05e1\u05dc (\u05de\u05de\u05e9 \u05dc\u05d9\u05d3)"},{id:"61",location:{lat:32.762036,lng:35.020311},type:"bench",name:"61",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"62",location:{lat:32.762225,lng:35.021259},type:"bench",name:"62",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"63",location:{lat:32.762143,lng:35.021273},type:"bench",name:"63",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"64",location:{lat:32.762137,lng:35.021191},type:"bench",name:"64",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"65",location:{lat:32.762046,lng:35.020973},type:"bench",name:"65",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"66",location:{lat:32.762035,lng:35.020671},type:"bench",name:"66",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"67",location:{lat:32.762019,lng:35.020693},type:"bench",name:"67",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"68",location:{lat:32.761997,lng:35.020748},type:"bench",name:"68",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"69",location:{lat:32.761926,lng:35.020812},type:"bench",name:"69",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"70",location:{lat:32.761873,lng:35.020804},type:"bench",name:"70",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"71",location:{lat:32.762396,lng:35.019947},type:"table",name:"71",img:"",desc:"\u05e1\u05e4\u05e1\u05dc \u05e9\u05d5\u05dc\u05d7\u05df"},{id:"72",location:{lat:32.762387,lng:35.02},type:"table",name:"72",img:"",desc:"\u05e1\u05e4\u05e1\u05dc \u05e9\u05d5\u05dc\u05d7\u05df \u05e2\u05dd \u05e7\u05d9\u05e8\u05d5\u05d9 \u05e7\u05dc"},{id:"73",location:{lat:32.762314,lng:35.020055},type:"table",name:"73",img:"",desc:"\u05e1\u05e4\u05e1\u05dc \u05e9\u05d5\u05dc\u05d7\u05df \u05e2\u05dd \u05e7\u05d9\u05e8\u05d5\u05d9 \u05e7\u05dc"}],z=a(27),N=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z.a,{pathOptions:{color:"#00ff11",weight:"9",opacity:.8,lineCap:"round",className:"styleRouteA"},positions:[[32.76417757110419,35.01561610924228],[32.76437183457819,35.015948486647446],[32.76460223954432,35.01621117201602],[32.76467000559733,35.01631302960794],[32.76470614747121,35.01638808257038],[32.76473325386695,35.0164738573846],[32.76474228933037,35.01657571497652],[32.76471518293735,35.01666685071663],[32.76467000559733,35.016752625530884],[32.764588686327514,35.016790152012085],[32.764498331496156,35.016838400345094],[32.76441249432141,35.01689737052991],[32.764340210320626,35.016972423492355],[32.76430406829821,35.01702603275127],[32.764267926261105,35.01713325126905],[32.764218230936166,35.01730480089751],[32.76417847464245,35.017409445948374],[32.76409715492364,35.017629243909845],[32.76396162189392,35.017902651130235],[32.763812535322934,35.01812781001761],[32.76370410856901,35.01833152520141],[32.76358791107898,35.01852387541209],[32.76342527048824,35.018727590595894],[32.76323895626606,35.0189454587026],[32.76308986848488,35.019133091108735],[32.76297240520874,35.019272475181864],[32.762771813744905,35.0194999928897],[32.76231551159692,35.02008969473757],[32.761638915107575,35.020938865365785],[32.7617518622599,35.02105144480947],[32.76211779203847,35.02134151325741],[32.76201839896047,35.02153986751535],[32.76158920030421,35.021212851036054],[32.76150787822041,35.02110563251827]],eventHandlers:{click:function(){console.log("routeA A clicked")}},children:Object(n.jsx)(P.a,{children:"Hi route A~!"})}),Object(n.jsx)(z.a,{pathOptions:{color:"#ff00f7",weight:"6",opacity:.8,dashArray:"25 10"},positions:[[32.76469496883437,35.0167490098387],[32.76471303976803,35.016775814468176],[32.764762734816806,35.016840145578854],[32.76479887665302,35.0169151985413],[32.76478984119532,35.01700097335551],[32.764780805736756,35.0171135527992],[32.76475369935544,35.01721004946521],[32.7647175575009,35.01730654613124],[32.764663344691556,35.01738696001958],[32.764595578633475,35.01746201298202],[32.76454136574986,35.0175263440927],[32.76445101087047,35.01760139705519],[32.76440131564771,35.0176496453882],[32.764338067142276,35.01767645001763],[32.76427481859191,35.0176871718694],[32.764220605512946,35.01769789372116],[32.76412573254538,35.01774078112831],[32.76406700161002,35.01774078112831]],eventHandlers:{click:function(){console.log("routeB B clicked")}},children:Object(n.jsx)(P.a,{children:"Hi route B!!!"})}),Object(n.jsx)(z.a,{pathOptions:{color:"#0008ff",weigth:"4",opacity:.5},positions:[[32.76298060129735,35.01708196501649],[32.76271465563579,35.01739858943721],[32.762448709179864,35.01773131340471],[32.76234052734336,35.017865476294865],[32.76197342928635,35.01759049608766],[32.76165194686348,35.01803484351427],[32.76143107349766,35.018351467934956],[32.761336413315995,35.018480264309474],[32.76122823012801,35.018635893262044],[32.761178646122914,35.01873785705853],[32.76117413848474,35.01887201994869],[32.7611407819825,35.01893942337158],[32.7610911979287,35.01900918807443],[32.761041613847325,35.01907358626169],[32.760964983849014,35.019170183542585],[32.76091539969733,35.01925068127666],[32.76087933847879,35.019325812495154],[32.760865815518045,35.019400943713634],[32.76087483082543,35.01944387583845],[32.76091089204583,35.019486807963304],[32.76092892265054,35.0194921744789],[32.76091539969733,35.01956193918179],[32.76092441499971,35.01958877175979],[32.76092441499971,35.01962097085342],[32.76090187674211,35.019658536462686],[32.760816952587064,35.019778746379465],[32.760722291752515,35.01994510836325],[32.760560015801985,35.020025606097335],[32.760406754910484,35.02013293640941],[32.760235463013714,35.02023490020594],[32.760163340011225,35.02027246581516]],eventHandlers:{click:function(){console.log("routeC A clicked")}},children:Object(n.jsx)(P.a,{children:"Hi route C~~!!!!"})})]})},D=(a(25),a.p+"static/media/1.72125605.jpeg"),F=a.p+"static/media/2.29142643.jpeg",B=a.p+"static/media/3.4dc1b555.jpeg",L=a.p+"static/media/4.5799dc65.jpeg",U=a.p+"static/media/5.96abfbaf.jpeg",R=a.p+"static/media/6.70bc4459.jpeg",E=a.p+"static/media/7.74780fde.jpeg",M=a.p+"static/media/8.80027a30.jpeg",J=a.p+"static/media/9.4a05c4b1.jpeg",G=a.p+"static/media/10.aea759ec.jpeg",K=a.p+"static/media/11.c5154433.jpeg",V=a.p+"static/media/12.b5fc3ee9.jpeg",W=a.p+"static/media/13.610c6025.jpeg",q=a.p+"static/media/14.9df15685.jpeg",Q=a.p+"static/media/15.9ff0e33e.jpeg",X=a.p+"static/media/16.2c7af9e9.jpeg",Y=a.p+"static/media/17.31cb904c.jpeg",Z=a.p+"static/media/18.0e4dff75.jpeg",$=a.p+"static/media/19.5576a33a.jpeg",_=a.p+"static/media/20.311178b3.jpeg",ee=a.p+"static/media/21.7cac7579.jpeg",te=a.p+"static/media/22.3f96dfb5.jpeg",ae=a.p+"static/media/23.e37cd165.jpeg",ne=a.p+"static/media/24.3cb89b0b.jpeg",ce=a.p+"static/media/25.4d071ed7.jpeg",ie=a.p+"static/media/26.e9e7628e.jpeg",le=a.p+"static/media/27.36fffdda.jpeg",oe=a.p+"static/media/28.a60f3432.jpeg",se=a.p+"static/media/29.2ecfeab7.jpeg",de=a.p+"static/media/30.86edd279.jpeg",ge=a.p+"static/media/31.f5c2b4bf.jpeg",me=a.p+"static/media/32.7aae10bc.jpeg";var pe=function(e){function t(e){var t=function(e){switch(e){case"area":return r;case"art":return u;case"bench":return b;case"history":return j;case"table":return y;case"lookout":return h}return C}(e);return new S.a.Icon({iconUrl:t,iconRetinaUrl:t,iconAnchor:null,popupAnchor:[0,-15],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new S.a.Point(30,45),className:"leaflet-div-poi-icon"})}return Object(n.jsx)(n.Fragment,{children:e.pois.map((function(a){return e.displayPOITypes[a.type]&&Object(n.jsx)(A.a,{position:[a.location.lat,a.location.lng],icon:t(a.type),eventHandlers:{click:function(){console.log("marker ",a.id," clicked")}},children:Object(n.jsxs)(P.a,{children:["HI~!!!! ",a.id,Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:[Object(n.jsx)("span",{role:"img","aria-label":"bear"}),a.desc]}),Object(n.jsx)("p",{children:a.desc}),a.img&&Object(n.jsx)("img",{src:(c=a.img,[D,F,B,L,U,R,E,M,J,G,K,V,W,q,Q,X,Y,Z,$,_,ee,te,ae,ne,ce,ie,le,oe,se,de,ge,me][c]),alt:a.desc,width:"100px",height:"100px"})]})]})},a.id);var c}))})};function re(){Object(k.c)({click:function(e){console.log("LOCATING",e.latlng)},move:function(){console.log("move")},unload:function(){console.log("unload")},load:function(){console.log("load")},zoom:function(){console.log("zoom")},moveend:function(){console.log("moveend")},locationfound:function(e){console.log("location found:",e)},locationerror:function(e){console.log("locationerror:",e)},popupopen:function(){console.log("popupopen")},popupclose:function(){console.log("popupclose")}});return null}function ue(e){var t=e.center,a=e.zoom,n=Object(k.a)();return t.lat&&t.lng&&a&&n.setView(t,a),null}var be=function(e){var t=Object(c.useState)(H),a=Object(s.a)(t,2),i=a[0],l=(a[1],Object(c.useState)([])),o=Object(s.a)(l,2),d=o[0],g=(o[1],Object(c.useState)({lat:32.760803,lng:35.020159})),m=Object(s.a)(g,2),p=m[0],r=m[1];function u(){Object(k.b)("dblclick",(function(){r({lat:32.760803,lng:35.020159}),console.log("seCenter")}));return null}var b=x({enableHighAccuracy:!0,maximumAge:15e3,timeout:12e3});console.log("geolocation: ",b);var j=new S.a.Icon({iconUrl:C,iconRetinaUrl:C,iconAnchor:null,popupAnchor:[0,-15],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new S.a.Point(30,45),className:"leaflet-div-icon"});return Object(n.jsxs)(w.a,{center:[p.lat,p.lng],zoom:18,whenCreated:function(){console.log("created")},whenReady:function(){console.log("ready!")},children:[Object(n.jsx)(I.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'}),e.locate&&!b.error&&Object(n.jsx)(A.a,{position:[b.latitude,b.longitude],icon:j,children:Object(n.jsx)(P.a,{children:"HI~!!!!"})}),")",Object(n.jsx)(N,{}),Object(n.jsx)(pe,{markers:d,pois:i,displayPOITypes:e.displayPOITypes}),Object(n.jsx)(re,{}),Object(n.jsx)(u,{}),Object(n.jsx)(ue,{center:[p.lat,p.lng],zoom:18})]})};var je=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],l=Object(c.useState)(!1),o=Object(s.a)(l,2),d=o[0],m=o[1],p=Object(c.useState)({bench:!1,area:!0,table:!1,art:!0,lookout:!0,history:!0}),r=Object(s.a)(p,2),u=r[0],b=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{locate:d,setLocate:m,setIsDragged:i}),Object(n.jsx)(v,{displayPOITypes:u,setDisplayPOITypes:b}),Object(n.jsx)(be,{locate:d,setIsDragged:i,isDragged:a,displayPOITypes:u})]})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),i(e),l(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(je,{})}),document.getElementById("root")),ye()}},[[26,1,2]]]);
//# sourceMappingURL=main.977ba7e4.chunk.js.map