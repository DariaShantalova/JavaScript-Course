// Телефонная книга

var phoneBook = {
    names: [],
    phones: []
};


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var cmd = command.split(' ');

    if(cmd[0] == "ADD"){
        if(phoneBook.names.indexOf(cmd[1]) === -1) {
            phoneBook.names.push(cmd[1]);
            phoneBook.phones.push(cmd[2]);
        }else{
            phoneBook.phones[phoneBook.names.indexOf(cmd[1])] += ',' + cmd[2];
        }

       // console.info(phoneBook);
        return phoneBook;

    }
    if(cmd[0] == "SHOW"){
        var Book = [];
        for(var i = 0; i < phoneBook.names.length; i++){
            var contacts = '';

            if(phoneBook.phones[i].length != 0) {
                contacts += phoneBook.names[i] + ': ';
                var phones = phoneBook.phones[i].split(',');
                for(j = 0; j < phones.length; j++) {
                    if (phones[j] === '') {
                        phones.splice(j,1);
                    }
                }
                contacts += phones.join(', ');
                Book.push(contacts);
            }
        }
        Book.sort();
        return Book;
    }
    if(cmd[0] == "REMOVE_PHONE"){
        var flag = 0;

        for(var i = 0; i < phoneBook.phones.length; i++){
            if(phoneBook.phones[i].indexOf(cmd[1]) != -1 &&
                (phoneBook.phones[i][phoneBook.phones[i].indexOf(cmd[1]) + cmd[1].length] === ',' || phoneBook.phones[i][phoneBook.phones[i].indexOf(cmd[1]) + cmd[1].length] === undefined)){
                flag = 1;
                phoneBook.phones[i] = phoneBook.phones[i].slice(0,phoneBook.phones[i].indexOf(cmd[1])) +
                    phoneBook.phones[i].slice(phoneBook.phones[i].indexOf(cmd[1]) + cmd[1].length + 1);
            }
        }

        if(flag === 1) {
            return true;
        }else{
            return false;
        }

    }

};
