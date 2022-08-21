# E-store React.js Project

## About The Project - Non-technical Description

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
![image](https://user-images.githubusercontent.com/47693700/185776114-8151ee89-b5c6-4819-ac57-2eea9e3341ad.png)


These users have access to the following:

1. Home -> Main page pointing to the initial appearance of the project. Contains information about the offered goods as well as the possibility to redirect to other pages.
2. Cart -> Shows the current basket with selected items. The non-registered users can only review, but without finalizing the purchase.
3. Orders -> The page opens the Log In form for user login / registration.
4. Login -> The page opens the Log In form for user login / registration.
5. Contact-> A page giving contact information as well as the option to sent an email to the admin of the platform.

## Private part
This part of the project is designed for registered users. These users have access to the following:

1. Home -> Main page pointing to the initial appearance of the project. Contains information about the offered goods as well as the possibility to redirect to other pages.
2. Cart -> Shows the current basket with selected items. The registered users can review and complete the order by going to the payment information section.
3. Orders -> Here the user can see a list of his orders.
4. SignOut -> Logout form from the current profile.
