# guess-painting-year

## Project summary 

https://guess-painting-year-lg.netlify.app/

#### Branching Strategy

`feature/app` for working on all pertinent app code
`tests` for working on cypress tests

merged respective branches into master upon completion of task

## Accessibility considerations

- Contrast
- Ensured tab works as expected
- Retrieved and displayed alt text for fetched images 
- Semantic HTML (i.e. `button`, `label`)
- clear language, no abbreviations
- Added a hint feature (painting name), as sometimes the alt text is not the best

## Testing

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
