var each = require('sp-each');

module.exports = function (collection, iteratee, context) {
    var values = [];

    each(collection, function (current, index, collection) {
        values.push(iteratee.call(context, current, index, collection));
    });

    return values;
};
