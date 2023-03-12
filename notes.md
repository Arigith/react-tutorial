Learnt from https://www.youtube.com/watch?v=RVFAyFWO4go&t=0s

Will be trying to do at least 1 lesson a day. After the lesson I will then be learning it until I understand it better 

Lesson 1: How to create a new project and the pages it creates automatically.

command to create a new project:
    npx create-react-app <app-name>
        This command creates folder <app-name> and installs all react dependancies

command to start a web server:
    npm start
        This starts the local site and auto opens the page so you can seee the changes in Real Time.

when you create a project several folders are created. most work will be done in the src folder.

From the src folder the tutorial does not use App.test.js, reportWebVitals.js or setupTests.js, so I deleted them as per tutorial instructions. Then to show that updates are updated live App.js was edited

Lesson 2:
Went through making some additions to App.js which used standard html, constants, strings, integers, arrays and functions. Learnt Booleans and Ogjects will not render

Lesson 3:
Went through and added a couple of functional components.
Accessed a snippet command using ctr+alt+r
Added a component using a snippet command - rafce

    In App.js:
        Added an import for Header.js, Content.js and Footer.js
        Imported the data from Header.js, Content.js and Footer.js

    In Header.js:
        Moved the header content from App.js into this file

    In Content.js:
        Moved the rest of data from App.js into this file

    In Footer.js:
        Created a Footer

Lesson 4: CSS
Learnt about CSS

    In Header.js:
        Commented out the import of App.css
        Made a CSS style inside the return part of function to show how CSS can work
        Commented the CSS change out

Updated index.css to have style change
Was taught that in a small project keeping the css in 1 file is fine though in a big project you should make a seperate CSS file for each page made.
