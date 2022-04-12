import { main } from "../../pages/main";

const fs = require('fs').promises;
const path = require('path');
const expectChai = require('chai').expect;
const readdirp = require('readdirp');
const axios = require('axios').default;

  describe('Проверка качества верстки', async () => {

    it('подготовка к запуску', async () => {
      let urlList = await JSON.parse(await  fs.readFile('././json/urlList.json', function (err) {
        if (err) throw err;
      }))
      let urlListSum = await (await urlList).length

      for (let i = 0; i < urlListSum; i++) {

        describe('Тест через валидатор HTML w3c', async () => {

          it('страница '+urlList[i].url, async () => {

              const response = await axios.get('http://validator.w3.org/nu/', {
                params: {
                  doc: urlList[i].url,
                  out: "json"
                }
              });
              const result = (await response).data.messages
              const numResult = await result.filter((i) => {
                return i.type === 'error' || i.type === 'non-document-error'
              });
          
              await expectChai(await numResult.length).to.equal(0);

          });
        });
      }
    });
  });


