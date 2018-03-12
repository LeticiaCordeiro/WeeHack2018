//npm init ->  quando  for  criar um novo projeto criar o package.json
//para  rodar node index.js
const puppeteer = require('puppeteer')
//para  ver  o navegador  
puppeteer.launch({headless: false}).then(async browser => {
  // Configuraçoes
  const config = {
      url:'https://goo.gl/N93DP1'
  };

  // Define elemento principal
  const page = await browser.newPage();
  await page.goto(config.url), {
      waitUntil: 'domcontentloaded'
  };
  page.setViewport({
      width: 920,
      height: 950
  });

  
    var carVingadores = await page.$("#board > div:nth-child(1) > div > div.list-cards.u-fancy-scrollbar.u-clearfix.js-list-cards > a:nth-child(1) > div.list-card-details > span");
    carVingadores.click();
    console.log("vingadores");
    await page.waitFor(2000);
    
    // => tipo uma função(){...} - funciona como function e return ao mesmo tempo.
    // pegar  valores de  campos 
    var listaHerois = await page.$$eval("#classic > div.window-overlay > div > div > div > div.window-main-col > div.checklist-list.window-module.js-checklist-list.js-no-higher-edits > div > div.checklist-items-list.js-checklist-items-list.js-no-higher-edits > div:nth-child(3)", el => el.length);

    console.log(listaHerois);
  
  //crtl + c  fechar 
  //browser.close();
});