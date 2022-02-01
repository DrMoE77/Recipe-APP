# Recipe Finder

## Deployment

- [GitHub Repository](https://github.com/carolinatnp/recipe-app)
- [GitHub Deployed Link](https://carolinatnp.github.io/recipe-app/)

## User Story

As a home cook, I want to search up new recipes based on my require dietary requirement so that can prepare new dishes

As a user, I want to be presented with a simple yet aesthetic user interface so that I can easily filter through and browse new dishes

As a father, I want a fast way to search up recipes based on a main ingredient I have at home to come up with meal plans for the week.

As a developer, I want to create an easy-to-use application so that users can easily interact and search based on their unique requirements.

As someone with dietary requirements, I want a site to filter food options based on my needs so I can find new dishes to enjoy

As a beginner cook, I want to see a recipe procedure on a dish I can make so when I used the site, I am directed to that recipe.

As a busy mother, I want to view fast and easy food dishes so that I can plan meals and slot them into my busy schedule.

As a consumer, I want to be able to view my search history so that I can review past recipes that I had enjoyed to recreate them for a future meal.

## Acceptance Criteria

Given a recipe finder with input query, when I search for a recipe, then I am presented with a list of recipes for that query.

Given an input form, when I filter dishes based on my dietary requirements, then I am presented with a list of recipes for dishes that meets my requirements and links to additional information like ingredients, time and procedures for my reference.

Given a favourites tab, when I click on a previously search dish, then I am presented with the same recipe so I can recreate them.

Given a list of search results, when I click on the recipe I want, then I am directed to the specified recipe for additional information on how to make it, time requires and user reviews.

## Description

This program is created to aid the user in finding new recipes based on the dietary requirements. This simple recipe finder allows a user to search for a recipe and will return 10 results, filtered by the user's input. From here, the results will be appended in a card, with an image, a name and a favorite button.

When hovering on the above elements, the user will be notified with a series of hover elements, alarming the user that the are clickable links. When the image or name is clicked, it will direct the user to an external recipe with instructions on how to make the dish. When the favorites button is selected, it will append that dish to local history and can be viewed in the "searched history tab".

The "searched history tab", will display all the dishes the user has favourited and will have the option to clear all those saved recipes by clicking the "clear history" button, located in the center of the page.

As a bonus feature, a random pokemon will be presented on load and will randomise and present a new pokemon upon clicking on the "new pokemon" button

## Features

- Has a search option
- Has 4 filter requirements based on dietary needs
- Multiple button and submit features such as favorites, new pokemon and clear history.
- Local Storage

## 3rd Party Libraries

- Foundation CSS
- Font Awesome
- Edamam-recipe-API
- PokeAPI

## Installation

To install this program all you need is a text editior. I would recommend Visual Studio Code. then download or clone the repository of the program

## Demonstration

![Recipe Finder Demonstration](./assets/images/recipe-relish.gif)

## Credits

This group project was completed by Caronlina, Jonathan, Kevin and Mohamed.
