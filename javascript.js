alert('Boom');

const {Loader} = require('google-maps'); //without typescript
 
const loader = new Loader('AIzaSyCWHOe5v5kRHd_Rs1VUThFzIPuEbTcsgrs');
 

loader.load().then(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
    });
});