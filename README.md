# Geriatrik
Geriatrik is a web application developed for an organization (El club de los abuelos) that helps the elderly. The main focus is the optimization of the taking of screenings carried out by the doctors

This project was developed by:

- [Ruy Guzmán Camacho](https://github.com/Ruy-GC)
- [Carlo Ángel Luján García](https://github.com/CarloLj)
- [Ángel Padilla Esqueda](https://github.com/Int-Angel)
- [Santiago González de Cosío Romero](https://github.com/sant-gdc)
- [Ricardo González Leal](https://github.com/RicardoGLeal)
- [Adrián Becerra Meza](https://github.com/AdrianBecerra411)
- [Fernando López Gómez](https://github.com/fernandolpz-A01639715)


## Goals
The project´s main goal is to improve the current testing processes that happen everyday at "El club de los abuelos" by creating an app that is easy to use and helps in mulitple tasks such as:

- Monitorization of the needs and health of the patients
- Application of tests 
- Facilitate the work of employees
- Transform current methods to a digital environment

## Installation and runnig the app 

Geriatrik is developed using React.js bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

``` bash
cd .\geriatrik-app\ 
npm install
npm start
```

## Web App
The system uses React.js for the front-end and an API connected to a MySQL database for the Back-end. 

From the app you arec able log or register a nuew employee and after the authorization succeeds you can access our home page from wich you can perform the following actions:

- View Employee information
- View patients (Bubbles and list view)
- Filter patients
- View patient details
- Apply a new test to a patient
- View test results

## Pages

### Auth pages
![Login](https://user-images.githubusercontent.com/78626154/167273717-16820b5c-6653-4ae1-a177-156e2da898e6.png)
![Register](https://user-images.githubusercontent.com/78626154/167273733-ffd9af88-2fef-4191-90e7-01f007a9e756.png)

### Home
![Home](https://user-images.githubusercontent.com/78626154/167273769-deffe78b-8a97-4302-aa46-df8ae29a8731.png)

### Employee
![Employee](https://user-images.githubusercontent.com/78626154/167273806-9c8ad43a-1f4c-47da-95b5-7ef6ae3dbb12.png)

### Patient Details
![Patient](https://user-images.githubusercontent.com/78626154/167273816-e8f521cf-3602-4e76-86c6-b2f69dc3fd4b.png)

### Test
![Test](https://user-images.githubusercontent.com/78626154/167273830-07257422-3f18-4cbc-a0fb-5ae89f1818fe.png)

## Requests
All the requests to the api are made using the Axios library, useState hook to create the objects sent to the requests

### Proxy in package.json

``` javascript

"proxy": "https://geriatrik-api.herokuapp.com/"

``` 


### login request example

``` javascript
import axios from 'axios'
import React, {useEffect, useState} from 'react'

...

//user to send
const [user,setUser] = useState({
      email: '',
      password: ''
  });

//saves token
const [authState,setAuth] = useState({
      token: ''
});
  
//navigate to homepage
useEffect(() => {
      if(authState.token !== ''){
          navigate('/home');
      }
      //eslint-disable-next-line
},[authState.token]);
...

//login user request called on form submit
const loginUser = async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/login',user,config);
            setAuth({token: res.data.token});

            localStorage.setItem('id',res.data.empleadoID);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('token',res.data.token);
            alert.success('Bienvenid@ ' + res.data.name);

        } catch (error) {
            alert.error(error.response.data.msg);
        }
    }

```

### Utils for request after authorization

``` javascript
import axios from 'axios';

const setAuthToken = token =>{
    if(token){
        //backend header in which we send the token
        //sets a default config to use in every request
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;
```
## API Repo

### [Geriatrik API](https://github.com/Ruy-GC/Geriatrik-API)
