
# SDG Data Portal For Advanced Visualization 

This project uses: 
- React and React Router for the frontend
- Express and Mongoose for the backend API/ server
- MongoDB for the database

### Prerequisites
Install [mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and make sure MongoDB service is running. <br>
     `sudo systemctl start mongod`
    
### Running the application in development mode:
In the root folder run: <br>
     `npm start`

This builds the frontend application and runs the the server in development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

To create a new user run the following command on the command line: <br>

      curl -X POST \
        http://localhost:8080/api/user/create \
        -H 'Content-Type: application/json' \
        -d '{
        "email": "me@example.com",
        "password": "mypassword"
        }' 

Docker steps
1. docker build -t server .
2. docker run -it -p 3000:8080 server - runs the server app on [http://localhost:3000/](http://localhost:3000/)

Client docker steps
1. docker build -t client .
2. docker run -it -p 3000:3000 client
