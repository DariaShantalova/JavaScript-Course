/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function deepCopy(collection) {
    var result = [];
    collection.forEach(function(element){
        var keys = Object.keys(element);
        var copyElem = {};
        keys.forEach(function(key){
            copyElem[key] = element[key];
        });
        result.push(copyElem);
    });
    return result;
}
function query(collection) {
    var args = [].slice.call(arguments);
    console.info(args);
    var collectionCopy = deepCopy(collection);
    var selects = [];
    var filters = [];
    if( arguments.length === 1  && collection instanceof Array ){
        return collectionCopy;
    }
    if(arguments.length > 1 && collection instanceof Array) {
        for(var i = 1; i < arguments.length; i++){
            console.info(arguments[1]);
            //arguments[i];
           // if(args[i][0] === 'select') {selects.push(arguments[i]);}
            //if(args[i][0] === 'filter') {filters.push(arguments[i]);}

        }

    }
    filters.forEach(function(currentFilter){
        collectionCopy = filterMe(filteredCollection, currentFilter);
    });


}

/**
 * @params {String[]}
 */
function select() {
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
