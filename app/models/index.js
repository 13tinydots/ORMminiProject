const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Trip.hasMany(Traveller, {
    foreignKey: 'traveler_id',
    onDelete: 'CASCADE',
});

Trip.hasMany(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
});

module.exports = { Location, Traveller, Trip };
