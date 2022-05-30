# guess-painting-year

## Project summary 

https://guess-painting-year-lg.netlify.app/

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

## Testing

I used Cypress, a Javascript based frontend testing tool. I like it because you can write both unit and e2e tests, and the syntax is intuitive and easy to read. 

All tests for this app are located in the file: `guess-painting-year.spec.js`. [
](https://github.com/liamgentile/GuessPaintingYear/blob/89fac9f5cb96d439691654d3ccd80dad3605df22/cypress/integration/guess-painting-year.spec.js)

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
