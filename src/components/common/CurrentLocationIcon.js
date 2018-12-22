import L from 'leaflet';

const CurrentLocationIcon = new L.Icon({
  iconUrl: require('../../assets/current_location.GIF'),
  iconRetinaUrl: require('../../assets/current_location.GIF'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(35, 35),
  className: 'leaflet-div-icon'
});

export { CurrentLocationIcon };

/*
* other icon gif urls
*
* selected: https://npmtbteam.com/wp-content/themes/mighty/images/preloader.GIF
* https://prod-roadmap.herokuapp.com/static/loader-1.gif
* https://cdn.dribbble.com/users/9639/screenshots/1853041/slack_load.gif
* https://newvitruvian.com/images/transparent-google-loader-gif-5.gif
* https://i2.wp.com/legalnoodle.com/wp-content/uploads/2016/05/preloader-1.gif
* http://www.viasea.com.tr/assets/img/preloader.gif
*
* */