# sp-map

[![Greenkeeper badge](https://badges.greenkeeper.io/Frederick-S/sp-map.svg)](https://greenkeeper.io/)
Map function for SharePoint object collection.

## Installation
```
npm install sp-map --save
```

## Usage
```js
var map = require('sp-map');

var titles = map(webs, function (current, index, collection) {
    return current.get_title();
});
```

## License
MIT.
