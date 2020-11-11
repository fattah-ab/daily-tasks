# TeamD-Backend

## RESTful endpoints


**Register User**

```
POST https://nameless-temple-74030.herokuapp.com/register

default role value = "User"
```
```
Request Header 
not needed

Request Body
type : form-urlencoded

{
  "email":"<asset email>",
	"password":"<asset password>",
  "fullname":"<asset fullname>",
  "username": "<asset username>"
}
```
- Response (200) 

```
{
  "access_token": "<access token>"
}   
```

- Response (400 - Bad Request) 

```
{
  "msg": "<Email already registered>"
}
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**User Login**
```
POST https://nameless-temple-74030.herokuapp.com/login
```

```
Request Header 
not needed

Request Body 
type : form-urlencoded

{
	"email":"<asset email>",
	"password":"<asset password>",
}
```

- Response (200)
```
{
  "access_token": "<asset access_token>"
}
```

- Response (401 - Bad Request)
```
{
  "message": "<incorect password>"
}
```

- Response (401 - Bad Request)
```
{
  "message": "<user not found>"
}
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**Get all Users**
```
GET https://nameless-temple-74030.herokuapp.com/user/list
```

```
Request Header
{
  "<asset access_token>"
}

Request Body
"not needed"
```
- Response (200)
```  
[  
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "username": "<asset username>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    },
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "username": "<asset username>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
]
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```


**Get User by ID**
```
GET https://nameless-temple-74030.herokuapp.com/user/id
```

```
Request headers
{
  "<asset access_token>"
}

Request body
"Not needed"
```

- Response: (200 - OK)
```
    {
        "id": "<asset id>",
        "fullname": "<asset fullname>",
        "email": "<asset email>",
        "role": "<asset role>",
        "password": "<asset password>",
        "image": "<asset image>",
        "username": "<asset username>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    }
```

- Response: (404 - Page Not Found)
```
{
  "msg" : "<User not Found>"
}
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**Edit User**
```
Put https://nameless-temple-74030.herokuapp.com/user/update
```

```
Request Header
"<asset access_token>"

Request Body
type : form-data

{
    "fullname": "<asset fullname>",
    "email": "<asset email>",
    "password": "<asset password>",
    "image": "<asset image>",
    "username": "<asset username>",
}

```

- Response: (200 - OK)

```
{
  "Updated": "<new profile>"
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Add Movie**
```
POST https://nameless-temple-74030.herokuapp.com/movie/add
```

```
Request headers
{
  "<asset access_token>"
}

Request body
type : form-data

{
    "id": "<asset id>",
    "title": "<asset title>",
    "synopsis": "<asset synopsis> ,
    "trailer": "<asset trailer>",
    "poster": "<asset poster>",
    "category": "<asset category>",
    "release_date": "<asset release_date>",
    "director": "<asset director>",
    "featured_song": "<asset featured_song>",
    "budget": "<asset budget>"
}
```

- Response Status (200 - OK)

```
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

- Response (409 - conflict)

```
{
  "msg": "<Title already exist, try another title.>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Get All Movies**
```
GET https://nameless-temple-74030.herokuapp.com/home/:page
```

```
Request Headers
Not needed

Request Body
Not needed
```
- Response (200 - OK)

```
[
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
]
```

- Response (404 - Page Not Found)

```
{
  "msg": "<Page Not Found>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```


**Get Movie by ID**
```
GET https://nameless-temple-74030.herokuapp.com/movie/search/:id
```

```
Request headers
"not needed"

Request body
"Not needed"
```

- Response: (200 - OK)
```
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

- Response: (404 - Page Not Found)
```
{
  "msg" : "<Not Found>"
}
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**Get Movie by category**
```
GET https://nameless-temple-74030.herokuapp.com/movie/category
```

```
Request headers
"not needed"

Request body
type : form-urlencoded

{
  "category": "<asset category>"
}
```

- Response: (200 - OK)
```
[
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
        "budget": "<asset budget>"
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
]
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**Get Movie by Query LIKE**
```
GET https://nameless-temple-74030.herokuapp.com/movie/search
```

```
Request headers
"not needed"

Request body
type : form-urlencoded

{
  "search": "<asset keyword>"
}
```

- Response: (201)
```
[
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
        "budget": "<asset budget>"
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
]
```

- Response: (409)
```
{
  "msg" : "<Movie is not available>"
}
```

- Response: (500 - Internal Server Error)
```
{
  "msg" : "<Error Message>"
}
```

**Edit Movie**
```
Put https://nameless-temple-74030.herokuapp.com/movie/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-data

{
    "title": "<asset title>",
    "synopsis": "<asset synopsis>",
    "trailer": "<asset trailer>",
    "poster": "<asset poster>",
    "category": "<asset category>",
    "release_date": "<asset release_date>",
    "director": "<asset director>",
    "featured_song": "<asset featured_song>",
    "budget": "<asset budget>"
}
```

- Response: (200 - OK)

```
[1]
```

- Response: (409 - Conflict)

```
{
  "msg" : "<error message">"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Edit Backdrop**
```
Put https://nameless-temple-74030.herokuapp.com/movie/backdrop/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-data

{
  "backdrop": "<asset backdrop>",
}
```

- Response: (200 - OK)

```
{
  status : "<backdrop succesfully update>
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Delete Movie**
```
DELETE https://nameless-temple-74030.herokuapp.com/movie/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
  "msg": "<Movie Deleted>
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Get All Character**
```
Get https://nameless-temple-74030.herokuapp.com/character/all
```

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
  "msg" : "<Error Message>"
}
```

**Add Character**
```
Post https://nameless-temple-74030.herokuapp.com/character/add
```

```
Request Header
"<asset access_token>"

Request Body
type : form-data

{
  "name":"<asset name>",
	"image":"<asset image>",
}
```

- Response: (201 - Created)

```
[
  {
    "id": "<cast id>",
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
  "msg" : "<Name already exist, try another name.">"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Find By Id Character**
```
Get https://nameless-temple-74030.herokuapp.com/character/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
  "id": <asset id>,
  "name": "<asset name>",
  "image": "<asset image>",
  "createdAt": "<asset createdAt>",
  "updatedAt": "<asset updateddAt>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Edit Character**
```
Put https://nameless-temple-74030.herokuapp.com/character/edit/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-data

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
  "msg" : "<error message">"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Delete Character**
```
DELETE https://nameless-temple-74030.herokuapp.com/character/delete/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
  "msg": "<Character Deleted>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Get All Movie Character**
```
Get https://nameless-temple-74030.herokuapp.com/moviechar/all
```

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
        "id": "<asset id>",
        "movieId": "<asset movieId>",
        "characterId": "<asset characterId>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>",
        "movie": {
            "id": "<asset id>",
            "title": "<asset title>",
            "synopsis": "<asset synopsis>",
            "trailer": "<asset trailer>",
            "poster": "<asset poster>",
            "category": "<asset category>",
            "release_date": "<asset release_date>",
            "director": "<asset director>",
            "featured_song": "<asset featured_song>",
            "budget": "<asset budget>"
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
        },
        "character": {
            "id": "<asset id>",
            "name": "<asset name>",
            "image": "<asset image>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
        }
    },
    {
        "id": "<asset id>",
        "movieId": "<asset movieId>",
        "characterId": "<asset characterId>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>",
        "movie": {
            "id": "<asset id>",
            "title": "<asset title>",
            "synopsis": "<asset synopsis>",
            "trailer": "<asset trailer>",
            "poster": "<asset poster>",
            "category": "<asset category>",
            "release_date": "<asset release_date>",
            "director": "<asset director>",
            "featured_song": "<asset featured_song>",
            "budget": "<asset budget>"
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
        },
        "character": {
            "id": "<asset id>",
            "name": "<asset name>",
            "image": "<asset image>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
        }
    }
]
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Add Movie Character**
```
Post https://nameless-temple-74030.herokuapp.com/moviechar/add
```

```
Request Header
"<asset access_token>"

Request Body
type : form-urlencoded

{
  "movieId":"<asset movieId>",
	"characterId":"<asset characterId>",
}
```

- Response: (201 - Created)

```
{
  "id": <cast id>,
  "movieId": "<cast movieId>",
  "characterId": "<cast characterId>",
  "createdAt": "<cast createdAt>",
  "updatedAt": "<cast updateddAt>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Find By Id Movie Character**
```
Get https://nameless-temple-74030.herokuapp.com/moviechar/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
  "id": "<asset id>",
  "movieId": "<asset movieId>",
  "characterId": "<asset characterId>",
  "createdAt": "<asset createdAt>",
  "updatedAt": "<asset updateddAt>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Find By MovieId on Movie Character**
```
Get https://nameless-temple-74030.herokuapp.com/moviechar/find/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
    "movies": {
        "id": "<asset id>",
        "title": "<asset title>",
        "synopsis": "<asset synopsis>",
        "trailer": "<asset trailer>",
        "poster": "<asset poster>",
        "backdrop": "<asset backdrop>",
        "category": "<asset category>",
        "release_date": "<asset release_date>",
        "director": "<asset director>",
        "featured_song": "<asset featured_song>",
        "budget": "<asset budget>",
        "createdAt": "<asset createdAt>",
        "updatedAt": "<asset updatedAt>"
    },
    "characters": [
        {
            "id": "<asset id>",
            "name": "<asset name>",
            "image": "<asset image>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>"
        },
        {
            "id": "<asset id>",
            "name": "<asset name>",
            "image": "<asset image>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>"
        }
    ]
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Edit Movie Character**
```
Put https://nameless-temple-74030.herokuapp.com/moviechar/edit/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-urlencoded

{
  "movieId":"<asset movieId>",
	"characterId":"<asset characterId>",
}
```

- Response: (200 - OK)

```
[1]
```

- Response: (500 -Internal Server Error)

```
{
  "<msg : Error Message>"
}
```

**Delete Movie Character**
```
DELETE https://nameless-temple-74030.herokuapp.com/moviechar/delete/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (200 - OK)

```
{
  "msg" : "<Movie Character Deleted>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Add Review**
```
Post https://nameless-temple-74030.herokuapp.com/review/add/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-urlencoded

{
  "comment":"<asset comment>",
	"rating":"<asset rating>",
}
```

- Response: (201 - Created)

```
{
  "id": <asset id>,
  "movieId": "<asset movieId>",
  "userId": "<asset userId>",
  "comment": "<asset comment>",
  "rating": "<asset rating>",
  "createdAt": "<asset createdAt>",
  "updatedAt": "<asset updateddAt>"
}

```

- Response: (403 - Forbidden)

```
{
  "msg" : "<you already reviewed the movie>"
}
```

- Response: (404 - Page not found)

```
{
  "ERROR" : "<Movie not found>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Get User Review**

*display reviewed movies on user's profile page*

```
Get https://nameless-temple-74030.herokuapp.com/review/profile
```

```
Request Header
"<asset access_token>"

Request Body
not needed

```

- Response: (200 - OK)

```
{
    "review": [
        {
            "id": "<asset movieId>",
            "movieId": "<asset movieId>",
            "userId": "<asset userId>",
            "comment": "<asset comment>",
            "rating": "<asset rating>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
            "movie": {
                "id": "<asset id>",
                "title": "<asset title>",
                "synopsis": "<asset synopsis>",
                "trailer": "<asset trailer>",
                "poster": "<asset poster>",
                "backdrop": "<asset backdrop>",
                "category": "<asset category>",
                "release_date": "<asset release_date>",
                "director": "<asset director>",
                "featured_song": "<asset featured_song>",
                "budget": "<asset budget>",
                "createdAt": "<asset createdAt>",
                "updatedAt": "<asset updatedAt>",
            }
        }
    ]
}
```

- Response: (404 -Page not found)

```
{
  "msg" : "<not found>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Get Movies Review**

*Display user's review on movie side*

```
Get https://nameless-temple-74030.herokuapp.com/review/movie/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed

```

- Response: (200 - OK)

```
{
    [
        {
            "id": "<asset movieId>",
            "movieId": "<asset movieId>",
            "userId": "<asset userId>",
            "comment": "<asset comment>",
            "rating": "<asset rating>",
            "createdAt": "<asset createdAt>",
            "updatedAt": "<asset updatedAt>",
            "movie": {
                "id": "<asset id>",
                "title": "<asset title>",
                "synopsis": "<asset synopsis>",
                "trailer": "<asset trailer>",
                "poster": "<asset poster>",
                "backdrop": "<asset backdrop>",
                "category": "<asset category>",
                "release_date": "<asset release_date>",
                "director": "<asset director>",
                "featured_song": "<asset featured_song>",
                "budget": "<asset budget>",
                "createdAt": "<asset createdAt>",
                "updatedAt": "<asset updatedAt>",
            }
        }
    ]
}
```

- Response: (400 - Bad Request)

```
{
  "msg" : "<this movie was not reviewed yet>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

**Edit review**
```
Put https://nameless-temple-74030.herokuapp.com/review/edit/:id
```

```
Request Header
"<asset access_token>"

Request Body
type : form-urlencoded

{
  "comment":"<asset comment>",
	"rating":"<asset rating>",
}
```

- Response: (200 - OK)

```
{
  "msg": "<Review updated>"
  [1]
}
```

- Response: (404 - Page not found)

```
{
  "msg" : "<invalid operation>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```


**Delete Review**
```
DELETE https://nameless-temple-74030.herokuapp.com/review/delete/:id
```

```
Request Header
"<asset access_token>"

Request Body
not needed
```

- Response: (204 - No Content)

```
{
    "msg": "<Review Deleted>"
```

- Response: (403 - Forbidden)

```
{
  "msg" : "<forbidden operation>"
}
```

- Response: (500 -Internal Server Error)

```
{
  "msg" : "<Error Message>"
}
```

## FINISH