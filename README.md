# angular2-mdl-seed

# README #

This README would normally document whatever steps are necessary to get your application up and running.

### How do I get set up? ###

Firstly, you need to have [Node.js](https://nodejs.org/en/)
- For v4, please use v4.3.x (LTS) or higher 
- For v5, please use v5.6.x or higher
- Ready for v6

> You need v4.x or higher for [Protractor](https://angular.github.io/protractor/#/)

Then, install these packages globally:
```bash
npm install -g gulp
```

After that, go to the starter directory and just run:
```bash
npm install
```

## Start
Let's start up the server, run:
`gulp` or `gulp serve-dev`

and done! The browser will popup and the app will start!
Every changes to the file will refresh the browser automatically
and it'll also compile your changed TypeScripts files to Javascript files.

## Testing
This starter comes with testing gulp workflow

### Unit testing
Just run
```bash
gulp test
```
and it'll compile all TypeScript files, start Karma, then remap Istanbul coverage so that it shows TypeScript coverage, not the transpiled JavaScript coverage.

### E2E testing
Firstly start the server:
```
gulp serve-dev
```
To begin testing, run:
```bash
gulp e2e
```
and it'll compile all E2E spec files in `/src/test/e2e/*.spec.ts`, boot up Selenium server then launches Chrome browser.

## Production
> All build tasks will run the `gulp test`, the bundle will only be created if the test passed.

You can create production build by running:
```bash
gulp build
```
or you can create production build and then serve it using Browsersync by running:
```bash
gulp serve-build
```