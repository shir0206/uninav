# :earth_africa: Uninav

#### Mobile Web application for guided tour, written in `React.JS (hooks)`.

https://shir0206.github.io/uninav/

:round_pushpin: Under development 


## Setup & Installations

### Install leaflet react-leaftlet
```
yarn add react-leaflet

yarn add leaflet react react-dom
```

### Set defaults
```js
const DEF_LAT = 48;
const DEF_LNG = -123;
```

### Show Map
```js
<TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
/>
```
### Add Leftlet
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

```


### Get user location
```js
yarn add react-geolocated
```
