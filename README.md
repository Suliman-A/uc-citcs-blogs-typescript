# Run locally

## Install node.js

https://nodejs.org/en/download/

## Watch the following youtupe video to know how to install the npm and clone the app

https://www.youtube.com/watch?v=i8KuDon82KM

## In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Add TypeScript to React App

### `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

useful link: https://create-react-app.dev/docs/adding-typescript/

## install JSON Server API

### `npm install -g json-server`

useful link: https://www.npmjs.com/package/json-server

##  Create a json file inside the project directory 'db.json'

### `touch db.json`

## Add some data inside the 'db.json' file

### 
```

{
  "blogs": [
    {
      "title": "Welcome to UC",
      "body": "I'm a new student in citcs ",
      "author": "student",
      "id": 1
    },
    {
      "title": "CITCS family - Webinar 2021",
      "body": "Good day everyone!",
      "author": "faculty",
      "id": 2
    }
    ]
 }   
```

## Start JSON server in new port

### `npm json-server --watch data/db.json --port 8000 `

You can now run the app and play around


**run the server in seperate terminal**


