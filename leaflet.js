let firstMap;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
let stumptowncoffee, stumptowncoffeeMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
stumptowncoffee = L.latLng(40.7330707,-73.9992095);
firstMap.panTo(stumptowncoffee);
stumptowncoffeeMarker = L.marker(stumptowncoffee).addTo(firstMap);
stumptowncoffeeMarker.bindPopup("Stumptown Coffee Roasters, 30 W 8th St. This is for emergency coffee.");
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974], 
                 [40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
                                  color: "#268bd2",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
                        thousandth = [[stumptowncoffee.lat + 0.001, stumptowncoffee.lng + 0.001],
                        [stumptowncoffee.lat + 0.001, stumptowncoffee.lng - 0.001],
                        [stumptowncoffee.lat - 0.001, stumptowncoffee.lng - 0.001],
                        [stumptowncoffee.lat - 0.001, stumptowncoffee.lng + 0.001]];
                        thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                                ).addTo(firstMap);
                                let circle;
                                circle = L.circle(stumptowncoffee, {radius: 100,
                                                                         color: "#859900",
                                                                         fillColor: "#cb4b16",
                                                                         opacity: 0.9,
                                                                         fillOpacity: 0.25}
                                          ).addTo(firstMap);