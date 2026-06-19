# Jones Automation Exercise

## Candidate Information

**Raz Eliyahu**

📧 [razelinew@gmail.com](mailto:razelinew@gmail.com)
📱 052-849-0485
🔗 https://www.linkedin.com/in/raz-eliyahu/

## Overview

This project was completed as part of the Jones Junior Automation Engineer exercise.

The automation was implemented using Playwright and Node.js according to the exercise requirements.

The script performs the following actions:

* Opens https://test.netlify.app/
* Fills the Name, Email, Phone, Company and Website fields
* Changes the Number of Employees value from 1-10 to 51-500
* Takes a screenshot before submitting the form
* Clicks the "Request a call back" button
* Verifies successful navigation to the Thank You page
* Writes a success message to the console

## Prerequisites

* Node.js
* npm

## Installation

```bash
npm install
npx playwright install
```

## Run

```bash
node tests/callback.spec.js
```

## Output

Running the automation generates:

* A screenshot saved to `screenshots/before-submit.png`
* A log file saved to `logs/automation.log`

## Deliverables

### Automation

```text
tests/callback.spec.js
```

### QA Review

```text
Submission_Razeliyahu.pdf
```

## Notes

* The automation was implemented using Playwright as required in the exercise instructions.
* The bonus requirement of changing the Number of Employees value from 1-10 to 51-500 was implemented.
* The repository contains both the automation solution and the QA review document.
