const puppeteer = require("puppeteer");
const id = "minape7713@flmcat.com";
const pw = "12345p";

async function ig(){
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport: null,
        args:["--start-maximized"],
    });

    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector(".-MzZI ._2hvTZ.pexuQ.zyHYP",{visible:true});
    let inputs= await tab.$$(".-MzZI ._2hvTZ.pexuQ.zyHYP");
    let username= inputs[0];
    let password= inputs[1];
    await username.type(id);
    await password.type(pw);
    await tab.click(".sqdOP.L3NKy.y3zKF");
    await tab.waitForSelector(".LWmhU._0aCwM  .XTCLo.x3qfX" ,{visible:true});
    await tab.type(".LWmhU._0aCwM  .XTCLo.x3qfX","keanureeves");
    await tab.waitForTimeout(2000);
    await tab.click(".sqdOP.L3NKy.y3zKF");
    await tab.keyboard.press("Enter")
    await tab.waitForSelector(".v1Nh3.kIKUG._bz0w",{visible: true});
    await tab.click(".v1Nh3.kIKUG._bz0w");
    
    let count=4228;
    while(count != 0){
    await tab.waitForSelector('span >[aria-label="Like"]');
    await tab.click('span >[aria-label="Like"]');
    await tab.click('._65Bje.coreSpriteRightPaginationArrow');
    count--;
    }

};
ig();
