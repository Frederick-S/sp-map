var map = require('../index.js');
var queryString = require('query-string');
var contextHelper = require('sp-context-helper');

var hostWebUrl = queryString.parse(location.search).SPHostUrl;
var contextWrapper = contextHelper(hostWebUrl, true);
var web = contextWrapper.web;
var webs = web.get_webs();
var clientContext = contextWrapper.clientContext;

clientContext.load(webs);
clientContext.executeQueryAsync(function (sender, args) {
    var titles = map(webs, function (current, index, collection) {
        return current.get_title();
    });

    for (var i = 0, length = titles.length; i < length; i++) {
        $('#message').append('<li>Index ' + i + ': ' + titles[i] + ' </li>');
    }
}, function (sender, args) {
    alert(args.get_message());
});
