#  API

API stands for Application Programming Interface. It is a set of rules and tools that allows different software applications to communicate with each other. An API defines the methods and data formats that applications can use to request and exchange information. APIs are used in various contexts, including web development, operating systems, databases, and more.

## Formatting APIs

- Endpoints
- Path Parameter
- Query Parameter

### API EndPoints : 
Format : `BaseURL/EndPoint`

Ex : https://bored-api.appbrewery.com/random  , here `https://bored-api.appbrewery.com` is the BaseURL and `/random` is the Endpoint.

Basically, Endpoint is the a different route on the API provider server.


### Query Parameter :
Format : `BaseURL/EndPoint?query1=value&query2=value`

- Query parameters are used in URLs to provide additional information to a web server when making a request, it's used for filtering, searching, sorting.
- We add a `?` after endpoint to write the first query
- For Multiple query, we use `&` between two query parameters.

Ex : https://bored-api.appbrewery.com/filter?type=education&participants=2
- BaseURL : `https://bored-api.appbrewery.com`
- Endpoints : `/filter`
- Query : `type=education` and `participants=2`
    
This URL is likely used to request a filtered list of activities from the Bored API where the type is education, and the activities are suitable for 2 participants.

### Path Parameter : 

 Format : `BaseURL/EndPoint/{path-parameter}`

- Endpoint is a fixed part , after that we can use something called `path parameters` that can change.
- This is usually to find some specific resources that exists.
- Path Parameters could be an `ID, UserName`.

Ex : https://bored-api.appbrewery.com/activity/3943506
- BaseURL : `https://bored-api.appbrewery.com`
- EndPoints : `/activity`
- Path Parameter : `3943506` a unique id to find some specific resources.

Together, this URL is indicating a request to the "activity" endpoint with the specific path parameter "3943506" in the context of the Bored API.