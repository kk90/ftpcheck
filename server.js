
var express = require( 'express' );
var app = express();
app.set('view engine', 'ejs');
app.use(express.static("views/kickstartJS"));
var Client = require( 'ftp' );
var path="/pub/people/L.Jackowska/Lingwistyka";
// Configuration 



// Routes 
app.get( '/', function ( req, res ) {
    
    var c = new Client();
    c.on( 'ready', function () {
        c.list(path, function ( err, list ) {
            if ( err ) throw err;
           
           res.render('layout', { list: list,title:"Lista folderów" });
            c.end();
        });
    });
    var ftpServer={
        host:"zly.kis.p.lodz.pl",
        }


    c.connect(ftpServer);
});

app.listen( 80 ); 