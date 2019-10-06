const appConfig = require('./../config/appConfig');

let requestIpLogger = (req, res, next) => {

    let remoteIp = req.connection.remoteAddress + "://" +req.connection.remotePort;
    let realIp = req.headers['X-REAL-IP'];

    console.log(req.method+" Request Made from "+ remoteIp+" for route "+req.originalUrl);

    if(req.method === 'OPTIONS'){
        console.log('!OPTIONS');

        var headers = {};
        //IE8 does not allow domains to be specified, just the *
        //headers["Access-Control-Allow-Origin"] = req.headers.origin;

        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Allow-Max-Age"] = "86400"; //24 hours
        headers["Access-Control-Allow-Headers"] = " X-Requested-With, X-Http-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
        res.send();

    }else{

        //enable or disable cors here
        res.header("Access-Control-Allow-Origin", appConfig.allowedCorsOrigin);
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        //end cors here

        next();
    }
}

module.exports ={
    logIp: requestIpLogger
}