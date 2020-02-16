const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('./../../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(90000);

beforeAll(() => {
  return client.init().url('http://localhost:8080/admin#/login');
});

test('На странице есть кнопка "Авторизоваться"', () => {
  return client
    .isExisting('.basic-button')
    .then((browsers) => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
    .screenshot()
    .then((screenshots) => {
      for (const browserName in screenshots) {
        fs.writeFileSync(`./screenshots/login_form_${browserName}.png`, screenshots[browserName].value, 'base64');
      }
    });
});

afterAll(() => {
  return client.end();
});
