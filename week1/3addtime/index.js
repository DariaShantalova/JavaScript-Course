/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if(minutes + interval >= 60){
        hours = hours + Math.floor((minutes + interval)/ 60);
        if(hours >= 24){
            hours = hours - Math.floor(hours/24)*24;
        }
        minutes =  (minutes + interval) % 60;
    }else{
        minutes = minutes + interval;
    }

    return (hours<10 ? '0'+hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);
};
