const moment = require('moment-timezone');

const getUserCurrentTime = () => {
    let now = new Date();
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let offset = moment.tz(timeZone).utcOffset();
    
    let adjustedTimestamp = now.getTime() + offset * 60 * 1000;

    let userTime = new Date(adjustedTimestamp);
    userTime = userTime.toISOString();

    return userTime;
}

module.exports = {getUserCurrentTime};