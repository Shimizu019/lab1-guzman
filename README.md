DCIT50 Laboratory Exercise 1

Git, GitHub, and Branching

This repository contains my work for DCIT50 – Object Oriented Programming, Laboratory Exercise 1: Git, GitHub, and Branching.

Student Information

Student: Benju Guzman

Repository: Shimizu019/lab1-guzman

Laboratory Steps Completed

1. Configure Git

Configured Git with a username and email using:

git config --global user.name "Benju Guzman"
git config --global user.email "benjugarcia01@gmail.com"

2. Create the Project Folder

Created the project folder:

C:\Users\CCL305\Documents\lab1guzman

Opened the folder in Visual Studio Code.

3. Initialize the Local Git Repository

Initialized Git inside the project folder:

git init

Checked the repository status using:

git status

4. Create the Initial HTML Webpage

Created the initial:

index.html

This was the original HTML-only version of the webpage.

5. Commit the Initial HTML Version

Added and committed the HTML file:

git add index.html
git commit -m "Create initial HTML webpage"

6. Create the main and no-style Branches

Renamed the default branch from master to main:

git branch -M main

Created the no-style branch to preserve the original HTML-only version:

git branch no-style

The repository now has:

main
no-style

7. Create and Connect the GitHub Repository

Created a GitHub repository named:

lab1-guzman

GitHub repository:

https://github.com/Shimizu019/lab1-guzman

Connected the local repository to GitHub using:

git remote add origin https://github.com/Shimizu019/lab1-guzman.git

Verified the remote connection with:

git remote -v

8. Push the main Branch

Pushed the main branch to GitHub:

git push -u origin main

9. Push the no-style Branch

Pushed the no-style branch to GitHub:

git push -u origin no-style

Both branches are now available on GitHub.

Branch Structure

no-style

Contains the original HTML-only version of the webpage.

no-style
└── index.html

main

Contains the working version of the webpage. CSS styling and JavaScript interactivity will be added to this branch.

main
├── index.html
├── style.css
└── script.js

Git Commands Used

git init
git status
git add index.html
git commit -m "Create initial HTML webpage"
git branch -M main
git branch no-style
git switch main
git remote add origin https://github.com/Shimizu019/lab1-guzman.git
git remote -v
git push -u origin main
git push -u origin no-style

Goal of the Laboratory

The goal of this laboratory exercise is to practice:

Creating and managing a local Git repository

Creating commits and tracking changes

Working with Git branches

Preserving an original version using a separate branch

Connecting a local repository to GitHub

Pushing multiple branches to GitHub

Developing a webpage using HTML, CSS, and JavaScript

Current Status

The Git and GitHub setup is completed successfully. The next development step is to continue working on the main branch by adding CSS styling and JavaScript interactivity, then commit and push those changes to GitHub.