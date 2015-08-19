###a promise-style of commonjs'require, such as:
```
    require('./foo').then(function(exports) {
        console.log(exports); //your commonjs module.exports
    });
```

###for example: 
``` 
    
    <script src="index.js"></script>

    <script>
        //make sure you are not in file path in order to prevent CORS
        require('test').then(function(exports) {
        console.log(exports.name); //'zank'
    });
    </script>
```