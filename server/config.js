exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://dev:dakotaandthien@ds137139.mlab.com:37139/recipedia';
