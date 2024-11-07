# Neti Recruitment Task

## General concept

The application was built based on following instructions:

> Simple game of Rock, Paper, Scissors, Lizard, Spock against computer
> Stack: Next.js, app router, TailwindCSS, Shadcn
>
> ### Currency Selection:
>
> Some tips:
>
> 1. All pages have to be mobile friendly
> 2. Landing page
>
> - Simple SEO (title, description and some image)
> - Rules explanation
> - Start game button
>
> 3. Game page
>
> - User selects option
> - Computer selects random option
> - User is notified of the result and is allowed to play another round
> - Score is displayed of all rounds of user - computer match
> - If user does not decide to play another round - he should be displayed the result screen

In response a simple two screen application.

Application was quickly bootstraped using Next.js for routing and rendering. Libraries "shadcn/ui" and "Tailwind" were used to quickly prototype an usable UI.

Few sample unit tests were created to test the rules of the game and some funtionalities of main game component. A sample E2E test was created using Playwright to test core functionality of playing the game for few rounds and seeing the results screen. No more tests were created due to the limited time spent on the task and the simplicity of the app.

## Setup

### Prerequisites

Nodejs and NPM is required to install dependencies, run the application and tests. LTS version is recommended.

### Installing dependencies

Run `npm install` command in the root directory of the project (where `package-lock.json` file is located) to install necessary dependencies.

## Running the application

### Development mode

You can use `npm run dev` command to run the application in dev mode. It will be available at `http://localhost:3000`.

### Building and running in production mode

You can build the application using `npm run build` command. This will generate build artifacts in the `./.next` directory. You can then use the `npm run start` command to run the application in production mode. It will be available at `http://localhost:3000`.

## Testing

### Prequisites

Run `npx playwright install` command in the root directory of the project to install necessary dependencies for testing.

### Running Unit tests

Use the `npm run test` command to run all unit tests.

### Running E2E tests

Use the `npm run test:e2e` command to run all E2E tests.
