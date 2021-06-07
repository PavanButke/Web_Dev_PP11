const puppeteer = require("puppeteer");
const id= "kedekod344@sc2hub.com";
const pw=  "123400";
const challenges = require("./Challenge");
async function login(){
    let browser = await puppeteer.launch({headless: false ,
        defaultViewport: null,
        args:["--start-maximized"],
        
    });

    let pages= await browser.pages();
    tab=pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type('#input-1',id);
    await tab.type('#input-2',pw);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled")
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]',{visible:true});


    await tab.waitForTimeout(5000);
    await tab.click('div[data-analytics="NavBarProfileDropDown"]');
    let element =await tab.$('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await element.click();
    await tab.waitForSelector('.nav-tabs.nav.admin-tabbed-nav li', {visible: true});
    let bothLi= await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    let select2= bothLi[1];
    await select2.click();
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right",{visible: true});
    let challBtn = await tab.$(".btn.btn-green.backbone.pull-right");
    let challLink = await tab.evaluate(function(elem){ return elem.getAttribute("href")}, challBtn);

    let Link ="https://www.hackerrank.com"+challLink;
   
    for(let i=0 ; i<challenges.length ; i++){
       await addQues(browser, Link , challenges[i]);
    }
};
login();   

async function addQues(browser, Link , challenge){
    let newTab = await browser.newPage()
    await newTab.goto(Link);

    let challengeName = challenge["Challenge Name"];
    let description = challenge["Description"];
    let problemStatement= challenge["Problem Statement"];
    let inputFormat = challenge["Input Format"];
    let constraints= challenge["Constraints"];
    let outputFormat= challenge["Output Format"];
    let tags= challenge["Tags"];

    await newTab.waitForTimeout(4000);
    await newTab.type('#name', challengeName);
    await newTab.type('#preview', description);
    await newTab.type('#problem_statement-container .CodeMirror textarea' , problemStatement);
    await newTab.type('#input_format-container .CodeMirror textarea' , inputFormat);
    await newTab.type('#constraints-container .CodeMirror textarea' , constraints);
    await newTab.type('#output_format-container .CodeMirror textarea' , outputFormat);
    await newTab.type('#tags_tag' , tags);
    await newTab.keyboard.press("Enter");
    await newTab.click('.save-challenge.btn.btn-green');
    await newTab.waitForTimeout(3000);
    await newTab.close();
}