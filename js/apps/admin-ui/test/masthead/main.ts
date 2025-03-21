import { Page, expect } from "@playwright/test";

function getMobileUserDropdownSelector(page: Page) {
  return page.getByTestId("options-kebab-toggle");
}

function getUserDropdownSelector(page: Page) {
  return page.getByTestId("options-toggle");
}

async function getUserDropdown(page: Page) {
  const width = await page.evaluate(
    () => document.documentElement.getBoundingClientRect().width,
  );
  if (width < 1024) {
    return getMobileUserDropdownSelector(page);
  } else {
    return getUserDropdownSelector(page);
  }
}

export async function goToAccountManagement(page: Page) {
  await (await getUserDropdown(page)).click();
  await page.locator("#manage-account").click();
}

export async function assertIsMobileView(page: Page) {
  await expect(getUserDropdownSelector(page)).not.toBeVisible();
  await expect(getMobileUserDropdownSelector(page)).toBeVisible();
}

export async function assertIsDesktopView(page: Page) {
  await expect(getUserDropdownSelector(page)).toBeVisible();
  await expect(getMobileUserDropdownSelector(page)).not.toBeVisible();
}

export async function toggleUsernameDropdown(page: Page) {
  await (await getUserDropdown(page)).click();
}

export async function toggleMobileViewHelp(page: Page) {
  await page.getByRole("menuitem", { name: "Help on" }).click();
}

export async function getDocumentationLink(page: Page) {
  return await page
    .getByRole("menuitem", { name: "Documentation" })
    .getAttribute("href");
}

export async function clickDocumentationLink(page: Page) {
  await page.getByRole("menuitem", { name: "Documentation" }).click();
}

export async function clickGlobalHelp(page: Page) {
  await page.getByRole("button", { name: "Help" }).click();
}

export async function toggleGlobalHelp(page: Page) {
  await page.locator("#enableHelp").click({ force: true });
}
