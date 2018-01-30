'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {
    // Ваша невероятная магия здесь
    if ((name === '') || (phone === '') || (email === '')) {
        return;
    }

    var person = {
        name: name,
        phone: phone,
        email: email
    };

    phoneBook.push(person);
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
    var searchArray = [];
    for (var i = 0; i < phoneBook.length; i++) {
        scanProperties(i, searchArray, query);
    }
    // Ваша удивительная магия здесь
//    console.log(searchArray);
    for (var j = 0; j < searchArray.length; j++) {
        var line = searchArray[j].name + ', ' + searchArray[j].phone + ', ' + searchArray[j].email;
        console.log(line);
    }

};

/*
   Функция удаления записи в телефонной книге.
*/

var amountDeletedElements = 0;
module.exports.remove = function remove(query) {

    for (var i = 0; i < phoneBook.length; i++) {
        delProperties(i, query);
    }

    if (amountDeletedElements === 1) {
        console.log('Удален ' + amountDeletedElements + ' контакт');
    } else if ((amountDeletedElements >= 2) && (amountDeletedElements <= 4)) {
        console.log('Удалено ' + amountDeletedElements + ' контакта');
    } else {
        console.log('Удалено ' + amountDeletedElements + ' контактов');
    }


};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {
    tableTop();

    for (var i = 0; i < phoneBook.length; i++) {
        var line = symb(9474);
        line = line + ' ' + phoneBook[i].name + spaces(maxNameLength(), phoneBook[i].name.length) + symb(9474);
        line = line + ' ' + phoneBook[i].phone + spaces(maxPhoneLength(), phoneBook[i].phone.length) + symb(9553);
        line = line + ' ' + phoneBook[i].email + spaces(maxEmailLength(), phoneBook[i].email.length) + symb(9474);
        console.log(line);
    }

    tableBottom();
};

// phoneBook.add('Сергей', '7 999 6667778', 'gs@example.com');
// phoneBook.add('Сергей', '7 999 6667778', 'gs@example.com');
// phoneBook.add('Сергей 2', '999 4433444', 'gs@example.com');
// phoneBook.add('Олег', '+7 (999) 777-7-777', 'just7@yandex-team.ru');
// phoneBook.push(['Name', 'tel', 'email']);
// phoneBook.push(['Name2', 'tel2', 'email2']);

function horizLine(width) {
    var line = '';
    for (var i = 0; i < width; i++) {
        line = line + symb(9472);
    }

    return line;
}

function symb(codeValue) {
    return String.fromCharCode(codeValue);
}

function maxNameLength() {
    var maxLength = '0';
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.length > maxLength) {
            maxLength = phoneBook[i].name.length;
        }
    }

    return maxLength + 1;
}

function maxPhoneLength() {
    var maxLength = '0';
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].phone.length > maxLength) {
            maxLength = phoneBook[i].phone.length;
        }
    }

    return maxLength + 1;
}

function maxEmailLength() {
    var maxLength = '0';
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].email.length > maxLength) {
            maxLength = phoneBook[i].email.length;
        }
    }

    return maxLength + 1;
}

function tableTop() {
    /*var firstLine = symb(9484) + horizLine(maxNameLength() + 1) + symb(9516);
    firstLine = firstLine + horizLine(maxPhoneLength() + 1) + symb(9573);
    firstLine = firstLine + horizLine(maxEmailLength() + 1) + symb(9488) + '\n';

    var secondLine = symb(9474) + ' Имя' + spaces(maxNameLength(), 3) + symb(9474);
    secondLine = secondLine + ' Телефон' + spaces(maxPhoneLength(), 7) + symb(9553);
    secondLine = secondLine + ' email' + spaces(maxEmailLength(), 5) + symb(9474) + '\n';

    var thirdLine = symb(9500) + horizLine(maxNameLength() + 1) + symb(9532);
    thirdLine = thirdLine + horizLine(maxPhoneLength() + 1) + symb(9579);
    thirdLine = thirdLine + horizLine(maxEmailLength() + 1) + symb(9508);
    */
    var line = symb(9484) + horizLine(maxNameLength() + 1) + symb(9516);
    line = line + horizLine(maxPhoneLength() + 1) + symb(9573);
    line = line + horizLine(maxEmailLength() + 1) + symb(9488) + '\n';
    line = line + symb(9474) + ' Имя' + spaces(maxNameLength(), 3) + symb(9474);
    line = line + ' Телефон' + spaces(maxPhoneLength(), 7) + symb(9553);
    line = line + ' email' + spaces(maxEmailLength(), 5) + symb(9474) + '\n';
    line = line + symb(9500) + horizLine(maxNameLength() + 1) + symb(9532);
    line = line + horizLine(maxPhoneLength() + 1) + symb(9579);
    line = line + horizLine(maxEmailLength() + 1) + symb(9508);

    console.log(line);

//    console.log(firstLine + secondLine + thirdLine);
//    console.log(secondLine);
//    console.log(thirdLine);
}

function tableBottom() {
    var bottomLine = symb(9492) + horizLine(maxNameLength() + 1) + symb(9524);
    bottomLine = bottomLine + horizLine(maxPhoneLength() + 1) + symb(9576);
    bottomLine = bottomLine + horizLine(maxEmailLength() + 1) + symb(9496);

    console.log(bottomLine);
}

function spaces(maxSpacesAmount, reduceAmount) {
    var spacesAmount = maxSpacesAmount - reduceAmount;
    var line = '';
    for (var i = 0; i < spacesAmount; i++) {
        line = line + ' ';
    }

    return line;
}

function scanProperties(item, arrayName, queryText) {
    for (var key in phoneBook[item]) {
        if (phoneBook[item][key].indexOf(queryText) >= 0) {
            arrayName.push(phoneBook[item]);
            break;
        }
    }
}

function delProperties(item, queryText) {
    for (var key in phoneBook[item]) {
        if (phoneBook[item][key].indexOf(queryText) >= 0) {
//            console.log(phoneBook[item]);
            phoneBook.splice(item, 1);
            item--;
            amountDeletedElements++;
            break;
        }
    }
}
