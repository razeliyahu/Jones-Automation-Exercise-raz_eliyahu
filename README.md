# Jones Automation Exercise

## Candidate Information

Name: Raz Eliyahu
Phone: 052-849-0485
Email: razelinew@gmail.com
LinkedIn: https://www.linkedin.com/in/raz-eliyahu/

--------------------------------------------------

## Overview

This project was completed as part of the Jones Junior Automation Engineer exercise.

The automation was implemented using Playwright and Node.js according to the exercise requirements.

The script performs the following actions:

- Opens https://test.netlify.app/
- Fills the Name, Email, Phone, Company and Website fields
- Changes the Number of Employees value from 1-10 to 51-500
- Takes a screenshot before submitting the form
- Clicks the "Request a call back" button
- Verifies successful navigation to the Thank You page
- Writes a success message to the console

--------------------------------------------------

## Prerequisites

- Node.js
- npm

--------------------------------------------------

## Installation

npm install

npx playwright install

--------------------------------------------------

## Run

node tests/callback.spec.js

--------------------------------------------------

## Deliverables

Automation:
tests/callback.spec.js

QA Review:
Jones_Final_Submission_Clean.pdf

--------------------------------------------------

## Notes

- The automation was implemented using Playwright as required in the exercise instructions.
- The bonus requirement of changing the Number of Employees value from 1-10 to 51-500 was implemented.
- The repository contains both the automation solution and the QA review document.
