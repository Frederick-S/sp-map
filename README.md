# sp-map
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
