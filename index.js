import puppeteer from 'puppeteer';

(async() => {
    try {
        // browser open with GUI
        const browser = await puppeteer.launch({headless: false})

        // open a new tab
        const page = await browser.newPage();

        // go to following url
        await page.goto('https://google.com');

        // write following text in input box
        await page.type('.gLFyf', 'Israel, the terrorist occupier');

        // press enter
        page.keyboard.press('Enter');

        // load all selector
        await page.waitForSelector('a');


        // define selector from which we want to extract text
        const selectorString = '.LC20lb';

        // wait until the element is visible
        await page.waitForSelector(selectorString, {visible: true});

        // get all elements having the same selector
        // define above and print related text

        const searchResult = await page.$$eval(selectorString,
                els =>
                                els.map( e =>
                                    ({title: e.innerHTML})
                                )
                            );

        console.log(searchResult);
        await browser.close();

    }
    catch (err) {
        console.log(err.message);
    }

})()