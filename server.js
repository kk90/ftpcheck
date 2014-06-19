
var express = require( 'express' );

var app = express();

var Client = require( 'ftp' );
var path="/pub/people/L.Jackowska/Lingwistyka";
// Configuration 


// Routes 
app.get( '/', function ( req, res ) {

    var c = new Client();
    c.on( 'ready', function () {
        c.list(path, function ( err, list ) {
            if ( err ) throw err;
           
           list.forEach(function(element){
             if(element.name==="Test results (studia_dzienne)"){
                if(element.date.getDay()==5){
                    res.send("BRAK wyników");
                    }else{
                        res.send("WYNIKI")
                        }

                  }
               
               });
           
            c.end();
        });
    });
    var ftpServer={
        host:"zly.kis.p.lodz.pl",
        }


    c.connect(ftpServer);
});

app.listen( 80 ); 