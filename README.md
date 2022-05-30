# guess-painting-year

## Project summary 

I wanted to create a simple game using the Art Institute of Chicago API. The API lets you fetch images from their database using ids. So, I thought it would be fun to get a random image, display it to the user, and let them try and guess the year the piece of art was made. 

https://guess-painting-year-lg.netlify.app/

### Important Files

#### HomePage.vue (https://github.com/liamgentile/GuessPaintingYear/blob/fa7bfaab07b56fdbe08f3c464bf2f9e4df71b90c/src/components/HomePage.vue)

The core component of the application. It contains the HTML and most of the styling for the site. Also contains data elements, computed values, and the `submit()` method which makes the api call. The HomePage component is included in App.vue, the base component, in order to be displayed. 

#### mixins/ids.js (https://github.com/liamgentile/GuessPaintingYear/blob/02565236153e553f9ff0da545745aa4412a8372f/src/mixins/ids.js)

The ids mixin includes an id array, which is a limited sample of valid ids from the AIC API. This is necessary in order to fetch a random image from the API. The ids mixin also includes a method to get a random id from the ids array. 

- Improvements: ideally I would have been able to randomize within a range of ids, but while there is a fixed range of ids the steps between are not consistent. I am investigating a better way to fetch a random id. 

#### mixins/validations.js

The validations mixin contains methods specific to validating the date input field. 

- validate(): checks that date input is not empty and that it is an int, and if not returns an appropriate message to the user
- resetValidations()
- validInputResponse(): if valid input, give a response depending on how close the user was to the correct answer
- showHint()

#### Branching Strategy

`feature/app` for working on all pertinent app code
`tests` for working on cypress tests

merged respective branches into master upon completion of task

## Accessibility considerations

- Verified text and background is sufficiently contrasting
- Ensured tab works as expected
- Retrieved and displayed alt text for fetched images 
- Semantic HTML (i.e. `button`, `label`)
- clear language, no abbreviations
- Added a hint feature (painting name), as sometimes the alt text is not the best
- `aria-live` attribute to inform the user of exception messages, guess response, and hint 

## Testing

I used Cypress, a Javascript based frontend testing tool. I like it because you can write both unit and e2e tests, and the syntax is intuitive and easy to read. 

All tests for this app are located in the file: `guess-painting-year.spec.js`.
https://github.com/liamgentile/GuessPaintingYear/blob/bec4926e27bff978181b626c9a5742edf650253f/cypress/integration/guess-painting-year.spec.js

I wrote the following tests:
1. Visit page
2. Verify initial page elements are present
3. Test the generate button, and verify that expected elements appear once clicked
4. Verify that the fetched image has alt text
5. Test invalid inputs (not an int or empty)
6. Test the hint button
7. Test a valid guess
8. Test the play again button works as expected 



## Resources

### API

Art Institute of Chicago 
https://www.artic.edu/open-access/public-api

### Fonts: 
- fontpair: provides suggestions for pairing header and paragraph fonts
- google fonts: for retrieving freely available fonts 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
