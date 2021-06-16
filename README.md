 ### Medium Like Blog - Backend 
 
 Medium Like Blog (backend) created with Node JS and Express and MySQL.  




#### Technology Stack: 
  
 **_NodeJS_**  (Platform) ,  **_Express_**  (Framework)  **_JavaScript_**  (Programming Language)  ,  **_MySQL_** (Database)  **_Sequelize_**  (ORM)  , **_Mocha_**  (Testing Framework)  , **_Swagger_**  (API documentation) 

#### Project Structure:  

We will structure our application using the controller, service, and, manager pattern so our app will be broken into the managers, services, and controllers. The  `Manager-Service-Controller`  pattern breaks up the business layer of the app into three distinct layers:

-   The  `manager class`  handles getting data into and out of our data store. A manager is used between the service layer and the model layer. For example, in the opportunityManager you would create methods that write/read a opportunity to and from the database.
-  The  `service class`  calls the manager class and can combine their data to form new, more complex business objects. It is an abstraction between the controller and the manager.
-   A  `controller`  contains very little logic and is used to make calls to services.



#### Unit Testing: 

- Currently we are working on the implementation of unit-tests.

- This will improve the our codebase & help to manage all the wierd cases.

- We are using Mocha for the unit-testing. We welcome you, for helping us to improve test casing.



#### How to Contribute :

-   Open source contributions are all about making changes to the project and pushing PRs to ensure that your contribution can be made visible in the final project.
    
-   Once you have browsed through the repo of the project you should glance at the tech stack required for this project.
    
-   Take a look at the existing issues or feel free to create your own issues!
    
-   Read the  Contribution Guideline very thoroughly to meet the expectations of the project.
    
-   Wait for the issue to be assigned to you after which you can start working on it.
    
-   Fork the Repo and create a Branch for the specific Issue that you are working upon.
    
-   Make your changes and create a Pull Request which will be promptly reviewed and suggestions would be added to improve it before merging.
    
-   Add Screenshots to help us know what the Script is all about.
    

#### Installation Instructions: 

> Please use NPM for installing and managing dependencies. If you use Yarn, make sure to run `prepare` script after installing packages: `yarn prepare`. This will install git hooks using husky.

clone the repository to your local machine

    $git clone https://github.com/<YOUR-GITHUB-USERNAME>/Medium-like-Blog-Backend.git

navigate to the project's directory

    $cd Medium-like-Blog-Backend

install all the relevant (dev) dependencies using npm

    $ npm install

Copy .env.example to .env 

start application

    $ npm start

Visit http://localhost:3030/ in your browser
