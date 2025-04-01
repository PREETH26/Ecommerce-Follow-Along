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


### Milestone 6: Connect

In this Milestone
1. We learned how to encrypt data using bcrypt before saving.
2. We also learned how to store user's data to the database without the problem of them getting lost.
3. We also learned how to connect backend to frontend.
4. All the frontend part we have done was later connected to the backend, so that the profile image the user sends will be stored in the uploads folder.
5. We also managed data using json web tokens.


### Milestone 7: MongoDB connection 

In this Milestone,
1. Understand how to validate user credentials during login.
2. Learn how to compare the encrypted password with the user’s input.
3. The user provides their email/username and password on the login page.
4. The backend retrieves the user record based on the provided email/username.
5. If the user is not found, return an error: "User does not exist."
6. Process the user's input password using the same hashing algorithm (e.g., bcrypt).
7. Compare the resulting hash to the stored hashed password.
8. If they match, the user is authenticated; if not, send an error.


### Milestone 8: Home Page creation

In this Milestone,
1. Create a card component.
2. Display those cards on the products page.
3. A single card component that accepts product details as props.
4. Array mapping to iterate over the product list and render a card for each product.
5. Reusable card component with props for product details (e.g., name, image, price).
6. A grid layout or flexbox for displaying multiple cards neatly.
7. A home page with a route connecting to app.jsx.


### Milestone 9: Product Creation Page

In this Milestone,
1. Learned how to create a form that will take all the details of product
2. Learned how to take multiple images as input.
3. Creating the page using Tailwind CSS and React JS.
4. Form creation using useState.
5. And styling it accordingly using Tailwind CSS


### Milestone 10: Connecting to Mongo DB

In this Milestone,
1. Learned how to write product schema using mongoose
2. Learned how to create an end point to validate and store product details in mongodb.
3. Get about 10 images from the user and post it to backend.
4. Use Multer to store the images in the Product folder.
5. Build a POST endpoint to receive product data.
6. Validate and save the product details to MongoDB.


### Milestone 11: Dynamic Product Card

In this Milestone,
1. To write an endpoint that will send data from extract and send data from mongodb.
2. To receive data at frontend -How to display that data dynamically using product card created earlier.
3. Change a bit of data in Multer.js
4. Dynamically add the created products to the home page.
5. View the data from the main page.


### Milestone 12: Dynamic Filtering

In this Milestone,
1. To write an endpoint that will send data by filtering with my mail and send data from mongodb.
2. To receive data at frontend -How to display that data dynamically using product card created earlier.
3. The user can give their email, and the products from that email can be seen.
4. We create a new page myProducts to show the products of the user.
5. We update product.js in the backend to create,save and show the product.


### Milestone 13: 

In this Milestone,
1. Write an endpoint that will update the existing data in MongoDB.
2. Auto fill the form with previous data and give option to edit.
3. We use router and post method.
4. The entire data and also part of data can be changed.
5. frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save.


### Milestone 14:

In this Milestone,
1. Write an endpoint that delete the product with specific ID from MongoDB.
2. We use routers to delete the product
3. In frontend we will add an delete button to the product card.
4. When click on delete button we will send the product id to server endpoint.
5. After deleting the product will be removed from user's page.


### Milestone 15: Nav Bar

In this Milestone,
1. Creating and Nav component.
2. Reusing the same component in multiple pages.
3. Create an new Nav component with links to all pages:
    - Home
    - My-products
    - Add product
    - cart
4. Adding the nav component to all the pages and make the navigations to all this pages smooth and easy.
5. Making the Navbar responsive to all screen sizes.


### Milestone 16: New Product Page

In this Milestone,
1. Create an product info page that display all the product data and choose quantity and add to card button.
2. New page to display each product.
3. Adding quantity and add to card button.


### Milestone 17: Cart

In this Milestone,
1. Edit the user schema to store cart products .
2. Write an end point to receive the product details and store in database.


### Milestone 18: Cart continuation

In this Milestone,
1. Create an endpoint to receive request from cart page.
2. Create an backend endpoint to fetch all the products inside cart with user mail.


### Milestone 19: Cart Page 

In this Milestone,
1. Create an cart page that display the products inside cart using endpoint that we used in the previous milestone.
2. Adding + and - buttons to increase or decrease the quantity of the products.
3. Also write an endpoint to increase and decrease the quantity.
4. Creating cart frontend page and display the products.
5. Using PUT method to update the data.


### Milestone 20: Profile Page 

In this Milestone,
1. Create and backend endpoint that will send all the user data using mail.
2. Create an frontend profile page that will display all the user data.
3. Display profile photo, name, mail and addresses.

### Milestone 21: Address Page 

In this Milestone,
1. Create an frontend form that will will take address.
2. Take country, city, address1, address2, zip code, address type
3. Create an state that will store input address
4. Create address form frontend page
5. when we click on add address in profile it should navigate to this form page.

### Milestone 22: Add Address

In this Milestone,
1. Create an endpoint that will receive the address from address form in frontend.
2. Add the address to the address array inside user collection.
3. Display the address in the Profile section.


### Milestone 23: Place Order

In this Milestone,
1. Add an button inside cart called "Place order".
2. Create an select address page where we will display all the address and ask to select delivery address.
3. Write mongoose schema for storing orders details.
4. Create an placeorder button inside cart page and navigate to select address page when clicked.
5. Create and select address page that will display all the available address and have an option to select one address.
6. Write an backend endpoint that will send all the addresses of the user.


### Milestone 24: Order Confirmation

In this Milestone,
1. Create an order conformation page.
2. Display all the products we are ordering.
3. Display the address user selected to deliver.
4. Display the total value of the cart.
5. Place order button at the bottom.


### Milestone 25: Place Order Backend

In this Milestone,
1. Create an endpoint that will receive the products, user, address details.
2. Get the mail of the user using that you need to retrive the _id of the user.
3. For each product the order will be different with same address.
4. Using order schema we created earlier we will store order details in mongodb order collection.
5. The page will finally lead to the success endpoint if Successfull.


### Milestone 26: Backend Endpoint

In this Milestone,
1. Create an endpoint that will receive the user mail.
2. Get the mail of the user using that you need to retrive the _id of the user.
3. Use the _id to get all the orders of that user.
4. Send all the users orders in the response.
5. Also do Error management.


### Milestone 27: My Orders Page

In this Milestone,
1. Create an my-orders page.
2. Send a get request to my-orders endpoint that we created in previous milestone.
3. Send user mail in to endpoint to get all the user orders.
4. Display all the user orders.
5. Add my-orders page in navbar for better navigation.


### Milestone 28: Cancel the placed orders

In this Milestone,
1. In my-orders page for every order add cancel order button.
2. If the order is already canceled this button should not be displayed.
3. Create an endpoint that will receive the order-id.
4. Get the order using this id and mark the status canceled and save.
5. We update the order.js controller to update the changes.


### Milestone 29: Payment

In this Milestone,
1. Using PayPal API in our program.
2. Integrating online payments.
3. Making sure it works without errors.

### Milestone 30: Pay Pal

In this Milestone,
1. Creating PayPal account and getting the UserID inside sandbox account.
2. Implementing online payment using PayPal API using the client key you created earlier.
3. Downloading NPM package called react-paypal-js that will provide an component called PayPalScriptProvider which will display online payment methods like credit or debit card.

### Milestone 31: Global State Management

In this Milestone,
1. Using redux for global state management.
2. Implementing redux store to store all global states.
3. Installing Redux and using it fro email in Signup and Login.