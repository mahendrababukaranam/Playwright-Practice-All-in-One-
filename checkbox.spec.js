import { test, expect } from "@playwright/test";

let page;

test.beforeAll("Checkbox menu Link", async ({ browser }) => {
  page = await browser.newPage();

  //Application Launch
  await page.goto("https://testing.qaautomationlabs.com/index.php")

  //Capture Checkbox menu element
  await expect(page.locator("//a[text()='CheckBox']")).toBeVisible()
  await page.locator("//a[text()='CheckBox']").click()
  await expect(page.locator("//a[normalize-space()='CheckBox']")).toHaveText("CheckBox")

  await expect(page.locator("//h1[@class='m-0']")).toBeVisible()
  await expect(page.locator("//h1[@class='m-0']")).toHaveText("Checkbox Demo")

})

test("Single Checkbox", async ({}) => {

  //Single Checkbox
  await expect(page.locator("//p[normalize-space()='Single Checkbox Demo']")).toBeVisible()
  await expect(page.locator("//p[normalize-space()='Single Checkbox Demo']")).toHaveText("Single Checkbox Demo")

  //Checkbox
  await expect(page.locator("//input[@id='myCheckbox']")).toBeVisible()
  await expect(page.locator("//input[@id='myCheckbox']")).toBeEnabled()
  await expect(page.locator("//label[normalize-space()='Check me!']")).toHaveText(" Check me!")
  //await expect(page.locator('label')).toHaveText('Check me!')

  await page.locator("//input[@id='myCheckbox']").click()
  await expect(page.locator("//input[@id='myCheckbox']")).toBeChecked()

  await expect(page.locator("//div[@id='message']")).toBeVisible()
  await expect(page.locator("//div[@id='message']")).toHaveText("checked")

  await page.waitForTimeout(3000)
});

test("Disabled Checkbox Demo", async ({}) => {
  await expect(page.locator("//p[normalize-space()='Disabled Checkbox Demo']")).toBeVisible()
  await expect(page.locator("//p[normalize-space()='Disabled Checkbox Demo']")).toHaveText("Disabled Checkbox Demo")

  //Checkbox
  await expect(page.locator("//label[normalize-space()='Enable Checkbox 1']")).toBeVisible()
  await expect(page.locator("//label[normalize-space()='Enable Checkbox 1']")).toHaveText(" Enable Checkbox 1")

  await expect(page.locator("#chk1")).toBeEnabled()
  await page.locator("#chk1").click()
  await expect(page.locator("#chk1")).toBeChecked()

  //Disabled Checkbox
  await expect(page.locator("//label[normalize-space()='Disable Checkbox 3']")).toBeVisible()
  await expect(page.locator("//label[normalize-space()='Disable Checkbox 3']")).toHaveText(" Disable Checkbox 3")

  await expect(page.locator("#chk3")).toBeVisible()
  await expect(page.locator("#chk3")).toBeDisabled()
  await expect(page.locator("#chk3")).not.toBeChecked()

  await page.waitForTimeout(3000)
})

test("Multiple Checkbox Demo Approach-1", async ({}) => {
  
   const checkboxes = page.locator(".myCheckbox")
   const count = await checkboxes.count()

   //Check all the Checkboxes
   for (let i = 0; i < count; i++) {
     await checkboxes.nth(i).check()
   }

await page.waitForTimeout(3000)  
})

test("Multiple Checkbox Demo-Approach-2", async ({}) => {

  const checkboxes = page.locator('.myCheckbox')

  await expect(checkboxes).toHaveCount(4)

  const count = await checkboxes.count()
  console.log(count)

  //Check all the Checkboxes
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check()
  }

  // Verify all are checked
  for (let i = 0; i < count; i++) {
    await expect(checkboxes.nth(i)).toBeChecked()
  }
 
await page.waitForTimeout(3000)
})

test("Multiple Checkbox Demo-Approach-3", async ({}) => {
 
  for (const checkbox of await page.locator(".myCheckbox").all()) {
    await checkbox.check()
    await expect(checkbox).toBeChecked()
  }

  await page.waitForTimeout(3000)
})

test("Multiple Checkbox Demo-Approach-4", async ({}) => {
  //Approach-4
  const expectedTexts = ["Checkbox 1","Checkbox 2","Checkbox 3","Checkbox 4",]

  for (const text of expectedTexts) {
    await expect(page.getByText(text)).toBeVisible()
  }

  await page.waitForTimeout(3000)
})

test("Multiple Checkbox Demo-Approach-5", async ({}) => {
  const labels = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"]

  for (const label of labels) {
    const checkbox = page.getByLabel(label)

    await expect(checkbox).toBeVisible() // text validation
    await checkbox.check() // action
    await expect(checkbox).toBeChecked() // state validation
  }

  await page.waitForTimeout(3000)
})

test.only("Multiple Checkbox Demo-Approach-6 using button", async ({}) => {

    const allCheckBoxes = await page.locator(".myCheckbox")
    //Check All button
    await expect(page.locator("#toggleBtn")).toBeVisible()
    await expect(page.locator("#toggleBtn")).toBeEnabled()
    await expect(page.locator("#toggleBtn")).toHaveText("Check All")
    await page.locator("#toggleBtn").click()
    
    for (let i = 0; i < allCheckBoxes.count; i++) {
      await expect(allCheckBoxes.nth(i)).toBeChecked();
    }

    await expect(page.locator("#toggleBtn")).toHaveText("Uncheck All")
    await expect(page.locator("#toggleBtn")).toBeEnabled()

    //Uncheck All button
    page.locator("#toggleBtn").click()
    
    for (let i = 0; i < allCheckBoxes.count; i++) {
      await expect(allCheckBoxes.nth(i)).not.toBeChecked();
    }

    await expect(page.locator("#toggleBtn")).toHaveText("Check All")

  await page.waitForTimeout(3000)
})
