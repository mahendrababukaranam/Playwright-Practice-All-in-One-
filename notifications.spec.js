import {test,expect} from '@playwright/test'

test('Notification Demo', async ({page})=>{

    //Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Page Title Validation
    await expect(page.title).toBe("Notification Demo | QA Automation Labs")

    //Capture Notifications Element
    await expect(page.locator("//p[normalize-space()='Notifications']")).toBeVisible()
    await page.locator("//p[normalize-space()='Notifications']").click()
    await expect(page.locator("//p[normalize-space()='Notifications']")).toHaveText("Notifications")

    //Demo Text Validation
    await expect(page.locator("//h1[@class='m-0']")).toBeVisible()
    await expect(page.locator("//h1[@class='m-0']")).toHaveText("Notification Demo")

    //Title/Heading Validation
    await expect(page.locator("//p[normalize-space()='Notification']")).toBeVisible()
    await expect(page.locator("//p[normalize-space()='Notification']")).toHaveText("Notification")
    
    //Success Message Button
    await expect(page.locator("//button[normalize-space()='Success Message']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Success Message']")).toBeEnabled()
    await expect(page.locator("//button[normalize-space()='Success Message']")).toHaveText("Success Message")
    await page.locator("//button[normalize-space()='Success Message']").click()

    //Success Message Notification
    await expect(page.locator("#toastsContainerTopRight")).toBeVisible()

    //Title
    await expect(page.locator("//div[@id='toastsContainerTopRight']//strong[@class='mr-auto']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//strong[@class='mr-auto']")).toHaveText("Notification Title")

    //Sub-title
    await expect(page.locator("//div[@id='toastsContainerTopRight']//small[normalize-space()='Notification Subtitle']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//small[normalize-space()='Notification Subtitle']")).toHaveText("Notification Subtitle")

    //Body
    await expect(page.locator("//div[@id='toastsContainerTopRight']//div[@class='toast-body']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//div[@class='toast-body']")).toHaveText("Notification Body:- You Notification Body Goes Here.")

    //Close Notification
    await page.locator("//div[@id='toastsContainerTopRight']//button[@aria-label='Close']").click()
//*************************************************************************************************
    //Success Message Button
    await expect(page.locator("//button[normalize-space()='Info Message']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Info Message']")).toBeEnabled()
    await expect(page.locator("//button[normalize-space()='Info Message']")).toHaveText("Info Message")
    await page.locator("//button[normalize-space()='Info Message']").click()

    //Info Message Notification
    await expect(page.locator("#toastsContainerTopRight")).toBeVisible()

    //Title
    await expect(page.locator("//div[@id='toastsContainerTopRight']//strong[@class='mr-auto']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//strong[@class='mr-auto']")).toHaveText("Notification Title")

    //Sub-title
    await expect(page.locator("//div[@id='toastsContainerTopRight']//small[normalize-space()='Notification Subtitle']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//small[normalize-space()='Notification Subtitle']")).toHaveText("Notification Subtitle")

    //Body
    await expect(page.locator("//div[@id='toastsContainerTopRight']//div[@class='toast-body']")).toBeVisible()
    await expect(page.locator("//div[@id='toastsContainerTopRight']//div[@class='toast-body']")).toHaveText("Notification Body:- You Notification Body Goes Here.")

    //Close Notification
    await page.locator("//div[@id='toastsContainerTopRight']//button[@aria-label='Close']").click()

await page.waitForTimeout(3000)
})


test.only('Notification Demo through loop', async ({ page }) => {

    // Application Launch
    await page.goto("https://testing.qaautomationlabs.com/index.php")

    //Home/Dashboard Page Title Validation
    await expect(page).toHaveTitle("Home | QA Automation Labs")

    // Navigate to Notifications
    const notificationMenu = page.locator("//p[normalize-space()='Notifications']")
    await expect(notificationMenu).toBeVisible()
    await notificationMenu.click()
    await expect(notificationMenu).toHaveText("Notifications")

    //Page Title Validation
    await expect(page).toHaveTitle("Notification Demo | QA Automation Labs")

    // Page Validation
    await expect(page.locator("//h1[@class='m-0']")).toHaveText("Notification Demo")
    await expect(page.locator("//p[normalize-space()='Notification']")).toHaveText("Notification")

    // Buttons to test
    const messageTypes = ["Success Message", "Info Message", "Primary Message", "Error Message"]

    // Loop through each message type
    for (const message of messageTypes) {

        const button = page.locator(`//button[normalize-space()='${message}']`)

        // Button Validation
        await expect(button).toBeVisible()
        await expect(button).toBeEnabled()
        await expect(button).toHaveText(message)

        // Click Button
        await button.click()

        // Notification Container
        const toast = page.locator("#toastsContainerTopRight").last()
        await expect(toast).toBeVisible()

        // Title
        //last() is usded to pick latest/recent/last opened notification
        const title = toast.locator("//strong[@class='mr-auto']").last()
        await expect(title).toBeVisible()
        await expect(title).toHaveText("Notification Title")

        // Subtitle
        const subtitle = toast.locator("//small[normalize-space()='Notification Subtitle']").last()
        await expect(subtitle).toBeVisible()
        await expect(subtitle).toHaveText("Notification Subtitle")

        // Body
        const body = toast.locator("//div[@class='toast-body']").last()
        await expect(body).toBeVisible()
        await expect(body).toHaveText("Notification Body:- You Notification Body Goes Here.")

        // Close Notification
        await toast.locator("//button[@aria-label='Close']").last().click()
    }

    await page.waitForTimeout(3000)
})