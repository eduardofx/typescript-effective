interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
  //tileSize: '8'| 16 | 32;
}

//const map: MapConfig = { lng: -73.935242, lat: 40.73061, tileSize: 16 };
const map = <MapConfig>{ lng: -73.935242, lat: 40.73061, tileSize: 16 };
console.log(map);
