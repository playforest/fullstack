sequenceDiagram
Client->>Server: POST/ https://fullstack-exampleapp.herokuapp.com/new_note
Server<-Client: 302: URL Redirect
Client->>Server: GET/ https://fullstack-exampleapp.herokuapp.com/notes
