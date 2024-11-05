The music sync will requre two parameters !!
Music Load and Music Sync

Chat sync will require
{
    type: chat
    statusCode: 
    roomID: 
    userID:
    userName:
    message:
}

```json
{
    "type": "music",
    "statusCode": "200",
    "roomID": "123",
    "userID": "User ID",
    "userName": "User1",
    "musicID": "aldjfier",
    "timeStamp": "8:10"
}
```

- Implementing the rate limter
- Implementing the authentication code
- Connecting with the postgres database
- Using Redis for caching everything
