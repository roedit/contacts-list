# contacts-list

- [contacts-list](#contacts-list)
  - [Introduction](#introduction)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder structure](#folder-structure)
    - [Development steps](#development-steps)

## Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

This is a simple [Angular](https://angular.io/) application using [rxjs](https://www.learnrxjs.io/). 
The UI it's using [Material-ui](https://material.angular.io/)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/roedit/contacts-list.git

# Go inside the directory
cd contacts-list

# Install dependencies
npm install

# Install json-server
npm install -g json-server

# Setup the server json file and server routes
json-server --watch contacts-mock.json --routes server-routes.json

# Start development server
ng serve

```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. <br/>
Folder structure it's fallowing the angular recommendation: components, directives, services, pipes <br/>
Routes are defined at the root level <br/>

### Development Steps
<ol>
    <li>Create the initial setup</li>
    <li>Create the router setup</li>
    <li>Setup material ui</li>
    <li>Load and display the list</li>
    <li>Display the details</li>
</ol>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
