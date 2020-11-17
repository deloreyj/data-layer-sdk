# Magento Data Layer SDK

## Purpose

This repository provides a strongly-typed interface for interacting with the [Adobe Client Data Layer](https://github.com/adobe/adobe-client-data-layer) or ACDL, the central event hub for applications within Data Solutions. ACDL is a very flexible library that is capable of holding context datay, processing events asynchronously, and handling many to many relationships of publishers and subscribers. ACDL relies on getters, setters, publishers, and subscribers that are indexed by strings. It also accepts/returns objects of arbitrary shape and size. These two aspects make it somewhat prone to errors like misspellings or data loss as one object with the wrong shape clobbers another.

## Architecture

The SDK takes the shape of a Typescript class that includes getters and setters for all of the contexts used in Data Solutions events, as well as publishers and subscribers for all events used in Data Solutions data collection.

Our tests provide numerous examples of usage. But by what of illustration, here is what the syntax looks like.

```ts
import mdl from "magento-data-layer-sdk";
/**
 *  Set a context
 *  These setters abstract the string key for the context away from the
 *  user and enforces the correct shape and type of the context object
 **/
mdl.contexts.setShopper({ shopperId: "loggedIn" });
/**
 *  Get a context
 *  Getters are used frequently in event consumers as a way to gather the context data needed by the event consumer. Each event handler receives a reference to the mdl instance as its second argument.
 **/
mdl.context.getShopper();
/**
 *  Publish an event
 *  The current design is to avoid accepting arguments when an event is published.
 *  Any data that should be published with an event should be put into a context and
 *  packaged with the event prior to notifying the subscribers
 **/
mdl.publish.addToCart();
/**
 *  Subscribe to an event
 *  Currently the event only contains the name of the event that was fired
 **/
mdl.subscribe.addToCart((event, mdl) => {});
```

## Usage

```sh
# Install dependencies
npm install

# Run tests
npm test
npm run test:watch # Run tests in watch mode for development
```

This repo also contains a .vscode file that includes a launch definition to enable debugging tests. To run the tests in debug mode, go to the Run tab (Cmd+Shift+D) and select Debug Jest Tests from the dropdown. Click the play button and your tests will launch in watch mode with the VS Code debugger attached. Now you may set breakpoints in your tests as well as the source files run in the tests.
