# E-store React.js Project

## About The Project:

The project is an online platform for shopping cosmetics and makeup, borrowed from the sites of https://makeup.bg/ and https://douglas.bg/.
This project was created by Anastasia Sirakova for the purposes of React. js Softuni Course Retake.


## Available Scripts to start the project:
1. `npm install`
The npm install installs all modules that are listed on package. json file and their dependencies. 
2. `npm start`
Runs the app in the development mode.

## Public part
This part of the project is designed for non-registered users. 
It represents the home page of the site with information about the offered products, active promotions and contacts.

![image](https://user-images.githubusercontent.com/47693700/185776005-9eba3486-5206-42d6-b8f4-619a8c640120.png)
![1](https://user-images.githubusercontent.com/47693700/185776155-483a80cf-fe3d-4ef1-977d-a755f5fc2493.jpg)


These users have access to the following:

1. Explore -> Shows all offered products with the ability to filter and sort by certain criteria.
2. LogIn -> Login option for registered users.
3. Register -> Registration form for new users who do not have a registration.
4. Shopping basket -> displays the products that have been selected by the customer.
5. Shopping bag -> link to the login menu

![image](https://user-images.githubusercontent.com/47693700/185776243-9ae49d28-83d0-4cab-82a4-405b5d322795.png)

## Private part
This part of the project is designed for registered users. These users have access to the following:
test login data:
![image](https://user-images.githubusercontent.com/47693700/185776323-a8f0dd8f-1057-4a03-adbf-b04d7a5f435c.png)
An option to log out of the account is added when the user is logged in.

Users panel -> After successfully logging into the site, the customer can shop for the selected products. If he chooses products without logging in, he must log in when trying to complete the order.
Admin panel -> 
![image](https://user-images.githubusercontent.com/47693700/185776361-42512b25-482a-4ba8-97a6-a0890b24a863.png)

The administrator has additional functions:
After logging in with administrator data, the site redirects to an information board with a graph of registered users by month, last registered user and orders placed.
There are additional menus visible only to him:
1. Products -> possibility to add, correct and delete products.
2. Users -> possibility to enter, correct and delete users.
