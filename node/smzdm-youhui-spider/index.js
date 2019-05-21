const request = require('request');
const cheerio = require('cheerio')

request('https://www.smzdm.com/youhui/', (err, res) => {
    if(!err) {
        // console.log(res.body);
        // 要不要解析 html entity
        const $ = cheerio.load(res.body, {
            decodeEntities: false
        })
        $('.list.list_preferential').each(function() {
            let title = $('.itemName a',this).html();
            title = title.replace(/<.*>.*<\/.*>/g, '');
            const price = $('.listTitle .red',this).text();
            const img = $('.picLeft img',this).attr('src');
            const desc = $('.lrInfo p',this).text().trim();
            const sponsor = $('.mall',this).text();
            console.log({
                title,price,img,desc,sponsor
            });
        })
    }
})