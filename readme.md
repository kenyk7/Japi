# Japi

Simple api rest with json-server + authorization and login auth + automatize models faker generator class

## Dev

Clone this repository
Require npm or yarn and install global json-server, nodemon

Use nodemon recomended for dev in your api of json server = Simulates automatic reloading when modifying your files

#### Commands for dev

```sh
$ yarn
$ npm run dev
```

## Login

In your App use method POST for auth with params:

`user = kenyk7`
`pass = test`

And this returns you a json:

```json
{
    "user": "kenyk",
    "token": "kenyk7"
}
```

Now save your token in LocalStorage and use for request to the api endpoint


## Api

JSON Server is running in: http://localhost:9000 + route: example /users

Send to header in your endpoint: `?token=kenyk7` or customize in the file `app.js` 

Example in your browser:

`http://localhost:9000/users?token=kenyk7`


## Register new models

* create your model in folder models
* modify your file using [Faker] methods or use your custom functions
* register your model in registerModels and ready

## Features

* [Json-server]
* [Nodemon]
* [Faker]

Next tut
https://devdactic.com/restful-api-user-authentication-1/

[Json-server]: <https://github.com/typicode/json-server>
[Nodemon]: <https://github.com/remy/nodemon>
[Faker]: <https://github.com/marak/Faker.js/>