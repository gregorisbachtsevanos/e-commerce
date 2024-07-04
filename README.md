# E-Commerce
E-Commerce is a robust and feature-rich e-commerce application built with React and Firebase. It provides a seamless shopping experience with secure authentication, product browsing, and a fully functional shopping cart.

Table of Contents\
Features\
Installation\
Usage\
Project Structure\
Contributing\
License\
Features\
User Authentication with Firebase\
Browse products by categories\
Product details and reviews\
Add to cart and checkout\
Order history and tracking\
Responsive design\
Installation
To get started with E-Commerce, follow these steps:

Clone the repository cd into the progect:
```
cd e-commerce
```

Install dependencies:

```
npm install
```
Set up Firebase:

Create a Firebase project at Firebase Console.
Add a web app to your Firebase project.
Copy your Firebase config object.
Create a .env file in the root of your project and add your Firebase config:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
Start the development server:

```
npm start
```
The app should now be running on http://localhost:3000.

Usage
Sign Up / Login:

Users can sign up or log in using their email and password.
Browse Products:

Users can browse through a list of products organized by categories.
View Product Details:

Users can click on a product to view its details, including price, description, and reviews.
Add to Cart:

Users can add products to their cart and proceed to checkout.
Checkout:

Users can complete their purchase by providing shipping information and payment details.
Order History:

Users can view their order history and track the status of their orders.
Project Structure
