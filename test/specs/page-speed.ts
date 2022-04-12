import { main } from "../../pages/main";
import { pageSpeed } from "../../pages/pageSpeed";

const fs = require('fs').promises;
const path = require('path');
const expectChai = require('chai').expect;
const readdirp = require('readdirp');
const axios = require('axios').default;

  describe('Проверка показателей pagespeed', async () => {

    it('подготовка к запуску', async () => {
      let urlList = await JSON.parse(await  fs.readFile('././json/urlList.json', function (err) {
        if (err) throw err;
      }))
      let urlListSum = await (await urlList).length

      for (let i = 0; i < urlListSum; i++) {

        describe('Тест скорости по pagespeed', async () => {

          it('страница '+urlList[i].url, async () => {
           
              const response = await axios.get('https://www.googleapis.com/pagespeedonline/v5/runPagespeed', {
                params: {
                  url: urlList[i].url,
                  key: "AIzaSyDXHTtxMVvVqFzEQnqYrDr3tAUwnDG2WS4",
                  category: "performance",
                  strategy: "mobile"
                }
              });
              const lighthouse = (await response).data.lighthouseResult

              const performance = lighthouse.categories.performance.score * 100
              const firstContentfulPaint = await Number((await (await (lighthouse.audits['first-contentful-paint'].displayValue)).split('s'))[0])
              const speedIndex = await Number((await (await (lighthouse.audits['speed-index'].displayValue)).split('s'))[0])
              const largestContentfulPaint = await Number((await (await (lighthouse.audits['largest-contentful-paint'].displayValue)).split('s'))[0])
              const totalBlockingTime = await Number(await ((await (await (lighthouse.audits['total-blocking-time'].displayValue)).split('ms'))[0]).replace(',','.'))
              const interactive = await Number((await (await (lighthouse.audits['interactive'].displayValue)).split('s'))[0])
              const cumulativeLayoutShift = await Number((await (await (lighthouse.audits['cumulative-layout-shift'].displayValue)).split('s'))[0])
              console.log(performance);
              
              await expectChai(await pageSpeed.checkYellowValue(performance, firstContentfulPaint, speedIndex, largestContentfulPaint, totalBlockingTime, interactive, cumulativeLayoutShift), 'Показатель скорости = '+performance).to.be.true;
    
          });
        });
      }
    });
});


