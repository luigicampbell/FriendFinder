# FriendFinder

## About

This web application is designed to find the best possible match for a user based on responses ranging from 1 - 5.

## Instructions

Instructions
Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

Your htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.
Your apiRoutes.js file should contain two routes:
A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

## How to user

User is presented with 10 scenarios and must select option from 1 to 5 based on how much user agrees or disagrees with situation. The app calculates the smallest difference between user and filler friends.
