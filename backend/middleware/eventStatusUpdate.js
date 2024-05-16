const eventSchema = require('../models/eventModel');
const {getUserCurrentTime} = require('../middleware/userTime');

const updateEventStatus = async function() {
  let now = new Date(getUserCurrentTime());

  console.log("Updated event status: " + now);

  await eventSchema.updateMany(
    { startTime: { $gt: now } },
    { status: 'upcoming' }
  );
  await eventSchema.updateMany(
    { startTime: { $lte: now }, endTime: { $gte: now } },
    { status: 'occurring' }
  );
  await eventSchema.updateMany(
    { endTime: { $lt: now} },
    { status: 'ended' }
  );
}

module.exports = {updateEventStatus};