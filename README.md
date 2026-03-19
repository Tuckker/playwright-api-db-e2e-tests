# playwright-api-db-e2e-tests
Repo to showcase api , native app and database testing

***

# Overview

This project is an end-to-end automation framework using Playwright for: 
       - UI Testing 
      - API Testing 
      - Database Testing 
      - CI/CD with GitHub
Actions

## Tech Stack

-   Node.js
-   Playwright
-   JavaScript
-   PostgreSQL (pg)
-   GitHub Actions

## Project Structure
<img width="273" height="708" alt="image" src="https://github.com/user-attachments/assets/a91eeb39-d490-44b2-a6ef-4474a5f9233a" />


## Setup

1.  Clone the repo: git clone
    https://github.com/YOUR_USERNAME/YOUR_REPO.git cd YOUR_REPO

2.  Install dependencies: npm install

3.  Install browsers: npx playwright install

## Running Tests

Run all tests on all browsers: npx playwright test

Run a specific file: npx playwright test tests/ui/login.spec.js

Run on Chromium: npx playwright test –-project=chromium

## View Report

npx playwright show-report

## Environment Variables

Create a .env file:

DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=testdb
DB_HOST=localhost
DB_PORT=5432

## Test Coverage

UI: - Login - Cart - Checkout

API: - Auth (JWT) - Create Task (POST) - Get Task (GET) - Update Task
(PUT)

DB: - Insert - Verify - Update

## CI/CD

Tests run automatically on every push using GitHub Actions.

Artifacts can be downloaded from the Actions tab after a run.

