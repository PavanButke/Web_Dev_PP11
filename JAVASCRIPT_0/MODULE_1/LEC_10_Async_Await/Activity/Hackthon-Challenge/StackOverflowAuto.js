
const puppeteer = require("puppeteer");
const id = "bonapet643@edmondpt.com";
const pw = "Test@1234";
let queLine;
async function login(){
    let browser = await puppeteer.launch()
    {
        browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
             slowMo : 150
           
            

    });

    let pages= await browser.pages();
    let tab= pages[0];
    
    await tab.goto('https://stackoverflow.com/users/login');
  
    
    await tab.type('input[id="email"]',id);
    await tab.type('input[id="password"]',pw);

    await tab.click('.grid--cell.s-btn.s-btn__primary');
    await tab.waitForSelector('a[id="nav-questions"]',{visible: true});
    await tab.click('a[id="nav-questions"]');
    await tab.waitForTimeout(6000);
    await tab.waitForSelector(".grid--cell.s-btn.s-btn__primary.js-accept-cookies.js-consent-banner-hide",{visible: true});
    await tab.click(".grid--cell.s-btn.s-btn__primary.js-accept-cookies.js-consent-banner-hide")
    await tab.waitForSelector(".s-btn.s-btn__filled.s-btn__sm.s-btn__icon.ws-nowrap",{visible: true});
    await tab.click(".s-btn.s-btn__filled.s-btn__sm.s-btn__icon.ws-nowrap");
    
    // await tab.click(".sm:d-none.svg-icon.iconGear");
    await tab.waitForSelector('input[value="MostFrequent"]',{visible: true});
    await tab.click('input[value="MostFrequent"]');
    await tab.type('.s-input.js-tageditor-replacing',"Java") //You can write any tag in place of Java
    // await tab.click('.grid.gs4.gsx.fl1 ');
    await tab.click('.grid.gs4.gsx.fl1 button[type="submit"] ');
    
    await QueList(browser , tab);



}
};
login();

async function QueList(browser, tab)
{
    await tab.waitForSelector('.summary h3 a',{visible: true});
    let allATags= await tab.$$('.summary h3 a');

    let allQuesPage= [];
    for(let i=0 ; i<allATags.length ; i++)
    {
        let Que= await tab.evaluate( function(elem) {return elem.getAttribute("href"); } , allATags[i])
        Que= "https://www.stackoverflow.com"+Que ;
        allQuesPage.push(Que);
    }

  
    for(let i=0 ; i<allQuesPage.length ;i++)
    {
        let Que = allQuesPage[i];
        let newTab= await browser.newPage();
        
        await searchYtb(newTab , Que , browser);
        
        //console.log(i);

        if(i==10)
        {
            break;
        }
       
    searchYtb(newTab, Que , browser);

    }
    await tab.waitForTimeout(5000);
    // await QueList(browser, tab);

}

async function searchYtb(newTab, Que , browser)
{
   
   await newTab.goto(Que);

   await newTab.waitForTimeout(3000);

 //copy 
  await copy(newTab , browser);

  //searchYtb
  let extraTab = await browser.newPage();

  await search( extraTab );

  await newTab.close();
}

async function copy(newTab , browser )
{
 await newTab.waitForSelector(['h1[itemprop="name"]']);
 let OriLink= await newTab.$$('h1[itemprop="name"]');
 let qTextAll= [];
 for(let i=0 ; i< OriLink.length ;i++)
 {  
  
    let qText=  await newTab.evaluate(function(elem){ return elem.textContent ;}, OriLink[i]);
   
    
     qTextAll.push(qText);
   
 }   


queLine=qTextAll;
//console.log(queLine);
 
}

async function search(extraTab)
{

    await extraTab.goto("https://www.youtube.com/");
    
    await extraTab.waitForSelector('input[id="search"]',{visible: true});
 
    await extraTab.type('input[id="search"]',queLine);
    await extraTab.waitForTimeout(3000);
    await extraTab.click('button[id="search-icon-legacy"]');
    await extraTab.waitForSelector('a[id="video-title"]',{visible:true});
    let allLinks = await extraTab.$$('a[id="video-title"]');
    let firstLink = allLinks[1];
    await firstLink.click();
    
    await extraTab.waitForSelector('button[class="ytp-size-button ytp-button"]',{visible: true});
    await extraTab.click('button[class="ytp-size-button ytp-button"]');
    await extraTab.waitForTimeout(5000);
    // await extraTab.waitForSelector('button[class="ytp-ad-skip-button ytp-button"]',{visible: true});
    // await extraTab.click('button[class="ytp-ad-skip-button ytp-button"]');
    await extraTab.waitForTimeout(10000);
    await extraTab.close();

}

