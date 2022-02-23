# Automation tech test

## Pre-requisites

```
make install
```

Open a terminal and run the following command to spin up the API, React UI and local postgres instance

```
make docker-compose
```

_Navigate to http://localhost:3000 to view the UI_

## How to run the tests

Run the following command in a separate terminal

```
make run-tests
```

# Testing scenarios
Write automated tests to assert the BDD acceptance criteria. We encourage you to make improvements to the application to make testing easier and more maintainable. Also impress us by writing API tests.

## Saving favorite recipes

### User story 1

As a chef
I want to save my favorite recipes\
So that I can cook them another time

### Acceptance criteria 1

Given I have a new recipe\
When I add the new recipe name\
And ingredients\
And measurements\
And cooking method\
Then the new recipe is saved for later

## Searching favorite recipes by name

### User story 2

As a chef\
I want to search for my favorite recipe\
So that I can cook it

### Acceptance criteria 2

Given I want to look for a recipe\
When I search by the name of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods

## Searching favorite recipes by ingredients (Optional)

### User story 3

As a chef\
I want to search for my favorite recipe by ingredient\
So that I can cook it

### Acceptance criteria 3

Given I want to look for a recipe by ingredients\
When I search by the ingredient of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods
