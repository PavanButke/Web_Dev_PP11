const puppeteer = require("puppeteer");
const id = "hiwoba2823@revutap.com";
const pw = "Auto@1234";
const hashtag = "#NoReservation";
const hashtag2= "  #StopReservation";

async function twitoo(){
    let browser = await puppeteer.launch({
        headless : false ,
        defaultViewport : null,
        args :["--start-maximized"],
        slowMo : 200
       

    });

    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://twitter.com/?lang=en");
    await tab.waitForSelector('a[data-testid="loginButton"]',{visible:true});
    await tab.click('a[data-testid="loginButton"]');
    await tab.waitForTimeout(6000);
    await tab.waitForSelector('input[name="session[username_or_email]"]',{visible:true});
    await tab.type('input[name="session[username_or_email]"]',id)
    await tab.waitForTimeout(4000);
    await tab.type('input[name="session[password]"',pw);
    await tab.waitForTimeout(1000)
    await tab.click('div[data-testid="LoginForm_Login_Button"]');
    await tab.waitForTimeout(3000);
    
    await tab.waitForSelector('input[data-testid="SearchBox_Search_Input"]',{visible:true});
    await tab.type('input[data-testid="SearchBox_Search_Input"]',hashtag);
    await tab.waitForTimeout(300);
    await tab.type('input[data-testid="SearchBox_Search_Input"]',hashtag2);
    await tab.keyboard.press("Enter");
    await tab.waitForSelector('.css-1dbjc4n.r-16y2uox.r-6b64d0.r-cpa5s6',{visible: true});
    let allbtns= await tab.$$('.css-1dbjc4n.r-16y2uox.r-6b64d0.r-cpa5s6');
    let latestbtn= allbtns[1];
    await latestbtn.click();

    await tab.waitForSelector('[role="article"]')
    let link=await tab.$$('[role="article"]');
    let tweet= link[1];

    
    console.log(link);
    await tweet.click();
   

    
    


};
twitoo();

// async function addComment(browser , tab)
// {
   
//     let comLink= tab.click('div[data-testid="reply"]',{visible:true});

//     for(let i=0 ; i<allComLinks.length ; i++)
//     {
//         let comLink= allComLinks[i];
//         let newTab= await browser.newPage();
//         await addComToSingleArticle(newTab, comLink);

//     }
    

// }
// async function addComToSingleArticle(newTab , comLink)
// {

//     console.log(comLink);

//     await newTab.waitForTimeout(100);
//     console.log("Successful");
 
// }
