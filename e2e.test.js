describe('App.js', () => {
	test('shows a success message after submitting a form', async () => {
		await page.goto('http://www.google.com');
        await page.waitForSelector('input[name="q"]');
        await page.type('input[name="q"]', 'Hello World');
        await page.click('input[name="btnK"]');
        await page.waitForNavigation();
        await page.waitForSelector('h3');
        
	});
});
