/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if(hours <= 23 && hours >= 0 && minutes >= 0 && minutes <=59){
        return true;
    }else{
        return false;
    }
};
