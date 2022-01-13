-----------------------------------------------------------------
Author: Uwakmfon Edet
-----------------------------------------------------------------

------------------------------------------------------------------
Setup Instructions
------------------------------------------------------------------
1. Clone this repo using the clone URL from Azure Repos
2. Open the folder with VS-Code (Preferably in a new window)
3. Update the following files
	-- package.json: "name", "description" and "author"
4. Run the command to install Cypress locally
	--  npm install cypress --save-dev
5. Modify feature files to suite your test cases
6. Update folder name to match feature file
	-- integration >> Web Projects >> FolderName
7. Update step files and Page object files to suite exact scenarion
	-- integration >> Web Projects >> FolderName >> StepFiles / PageObject Files
8. Run cmmand to launch Cypress
	-- npx cypress open
9. Run tests to check for correctness

	