# team-profile-generator
This application is used to create team profile pages through command line prompts. It requires the user to clone the repository and download Node. For testing purposes, the user will use Jest. 

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Repository & Demo

Repository: https://github.com/HunterHarvell/team-profile-generator.git

After the user has downloaded the proper dependencies using "node i", the user can start the application by running "node index.js". Follow the prompts to build your team, and when you are done the index.html file will update with your information.

![Adding Profiles](https://github.com/hunterharvell/team-profile-generator/demo/creating-profiles.gif)

To test the application, the user can run Jest with the command "npm test". This will test the inputed data for possible mistakes. 

![Running Tests](https://github.com/hunterharvell/team-profile-generator/demo/tests.gif)