# interface_repartie_backend

## Installation

Run the command `npm install`

## Run

Run the command `npm start`

## Communication schema
(schema)[https://imgur.com/a/LtQP2gM]

## Documentation

### Events

#### Event PING

`PING` Ping a connection

#### Event PONG

`PONG` Response to a Ping Event

#### Event SAVE

`SAVE` Save a new quizz (not implemented yet)

#### Event QUIZZ

`QUIZZ` Send quizz data to a client

#### Event REQUEST

`REQUEST` Request quizz data (the Event QUIZZ is sent after this one)

#### Event DONE

`DONE` When a quizz is done