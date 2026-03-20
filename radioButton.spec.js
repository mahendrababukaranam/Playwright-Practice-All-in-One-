import {test,expect} from '@playwright/test'

let page

test.beforeAll('Application Launch', async ({browser})=>{

    page = await browser.newPage()

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Capture Radio Button Element
    await expect(page.locator("//p[normalize-space()='Radio Button']")).toBeVisible()
    await page.locator("//p[normalize-space()='Radio Button']").click()
    await expect(page.locator("//p[normalize-space()='Radio Button']")).toHaveText("Radio Button")

    await expect(page.locator("//h1[@class='m-0']")).toBeVisible()
    await expect(page.locator("//h1[@class='m-0']")).toHaveText("Radio Button Demo")

})

test('Click on button to get the selected value', async ({})=>{

    
    //Validate Heading
    await expect(page.locator("//p[normalize-space()='Click on button to get the selected value.']")).toBeVisible()
    await expect(page.locator("//p[normalize-space()='Click on button to get the selected value.']")).toHaveText("Click on button to get the selected value.")

    //Button
    await expect(page.locator("//button[normalize-space()='Show Selected Gender']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Show Selected Gender']")).toBeEnabled()
    await expect(page.locator("//button[normalize-space()='Show Selected Gender']")).toHaveText("Show Selected Gender")
    await page.locator("//button[normalize-space()='Show Selected Gender']").click()

    //Text before selecting gender
    await expect(page.locator("//p[@id='result']")).toBeVisible()
    await expect(page.locator("//p[@id='result']")).toHaveText("Please select a gender.")

    //Male Radio Button
    await expect(page.locator("//label[normalize-space()='Male']//input[@name='gender']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Male']//input[@name='gender']")).toBeEnabled()
    await expect(page.locator("//input[@name='gender'][@value='Male']")).toHaveValue("Male");

    //Select Gender Male
    await page.locator("//label[normalize-space()='Male']//input[@name='gender']").click()

    //Click on button
    await page.locator("//button[normalize-space()='Show Selected Gender']").click()

    //Text after selecting gender
    await expect(page.locator("//p[@id='result']")).toBeVisible()
    await expect(page.locator("//p[@id='result']")).toHaveText("You selected: Male")

    //Female Radio Button
    await expect(page.locator("//label[normalize-space()='Female']//input[@name='gender']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Female']//input[@name='gender']")).toBeEnabled()
    await expect(page.locator("//input[@name='gender'][@value='Female']")).toHaveValue("Female");

    //Select Gender Female
    await page.locator("//label[normalize-space()='Female']//input[@name='gender']").click()

    //Click on button
    await page.locator("//button[normalize-space()='Show Selected Gender']").click()

    //Text after selecting gender
    await expect(page.locator("//p[@id='result']")).toBeVisible()
    await expect(page.locator("//p[@id='result']")).toHaveText("You selected: Female")


await page.waitForTimeout(3000)
})

test('Disabled Radio Button', async ({})=>{

    //Validate Heading
    await expect(page.locator("//p[normalize-space()='Disabled Radio Button']")).toBeVisible()
    await expect(page.locator("//p[normalize-space()='Disabled Radio Button']")).toHaveText("Disabled Radio Button")

    //Disabled Radio button
    await expect(page.locator("input[@value='Disabled Radio Button'][disabled]")).toBeVisible()
    await expect(page.locator("input[@value='Disabled Radio Button'][disabled]")).toBeDisabled()
    await expect(page.locator("input[@value='Disabled Radio Button'][disabled]")).not.toBeChecked()
    
await page.waitForTimeout(3000)
})

test('Click on button to get the selected values from Gender and Age', async ({})=>{

    //Validate Heading
    await expect(page.locator("//p[contains(text(),'Click on button to get the selected values from Ge')]")).toBeVisible()
    await expect(page.locator("//p[contains(text(),'Click on button to get the selected values from Ge')]")).toHaveText("Click on button to get the selected values from Gender and Age")   
    
    //Show Selected Values Button
    await expect(page.locator("//button[normalize-space()='Show Selected Values']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Show Selected Values']")).toBeEnabled()
    await expect(page.locator("//button[normalize-space()='Show Selected Values']")).toHaveText("Show Selected Values")
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("Please select both gender and age group.")

    //Gender Title
    await expect(page.locator("//p[text()='Select Gender:']")).toBeVisible()
    await expect(page.locator("//p[text()='Select Gender:']")).toHaveText("Select Gender:")
    
    //Male Radio Button
    await expect(page.locator("//label[normalize-space()='Male']//input[@name='gender1']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Male']//input[@name='gender1']")).toBeEnabled()
    await expect(page.locator("//input[@name='gender1' and @value='Male']")).toHaveValue("Male")
    await expect(page.locator("//label[normalize-space()='Male']//input[@name='gender1']")).not.toBeChecked()

    await page.locator("//label[normalize-space()='Male']//input[@name='gender1']").click()

    //Age Title
    await expect(page.locator("//p[text()='Select Age Group:']")).toBeVisible()
    await expect(page.locator("//p[text()='Select Age Group:']")).toHaveText("Select Age Group:")

    //Age Radio Button
    await expect(page.locator("//input[@name='age1' and @value='Under 18']")).toBeVisible()
    await expect(page.locator("//input[@name='age1' and @value='Under 18']")).toBeEnabled()
    await expect(page.locator("//input[@value='Under 18']")).toHaveValue("Under 18")

    //Under 18 age
    await page.locator("//input[@name='age1' and @value='Under 18']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Male, Age Group =Under 18")

    //Under 18-35 age
    await page.locator("//input[@name='age1' and @value='18-35']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Male, Age Group =18-35")
     
     //Under 35+ age
    await page.locator("//input[@name='age1' and @value='35+']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Male, Age Group =35+")

    //********************************************************************* 
    //Female Radio Button
    await expect(page.locator("//label[normalize-space()='Female']//input[@name='gender1']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Female']//input[@name='gender1']")).toBeEnabled()
    await expect(page.locator("//input[@name='gender1' and @value='Female']")).toHaveValue("Female")
    await expect(page.locator("//label[normalize-space()='Female']//input[@name='gender1']")).not.toBeChecked()

    await page.locator("//label[normalize-space()='Female']//input[@name='gender1']").click()

    //Age Title
    await expect(page.locator("//p[text()='Select Age Group:']")).toBeVisible()
    await expect(page.locator("//p[text()='Select Age Group:']")).toHaveText("Select Age Group:")

    //Age Radio Button
    await expect(page.locator("//input[@name='age1' and @value='Under 18']")).toBeVisible()
    await expect(page.locator("//input[@name='age1' and @value='Under 18']")).toBeEnabled()
    await expect(page.locator("//input[@value='Under 18']")).toHaveValue("Under 18")

    //Under 18 age
    await page.locator("//input[@name='age1' and @value='Under 18']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Female, Age Group =Under 18")

    //Under 18-35 age
    await page.locator("//input[@name='age1' and @value='18-35']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Female, Age Group =18-35")
     
     //Under 35+ age
    await page.locator("//input[@name='age1' and @value='35+']").click()

    //Show Selected Values Button
    await page.locator("//button[normalize-space()='Show Selected Values']").click()

    //Text
    await expect(page.locator("#result3")).toHaveText("You selected: Gender = Female, Age Group =35+")



await page.waitForTimeout(3000)
})

test.only('Click on button to get the selected values from Gender and Age using loop', async ({}) => {

    // Heading
    const heading = page.locator("//p[contains(text(),'Click on button to get the selected values from Ge')]")
    await expect(heading).toBeVisible()
    await expect(heading).toHaveText("Click on button to get the selected values from Gender and Age")

    const showBtn = page.locator("//button[normalize-space()='Show Selected Values']")
    await expect(showBtn).toBeVisible()
    await expect(showBtn).toBeEnabled()
    await expect(showBtn).toHaveText("Show Selected Values")

    // Initial validation
    await showBtn.click()
    await expect(page.locator("#result3")).toHaveText("Please select both gender and age group.")

    // Data sets
    const genders = ["Male", "Female"]
    const ages = ["Under 18", "18-35", "35+"]

    // Loop through genders
    for (const gender of genders) {

        const genderRadio = page.locator(`//input[@name='gender1' and @value='${gender}']`)
        await expect(genderRadio).toBeVisible()
        await expect(genderRadio).toBeEnabled()
        await expect(genderRadio).not.toBeChecked()

        await genderRadio.click()

        // Loop through ages
        for (const age of ages) {

            const ageRadio = page.locator(`//input[@name='age1' and @value='${age}']`)
            await expect(ageRadio).toBeVisible()
            await expect(ageRadio).toBeEnabled()
            await expect(ageRadio).toHaveValue(age)

            await ageRadio.click()

            // Click button
            await showBtn.click()

            // Assertion
            await expect(page.locator("#result3")).toHaveText(`You selected: Gender = ${gender}, Age Group =${age}`)
        }
    }
})