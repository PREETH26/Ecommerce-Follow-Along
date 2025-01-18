# Ecommerce-Follow-Along

In this Follow Along project, we will be a building a Ecommerce Application that is built using MERN Stack.
It uses REST API to allow connection between the client and the server so that the user will be able to sign up and then login using their personal credentials.
It has active product management and also handles orders.   
It uses Mongo DB to store the data and then do various tasks that the user want to perform.
Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format (typically JSON). User Authentication: Register and log in users. Product Management: Add, update, and retrieve product data. Order Handling: Manage customer orders. Each API endpoint will interact with the database and serve data in a structured format


### Milestone 1: Project Overview


The MERN stack is a popular set of technologies used for building full-stack web applications.The MERN stack is favored for its JavaScript-only approach, enabling developers to use a single language across the entire application

Mongo DB is used instead of SQL so that a large amount of data can be stored without storing them in the structured format.

We use REST API to handle the client and the server connection.


### Milestone 2: Project Setup

In this milestone, we created a login page using react and tailwind css. Then we linked it to the app.jsx using a loginPage.jsx in the pages folder.
Here, we learned about the differences between css and tailwind css and how to use it effectively.
To create this part, we used form to create the login page
1. Here we used input tag to store the user's email and also password
2. Forgot password is also done to change the password.
3. Also added remember me checkbox to store the password.


### Milestone 3: Project Setup 

In this milestone, we setup dedicated folders for organizing backend code like models,utils,config and middleware.
Then we initialized it with Node.js server and then created a server.js file.
Later, we connected MongoDB to our application.
Finally, we implemented basic error handling.

To do this,
1. In config, I also created a .env file where I wrote the database URL and also the PORT number
2. In middleware, we created auth.js, catchAsyncError.js and also error.js where we handle error like 
    - wrong mongo DB id
    - duplicate key error
    - wrong json web token error
    - token expired error,etc.
3. In the .gitignore file, I untracked node modules and also .env file. Ithe .env file is added so that we can maintain the security of the data stored in the cloud Mongo DB Atlas.
4. In Models, the user schema is declared in a way that the data can be scored in that way.
5. In utils, errorHandler.js is coded.

### Milestone 4: Creating User Model and Controller
In this Milestone,
1. We created Controllers folder, here we created user.js
2. Also created Models folder, here also we created user.js
3. Then we created a multer.js file.
4. We also installed bcryptjs and multer
5. In the models/user.js we created a user Schema.
6. In the controllers/user.js we defined a route in an Express application that is responsible for handling the creation of a new user. 
7. In multer.js, we wrote some basic multer.js code to store and create the filename for the file upload.

### Milestone 5: Frontend - Signup page

In this Milestone, we created the sign up page
1. Here the input tag takes the input of the user to take inputs of
    - User's first name
    - Last Name
    - Email
    - Password
    - Confirm Password
2. We used react-router-dom and react-hook-form to do user validation. We also used regex and also watch to see whether both passwords match or not.
3. We also implemented adding the profile picture function to add the user's profile image.
4. To implement this, I used useState to manage the state of the preview Picture
5. In the handlePic function, we created a URL for the image the user added.