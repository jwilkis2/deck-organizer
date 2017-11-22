# DeckOrganizer
URL: https://github.com/jwilkis2/deck-organizer  
  
The purpose of this application is to demonstrate my understanding of different aspect with regards to building website in angular.  The webpage is designed to allow a user to customize a Magic: the Gathering deck.  The search bar utilizes the Scryfall API (at scryfall.com) to pull in card infomation to store it in the table.  
  
This application uitilizes the following components:  
  - Uses authentication via Firebase to log into the webpage  
  - Uses Router Guards to redirct to either login page or home page based on logged in status  
  - Utilizes the real time database through Firebase to store user account information  
  - Allows users to update their personal info on Firebase via the settings page  
  - Displays user information live on settings page from Firebase, updates in realtime  
  - Contains a page for the chatbot. (Current functionality pending until scryfall api is working)  
  - Main page displays a search bar which will pull information from Scryfall
  - Card information pulled from Scryfall will be store in the table on the main page  
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
