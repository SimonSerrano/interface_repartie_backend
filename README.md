# interface_repartie_backend

## Prerequisites
Change MongoDB url in constants.js file to match your own MongoDB instance

## Installation

Run the command `npm install`

## Run

Run the command `npm start`

## Documentation

### HTTP REST API

#### Quizz Table

---

*GET* `/quizzTable/quizz` : returns the list of activities for the table

```
[{
  title: string,
  type: string,
  theme: {name: string},
  rooms: [
    {
        name: string, 
        objects: [
            {
                title: string, 
                images: [
                    {
                        image: string, 
                        selected: boolean
                    }]
            }]
    }]  
}]
```
---
*POST* `/quizzTable/quizz`: Post a table activity

body : ```
    {
  title: string,
  type: string,
  theme: {name: string},
  rooms: [
    {
        name: string, 
        objects: [
            {
                title: string, 
                images: [
                    {
                        image: string, 
                        selected: boolean
                    }]
            }]
    }]  
}```

--- 

#### Quizz Tablet

---

*GET* `/quizzTablette/quizz` : return the list of tablet activities

```
[
    {
        title: string,
        theme: {
            name: string
        },
        type: string,
        questions: [
            {
                label: string,
                answers: [
                    {
                        label: string,
                        valid: boolean
                    }
                ]
            }
        ],
        users: string
    }
]
```

---

*POST* `/quizzTablette/quizz`: post a tablet activity
body : ```
{
        title: string,
        theme: {
            name: string
        },
        type: string,
        questions: [
            {
                label: string,
                answers: [
                    {
                        label: string,
                        valid: boolean
                    }
                ]
            }
        ],
        users: string
    }```

---

#### Themes

---

*GET* `/themes` : returns the list of themes

```
[
    {
        name: string
    }
]
```
---

*POST* `/themes`: post a theme
body: `{name: string}`

---

### HTTP Procedure API

---
*POST* `/quizzTable/play` : send the event `PLAY` through the socket API
body : ```
{
  title: string,
  type: string,
  theme: {name: string},
  rooms: [
    {
        name: string, 
        objects: [
            {
                title: string, 
                images: [
                    {
                        image: string, 
                        selected: boolean
                    }]
            }]
    }]  
}```

---

*POST* `/quizzTable/changeImage` : send the event `CHANGE_IMAGE` through the socket API
body: ```
{
    title: string,
    image: string,
    top: boolean
}```

--- 

### WebSocket API

---
`PLAY` : event to start a game
body: ```
{
  title: string,
  type: string,
  theme: {name: string},
  rooms: [
    {
        name: string, 
        objects: [
            {
                title: string, 
                images: [
                    {
                        image: string, 
                        selected: boolean
                    }]
            }]
    }]  
}```

---

`CHANGE_IMAGE` : event to change an image at runtime
body: ```
{
    title: string,
    image: string,
    top: boolean
}```





