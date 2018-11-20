/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {
  var hashtags = [];

  for(var i = 0; i < tweet.length; i++){
      if(tweet[i] === '#'){
          startTag = i;
          for(var j = i; j < tweet.length; j++){
              if(tweet[j] === ' '){
                  hashtags.push(tweet.slice(i + 1, j));
                  flag = 1;
                  break;
              }
              if(j === tweet.length - 1){
                  hashtags.push(tweet.slice(i + 1, j + 1));
              }
          }
      }
  }
  
  return hashtags;
}