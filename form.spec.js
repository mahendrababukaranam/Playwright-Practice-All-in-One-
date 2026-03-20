import {test,expect} from '@playwright/test'
/*
test('Forms and Validation', async ({page})=>{

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Form link Validation
    await expect(page.locator("//p[normalize-space()='Form']")).toBeVisible()
    await expect(page.locator("//p[normalize-space()='Form']")).toBeEnabled()
    await expect(page.locator("//p[normalize-space()='Form']")).toHaveText("Form")

    //Move to Form link
    await page.locator("//p[normalize-space()='Form']").click()

    //Demo Text Validation
    await expect(page.locator("//h1[normalize-space()='Input form validations Demo']")).toBeVisible()
    await expect(page.locator("//h1[normalize-space()='Input form validations Demo']")).toHaveText("Input form validations Demo")

    //Heading/Title Validation
    await expect(page.locator("//p[text()='Forms and Validation']")).toBeVisible()
    await expect(page.locator("//p[text()='Forms and Validation']")).toHaveText("Forms and Validation")

    //First Name Field
    //Label
    await expect(page.locator("//label[normalize-space()='First Name:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='First Name:']")).toHaveText("First Name:")
    //Input Field
    await expect(page.locator("#firstname")).toBeVisible()
    await expect(page.locator("#firstname")).toBeEnabled()
    await expect(page.locator("#firstname")).toBeEditable()
    await page.locator("#firstname").fill("Mahendra")

    //Middle Name Field
    //Label
    await expect(page.locator("//label[normalize-space()='Middle Name:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Middle Name:']")).toHaveText("Middle Name:")
    //Input Field
    await expect(page.locator("#middlename")).toBeVisible()
    await expect(page.locator("#middlename")).toBeEnabled()
    await expect(page.locator("#middlename")).toBeEditable()
    await page.locator("#middlename").fill("Babu")

    //Last Name Field
    //Label
    await expect(page.locator("//label[normalize-space()='Last Name:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Last Name:']")).toHaveText("Last Name:")
    //Input Field
    await expect(page.locator("#lastname")).toBeVisible()
    await expect(page.locator("#lastname")).toBeEnabled()
    await expect(page.locator("#lastname")).toBeEditable()
    await page.locator("#lastname").fill("Karanam")

    //Email Field
    //Label
    await expect(page.locator("//label[normalize-space()='Email:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Email:']")).toHaveText("Email:")
    //Input Field
    await expect(page.locator("#email")).toBeVisible()
    await expect(page.locator("#email")).toBeEnabled()
    await expect(page.locator("#email")).toBeEditable()
    await page.locator("#email").fill("testmail@yopmail.com")

    //Password Field
    //Label
    await expect(page.locator("//label[normalize-space()='Password:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Password:']")).toHaveText("Password:")
    //Input Field
    await expect(page.locator("#password")).toBeVisible()
    await expect(page.locator("#password")).toBeEnabled()
    await expect(page.locator("#password")).toBeEditable()
    await page.locator("#password").fill("test@123")

    //Address Field
    //Label
    await expect(page.locator("//label[normalize-space()='Address:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Address:']")).toHaveText("Address:")
    //Input Field
    await expect(page.locator("#address")).toBeVisible()
    await expect(page.locator("#address")).toBeEnabled()
    await expect(page.locator("#address")).toBeEditable()
    await page.locator("#address").fill("1-1-20,Yousufguda Checkpost,Rahmath Nagar")

    //City Field
    //Label
    await expect(page.locator("//label[normalize-space()='City:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='City:']")).toHaveText("City:")
    //Input Field
    await expect(page.locator("#city")).toBeVisible()
    await expect(page.locator("#city")).toBeEnabled()
    await expect(page.locator("#city")).toBeEditable()
    await page.locator("#city").fill("Hyderabad")

    //State Field
    //Label
    await expect(page.locator("//label[normalize-space()='State:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='State:']")).toHaveText("State:")
    //Input Field
    await expect(page.locator("#states")).toBeVisible()
    await expect(page.locator("#states")).toBeEnabled()
    await expect(page.locator("#states")).toBeEditable()
    await page.locator("#states").fill("Telangana")

    //Pin Code Field
    //Label
    await expect(page.locator("//label[normalize-space()='Pin Code:']")).toBeVisible()
    await expect(page.locator("//label[normalize-space()='Pin Code:']")).toHaveText("Pin Code:")
    //Input Field
    await expect(page.locator("#pincode")).toBeVisible()
    await expect(page.locator("#pincode")).toBeEnabled()
    await expect(page.locator("#pincode")).toBeEditable()
    await page.locator("#pincode").fill("500045")

    //Submit Button
    await expect(page.locator("//button[normalize-space()='Submit']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Submit']")).toBeEnabled()
    await expect(page.locator("//button[normalize-space()='Submit']")).toHaveText("Submit")
    await page.locator("//button[normalize-space()='Submit']").click()
    
    //Form Submission Success Message
    await expect(page.locator("#message")).toBeVisible()
    await expect(page.locator("#message")).toHaveText("Form submitted successfully")
  
await page.waitForTimeout(3000)
})

test('Form and Validation using loop', async ({page})=>{

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Move to Form link
    await page.locator("//p[normalize-space()='Form']").click()

    const formData = {
        'First Name:': 'Mahendra',
        'Middle Name:': 'Babu',
        'Last Name:': 'Karanam',
        'Email:': 'testmail@yopmail.com',
        'Password:': 'test@123',
        'Address:': 'Hyderabad',
        'City:': 'Hyderabad',
        'State:': 'Telangana',
        'Pin Code:': '500045'
    }

    for (const label in formData) {
        await page.getByLabel(label).fill(formData[label])
    }

await page.waitForTimeout(3000)
})

test('Loop with Assertions', async ({page})=>{

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Move to Form link
    await page.locator("//p[normalize-space()='Form']").click()    

    const fields = ['#firstname','#middlename','#lastname','#email','#password','#address','#city','#states','#pincode']

    for (const selector of fields) {
        await expect(page.locator(selector)).toBeVisible()
        await expect(page.locator(selector)).toBeEditable()
        await expect(page.locator(selector)).toBeEnabled()
        
    }

await page.waitForTimeout(3000)    
})
*/

test('Loop with Assertions', async ({page})=>{

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Move to Form link
    await page.locator("//p[normalize-space()='Form']").click()    

    const formFields = [
        ['#firstname', 'Mahendra'],
        ['#middlename', 'Babu'],
        ['#lastname', 'Karanam'],
        ['#email', 'testmail@yopmail.com'],
        ['#password', 'test@123'],
        ['#address', 'Hyderabad'],
        ['#city', 'Hyderabad'],
        ['#states', 'Telangana'],
        ['#pincode', '500045']
    ]

    for (const [selector, value] of formFields) {

        const locator = page.locator(selector);

        // Assertions
        await expect(locator).toBeVisible();
        await expect(locator).toBeEditable();
        await expect(locator).toBeEnabled();

        // Fill
        await locator.fill(value);

        // Validation
        await expect(locator).toHaveValue(value);
    }

    // Submit
    await page.locator("//button[normalize-space()='Submit']").click()
    
    //Form Submission Success Message
    await expect(page.locator("#message")).toBeVisible()
    await expect(page.locator("#message")).toHaveText("Form submitted successfully")

await page.waitForTimeout(3000)    
})