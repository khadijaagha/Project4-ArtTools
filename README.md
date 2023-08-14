# Art Tools ReadMe

**Description**


This was the final project of the course and was to be created using the MERN stack. I decided to make a web app to buy professional art supplies online. 


**Deployment link**

https://arttools-2d3ea3958a00.herokuapp.com/home



**Getting Started/Code Installation**

Download and Open in VS code

**Timeframe & Working Team (Solo/Pair/Group)**

We were given a time frame of a week and it was a solo project.


**Technologies Used**

The technologies involved were: MongoDB, Express, React and Nodejs, Postman API, Figma, LucidChart, Trello


**Brief**

☐ A working full-stack, single-page application hosted on Heroku.

☐ Incorporate the technologies of the MERN-stack:

MongoDB/Mongoose

Express

React

Node

☐ Have a well-styled interactive front-end.

☐ Communicates with the Express backend via AJAX.

☐ Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.

☐ Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.

☐ Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:
Consume data from a third-party API.

Implement additional functionality if the user is an admin.

Implementation of a highly dynamic UI or data visualisation.

Other, instructor approved, complexity/features.





**Planning**

Wireframes created on Figma:























Initially, I began the project with a phone screen version of my app, focusing on responsiveness as my previous projects lacked this feature. However, due to time constraints, I couldn't style the project to the level I desired. Nevertheless, I am committed to dedicating time after the course to refine and improve the visual aesthetics of the application.

For the design, I opted for a simple yet eye-catching approach, incorporating a yellow accent to add vibrancy. As evident in the first screenshot, I experimented with an offer banner on the home screen to capture users' attention. The process of creating this wireframe took longer than my previous ones, as I invested more time in researching user interface principles, particularly emphasising consistency across all pages, which I have successfully implemented in my wireframes.

In addition to consistency, I focused on other principles such as hierarchy and emphasising essential elements, exemplified through the design of the offer banner. By implementing these principles, I aimed to create an intuitive and user-friendly interface that enhances the overall user experience.

Moving forward, I am excited to continue working on this project post-course, refining the visual aspects and ensuring the user interface aligns perfectly with the envisioned design and user expectations. Through this experience, I have deepened my understanding of design principles, further empowering me to create compelling and user-centric applications in the future.




Entity Relationship Diagram (ERD) made using LucidChart

In this Entity-Relationship Diagram (ERD), I have meticulously planned and depicted the various data entities essential for the functionality of my app. The relationships between entities are primarily one-to-many, exemplified by the connection between a product and its associated reviews.
You'll notice that some data entities, represented in blue, are considered ice box features or entities that I have earmarked for further development. During the app development process, I prioritised dedicating my time and effort to the core data entities to ensure the foundational functionality and usability of the application.

Although the blue entities have been deferred for now, they are crucial aspects that will enhance the app's capabilities and user experience in the future. As the project evolves, I look forward to delving into these ice box features to expand the app's offerings and provide users with even more valuable and exciting functionalities.

By thoughtfully organising the ERD and making strategic decisions on where to focus my efforts, I have laid a strong foundation for the app's growth and development. As I progress, I am eager to explore these additional features, embracing the opportunity to continuously improve and enrich the application based on user feedback and evolving requirements.


Throughout the development phase, I employed Trello as my reliable project management tool, organising my tasks into three key categories: Ice Box, MVP, and Completed. This approach proved invaluable in keeping me on track and focused.

Within the Ice Box section, I prioritise my minimum requirements at the top and listed desired features below. This structure allowed me to maintain a clear understanding of what needed immediate attention and what could be addressed at a later stage.

As I progressed through tasks, I moved them to the MVP category, serving as a helpful reminder of my current focus. This system was particularly beneficial when managing multiple tasks simultaneously, ensuring that I stayed organised and productive.

One of the significant advantages of this approach was its visual aspect. Being a visual person, the ability to see my progress, as I moved completed tasks to the Completed section, provided a sense of accomplishment and motivation.
Thanks to Trello's practicality and my well-structured approach, I effectively managed the development process and achieved a cohesive and successful outcome for the project.

**Build/Code Process**



Products.js - controller function

This is an async function for updating a product in the database and checking if the id of the product is valid in line 66. If valid, it updates the corresponding product in the database with the data from the request body, and returns the updated product data as a response. If the id is not valid or no product is found with the provided id, the function returns an error response with an appropriate status code.
I was proud of this function as it went smoother than expected in terms of coding it. It also taught me to refer to documentation throughout, e.g. reading up on the .findOneAndUpdate() method.


Reviews.js - controller function 

This is an async function to create a review. Line 16, req.body.user = req.user._id; adds the user property to the request body and sets it to the _id of the user who is submitting the review. This identifies the user who created the review and associates it with their account. I was proud of this because it took me some time to understand the concept for req.body, so I was satisfied that I was able to include this in my function even though it may seem trivial. 

The function uses await to asynchronously find a product in the database with the _id provided in the request parameters (req.params.id). This product data is stored in the product variable. If the product is not found, the function responds with a JSON object containing an error message and a status code of 404, indicating that the product was not found.
 If the product is found, the review data from the request body is added to the product's review array using product.review.push(req.body). This likely associates the review with the specific product. The function then tries to save the updated product with the new review using product.save(). If the save operation is successful, the saved product data is stored in the savedProduct variable.
If the product is successfully saved, the function responds with a JSON object containing the saved product data and the status code 201, indicating that the review was created successfully and if it is not saved, the error message is logged into the console.








Tool Details Page - React 
This is the handleSubmit function I've developed to handle user reviews when they click on the add review button. While working on this piece of code, I encountered two crucial learning experiences. The first issue I encountered was related to the naming of the review content in line 62. Through this, I gained a deeper appreciation for the significance of correctly matching keys in the back-end model to the front-end. Understanding this connection has been invaluable in ensuring smooth data flow between both ends of the application. These learning moments have been incredibly rewarding and have reinforced my understanding of best practices in coding and maintaining a well-functioning application.

Secondly, I gained valuable insights into testing backend APIs using tools like Postman or REST Client in VS Code. Although I could add reviews in the backend, I encountered an authorisation error in my Chrome Development Tools console. By realising that the JSON Headers object was missing the necessary authorisation token, I was able to fix the issue successfully by grabbing the token in line 68.
These learning opportunities have been rewarding and have reinforced my commitment to continuous improvement in my coding journey.


**Challenges**


My main challenge was being too ambitious with the time I was given and my capacity for what I could achieve in that time. I wanted to get my shopping cart done as well but because I spent a lot of time on particular functions or areas of code that I needed to research and took time to write I wasn't able to complete this functionality that I think is very important for my app. 

Lastly, most of my challenges were mentioned previously in my code process section where some functions took longer as I consolidated a lot of my learning/understanding during development. Some things that I spent a lot of time understanding include, token based authentication, API and fetching data from API, React concepts such as useParams(), JSON format/headers. 



**Wins**


Personally I am happy with the direction my UX is going through,  I feel I have a greater understanding of what to emphasise or not to lead the user’s eye so they can fluidly interact with a web app. Additionally, I have a greater understanding of the backend even more such as important concepts like req.body, req.params. Additionally, in the process of building this web app, I consolidated my understanding of the JSON format using JSON.stringify( ) in react components to send a request as well as adding the authorization token in the JSON header as mentioned previously.

Overall, from doing this project, my wins mostly consist of gaining a clearer understanding of different concepts as implementing them independently teaches one a lot.

**Key Learnings/Takeaways**


This project proved to be an invaluable learning experience for me, allowing me to gain significant insights and improve my skills in various areas. Notably, my understanding of NodeJS and Express saw substantial growth compared to my previous project, as I tackled more complex challenges and implemented advanced functionalities.
Moreover, my proficiency in React reached new heights as I delved deeper into essential techniques like Hooks and useParams(). Applying these concepts in my own project, tailored to suit my specific requirements, further consolidated my grasp of their usage and benefits.

I had the opportunity to further consolidate my understanding of user experience (UX) principles, particularly in terms of designing mock-ups on Figma. Figma served as an invaluable tool for creating interactive and visually appealing prototypes, allowing me to experiment with various design elements and layout options.

Moreover, this project was particularly enjoyable as it provided me with a profound understanding of various concepts. The experience instilled in me a strong sense of confidence and motivation, inspiring me to pursue my own side projects after its completion.


**Bugs**

The product details loading time could be improved for a smoother user experience.
The wishlist and cart functionalities show potential and can be further enhanced for a more comprehensive user experience.

**Future Improvements**

Overall I am satisfied with what I was able to achieve in the timeframe given but there are improvements I would like to make such as:

Styling, making it more responsive to other screen sizes i.e. phone screen.
Wishlist and Shopping Cart Functionality 
Routing of the page so that a non user can access the homepage and browse but cannot add items to wishlist/cart or add a review
Implement AWS to upload images 




