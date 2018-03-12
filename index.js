//para  rodar node index.js
const puppeteer = require('puppeteer')
//para  ver  o navegador  
puppeteer.launch({headless: false}).then(async browser => {
  // Configuraçoes
  const config = {
      url: 'https://www.4devs.com.br/gerador_de_cpf'
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

  for (i = 0; i < 10; i++) { 
    var btn_cpf = await page.$("#bt_gerar_cpf");
    btn_cpf.click();
    await page.waitFor(2000);
    // => tipo uma função(){...}
    // pegar  valores de  campos 
    var txt_cpf = await page.evaluate((a) => document.querySelector("#texto_cpf").value);
    console.log(txt_cpf);
  }

  //crtl + c  fechar 
  //browser.close();
});