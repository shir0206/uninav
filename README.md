# :earth_africa::round_pushpin: Uninav [*Under development*]

Mobile Web application for a guided tour at Haifa University campus, written in `React.JS (hooks)`.

The map is provided and manipulated via `OpenStreetMap` & `Leaflet` API's.

<br>


:round_pushpin: **Link**: https://shir0206.github.io/uninav/
<br><br>

:memo: **Graphic Design & Mockups**: https://www.figma.com/file/i4jEitjHjXidzxWoLr1G10/sketch_4

:memo: **Wireframes & Drafts**: https://www.figma.com/file/x5Lc72YGd8bGvVQNEadRW4/UniNAV


<hr>

### Current structure
```
  App
  |-- SplashScreen
      |-- UniversityLogoSVG
      |-- UniNavLogoSVG
  |-- LocateUserButton
      |-- LocateSVG
  |-- NavbarRouter
      |-- Router
          |-- NavbarLinks
              |-- NavLink
                  |-- ScanSVG
              |-- NavLink
                  |-- TracksSVG
              |-- NavLink
                  |-- POIsSVG
          |-- Route
              |-- Scan
          |-- Route
              |-- Tracks
          |-- Route
              |-- Settings
                |-- HeadingSettings
                    |-- UniNavLogoSVG
                |-- DisplayPOITypesList
                    |-- ToggleButton
                |-- HideAllPOITypes
                    |-- ToggleButton
                    |-- UniNavLogoSVG
  |-- Map
      |-- MapContainer
          |-- TileLayer
          |-- CurrUserPosition
              |-- Marker
              |-- LocationError
          |-- AllRoutes
              |-- Polyline
                  |-- Popup
          |-- AllPOIs
              |-- Marker
                  |-- Popup
                      |-- POIPopupContent
          |-- HandleMapEvents
          |-- CheckCurrUserDistance
          |-- ChangeMapView
```
