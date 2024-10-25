const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}



module.exports = {
SESSION_ID: process.env.SESSION_ID || '1rFyGKAL#LTtgIj9pvZ-n15Si1KEOiSGuNQqNgiaKHIsA7R19XXE',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech'
MAX_SIZE: 500, ',
LANG: process.env.BOT_LANG || 'EN' ,
PREFIX: process.env.PREFIX || '.',
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 300,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
LOGO: process.env.LOGO || `https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg` 
};
