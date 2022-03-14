# Random Dog Finder

Using the [Dog Ceo](https://dog.ceo/) api fetch a number of dog images based on breed and number selected.
**setup** - *npm i*, *npm start*

## Tech

- [React](https://reactjs.org/): js library used
- [Dog Ceo](https://dog.ceo/): api for dog images
- [React Bootstrap](https://react-bootstrap.github.io/): css library for react
- [Axios](https://axios-http.com/docs/intro): promise-based HTTP Client used for api calls

## Functionality

**Select a breed:**

- As a user
- I am able to select a breed from the _breed select_
- so that I am able to retrieve images relating to that breed

If a dog has a sub breed;
**Select a sub breed**

- As a user
- I am able to select a sub breed from the _sub breed select_
- so that I am able to retrieve images relating to that sub breed

**Select a number of random images**

- As a user
- I am able to select a number from the _number select_
- so that I am able to define how many images return

**View Images**

- As a user
- I am able select a breed and number of images and can _View Images_
- so that I can view the amount of images of the breed selected

**If an input field is missing data**

- As a user
- When I click _View Images_
- show a red border around any input field with missing data

**If image count doesn't match images fetched**

- As a user
- When I click _View Images_
- show a green text when there isn't the amount images
