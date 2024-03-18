const info = require("./information");

const  cowsay  =  require ( "cowsay" ) ;

console . log ( cowsay . say ( { 
    text : "Je suis " + `${info.name}`+" de " +`${info.campus}` , 
    e : "oO" , 
    T : "U " 
} ) ) ;

