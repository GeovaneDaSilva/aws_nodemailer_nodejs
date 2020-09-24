
//=====================================
// CONFIGURANDO URL GLOBAL PORTO HEROKU                            
//=====================================

process.env.PORT = process.env.PORT || 3000;


//=====================================
// CONFIGURANDO URL GLOBAL DB                              
//=====================================
///
let urlDB;
process.env.NODE_ENV === process.env.NODE_ENV || 'dev';

if(process.env.NODE_ENV === 'dev'){
    urlDB =  process.env.MONGO_URI
    
}else{

    urlDB = process.env.MONGO_URI; //
    urlDB = 'mongodb://localhost:27017/testsitpr'
    

}

process.env.URLDB = urlDB;


//=====================================
// CONFIGURANDO URL SEED TOKE                             
//=====================================

// Token vencimento 100 horas

process.env.expiresIn = '1000h';

//SEED

process.env.SEED = process.env.SEED || 'test'

//Auth config nodemailer

process.env.HOST = process.env.HOST
process.env.user = process.env.user
process.env.pass = process.env.pass

process.env.URL_SITE = process.env.URL_SITE || 'http://localhost:3000'


 


