let runningMap;
runningMap = L.map("running-map");
tileLayer = 
L.tileLayer('http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
tileLayer.addTo(runningMap);
runningMap.setView([40.494600, -74.440296], 14);
let hiramSquare, hiramSquareMarker;
let runPath, runPathPolyline, runPath2, runPath2Polyline;
hiramSquare = L.latLng(40.494600, -74.440296);
hiramSquareMarker = L.circleMarker(hiramSquare).addTo(runningMap);
runPath = [[40.49475, -74.44039], [40.49529, -74.44067], 
                 [40.49517, -74.44202], [40.49687, -74.44243],
                [40.49774, -74.43639], [40.50099, -74.43851],
            [40.50189, -74.43990], [40.50540, -74.44374]];
                 runPathPolyline = L.polyline(runPath, {
                                  color: "magenta"
                                }
                        ).addTo(runningMap);
runPath2 = [
    [40.49461, -74.44035], [40.49411, -74.44019],
    [40.49379, -74.44163], [40.48824, -74.43894],
    [40.48768, -74.43801], [40.48640, -74.43908],
    [40.48532, -74.43694], [40.48161, -74.44079]
];
runPath2Polyline = L.polyline(runPath2, {
    color: "purple"
}).addTo(runningMap);

let boydPark; 
boydPark = L.marker([40.489994,-74.4365143]);
boydPark.addTo(runningMap);
boydPark.bindPopup("This is a nice place to run short distances.");

let boydCoords;
boydCoords = L.latLng(40.489994,-74.4365143);
runningMap.panTo(boydCoords);
