# TeamD-Backend

RESTful endpoints


**Register User**
POST /user/register

default role value = "User"

Request Header 
not needed

```
Response (200) 

    {
        "access_token": "<access token>",
    }   
```
```
Response (400 - Bad Request) 

    {
        "msg": "<returned error message>"
    }
```

**User Login**

POST /user/login

Request Header 
***not needed***
```
Request Body 
[
    {
	"email":"<asset email>",
	"password":"<asset password>",
    }
]
```
```
Response (200)

    {
        "access_token": "<asset access_token>"
    }
```
```
Response (400 - Bad Request)
    {
        "message": "<returned error message>"
    }
```

**Get all Users**
GET /user/

Request Header
"<asset access_token>"

Request Body
"not needed"

```
Response (200)
    
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
```
```
Response (400 - Bad Request)
    {
        "msg": "Token not found"
    }
```
```
Response (403 - Forbidden) 
    {
        "msg": "Access Denied"
    }
```
**Update User**
PUT /user/id/:id

Headers
needed access_token

Body
Multi Part Form
```
{
    fullname : "<asset_fullname>",
    email : "<asset_email>",
    password : "<asset_password>",
    image : "<asset_image>",
}
```

```
Response (200)
{
    {
  "Updated": {
    "id": "<asset_id>",
    "fullname": "<asset_fullname>",
    "email": "<asset_email>",
    "role": "<asset_role>",
    "password": "<asset_password>",
    "image": "<asset image>",
    "createdAt": "<asset createdAt>",
    "updatedAt": "<asset updatedAt>"
  }
}
}
```
```
Response (400)
{
  "name": "JsonWebTokenError",
  "message": "invalid signature"
}
```
**User Profile**
GET user/id/:id

Headers
need access_token

```
Respon(200)
{
  "name": "<asset fullname>",
  "email": "<asset email>",
  "image": "<asset image>"
}
```
```
Respon(404)
{
  "msg": "User not Found"
}
```

**Add Movie**

POST /movie/add

Request headers
"<asset access_token>"
```
Status (200)
    {
        "id": 13,
        "title": "<asset title>",
        "synopsis": "<asset synopsis> ,
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
        "updatedAt": ""<asset updatedAt>"",
        "createdAt": ""<asset createdAt>""
    }
```
```
Error (409 - conflict)

    {
        "msg": "Title already exist, try another title."
    }
```
**ADD Movie**
POST /add

Header
needed

**Body**
```
{
  "id": 8,
  "title": "<asset title>",
  "synopsis": "<asset synopsis>",
  "trailer": "<asset trailer>",
  "poster": "<asset poster>",
  "category": "<asset category>",
  "release_date": "<asset release_date>",
  "director": "<asset director>",
  "featured_song": "<asset featured_song>",
  "budget": "<asset budget>",
  "updatedAt": "2020-10-08T08:53:45.759Z",
  "createdAt": "2020-10-08T08:53:45.759Z",
}
```
**Get All Movies**
    GET /home/:page

    Headers
    not needed

    Body
    Not needed

    Parameter
    need page as parameter
```
    Status (200)[
    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    },
    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    }
```

Get Movie by ID

GET /movie/:id

Headers
"not needed"

Body
"Not needed"

Parameter
"Needed"

```
Status (200)

    {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
    }
```

```
Status (404)
    {
        msg : Not Found
    }
```






























































































































































































































































**Get All Character**
Get http://localhost:3000/character/all

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 -OK)

```
[
  {
    "id": <asset id>,
    "name": "<asset name>",
    "image": "<asset image>",
    "createdAt": "<asset createdAt>",
    "updatedAt": "<asset updateddAt>"
  }
]
```

- Response: (500 -Internal Server Error)

```
{
  "msg : <Error Message>"
}
```

**Add Character**
Post http://localhost:3000/character/add

```
Request Header
"<asset access_token>"

Request Body
{
    "name":"<asset name>",
	"image":"<asset image>",
}
```

- Response: (201 - Created)

```
[
  {
    "id": <cast id>,
    "name": "<cast name>",
    "image": "<cast image>",
    "createdAt": "<cast createdAt>",
    "updatedAt": "<cast updateddAt>"
  }
]
```

- Response: (409 - Conflict)

```
{
  "< msg : "Name already exist, try another name.">"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg : <Error Message>"
}
```

**Find By Id Character**
Get http://localhost:3000/character/:id

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
[
  {
    "id": <asset id>,
    "name": "<asset name>",
    "image": "<asset image>",
    "createdAt": "<asset createdAt>",
    "updatedAt": "<asset updateddAt>"
  }
]
```

- Response: (500 -Internal Server Error)

```
{
  "msg : <Error Message>"
}
```

**Edit Character**
Put http://localhost:3000/character/edit/:id

```
Request Header
"<asset access_token>"

Request Body
{
    "name":"<asset name>",
	"image":"<asset image>",
}
```

- Response: (200 - OK)

```
[1]
```

- Response: (409 - Conflict)

```
{
  "< msg : "error message">"
}
```

- Response: (500 -Internal Server Error)

```
{
  "<msg : Error Message>"
}
```

**Delete Character**
DELETE http://localhost:3000/character/delete/:id

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
    "<msg: Character Deleted>
```

- Response: (500 -Internal Server Error)

```
{
  "<msg : Error Message>"
}
```