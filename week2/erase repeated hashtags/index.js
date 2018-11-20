/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var uniqueTags = [];
    var answer = '';
    var flag = 0;
    if(hashtags.length === 0){
        return "";
    }
    for(var i = 0; i < hashtags.length; i++) {
        for(var j = 0; j < uniqueTags.length; j++){
            if(uniqueTags[j] === hashtags[i].toLowerCase()){
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            uniqueTags.push(hashtags[i].toLowerCase());
        }
        flag = 0;
    }
    //console.info(uniqueTags);
    //console.info(uniqueTags.length)
    for(var i = 0; i < uniqueTags.length - 1; i++){
        answer += uniqueTags[i] + ', ';
    }
    answer += uniqueTags[uniqueTags.length - 1];
    //console.info(answer);
    return answer;

};
