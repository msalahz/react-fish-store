# React Fish Store

> This is a micro serverless distributed e commerce that allow creating multiple fish stores with the ability to Create, Read, Update & Delete inventory items by store owner (First logged in user for a store is the owner by default ) and other features like add to & delete from order

## Installation

This application is utilizing  [Create React app](https://github.com/facebook/create-react-app)

```bash
#1 install create-react-app is installed
npm i create-react-app -g --dev
#2 clone the project
git clone git@github.com:msalahz/react-fish-store.git
#3 instal project dependencies
npm install
#4 start local server
npm start
```

> now you should be able to access the application in any browser on [http://localhost:3000](http://localhost:3000)

## How to demo

1. Go to [react-fish-store](https://msalahz.github.io/react-fish-store) and click on `view store` button.
2. You should land in store page. In this page you should login to claim store ownership by clicking on any of the `Log In` buttons on the right column.
3. After login you should be able to add new fishes by using `add fish form` or load sample data by clicking on `Load Sample Fishes` button.
4. Any of the actions in step 3 should show new fish item(s) in the left column with the ability to `add to order` and in the right column with the ability to `edit` or `delete` item(s).
