this.distance = 10_000;

const roadTrip1 = {
  distance: 3_000,
  getDistance: function (unit) {
    return this.distance + unit;
  },
};
const roadTrip2 = {
  distance: 5_000,
  getDistance: function () {
    return this.distance;
  },
};

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip1); // 3_000
// const getTripDistance = roadTrip1.getDistance.bind(roadTrip2); // 5_000
const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km'); // 5_000
// const getTripDistance = roadTrip1.getDistance.bind(this); // 10_000
const tripDistance = getTripDistance();
console.log({ tripDistance });
