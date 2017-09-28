###### Chingu > Bears > Team 5
#### Build to learn Kalicos

**Who is this application for?**  
The target audience is people who want to donate or help charities, without navigating through the confusion and clutter.  Shalisha Hammond spent several years to solve this problem by manually curating data on various nonprofits, and currently has 22,000 nonprofits from around the world stored in Google Maps.  The aim is to make a quick synopsis on nearby charities and causes available to people nearby.

**What problem will this application attempt to solve?**
At the moment, many people would like to reach out and help others.  However, information on how to help in many charities is confusing and unclear.  Kalicos aims to harvest this data, while making it quickly accessible and actionable. 

**How will this application solve this problem?**  
The application will provide an easy way to search for particular charities, while presenting the most relevant information on each charity that is found - location, brief summary on what the charity does, and needs.

**What is the minimum viable product?**  
The data in [Kalicos](http://www.kalicos.com) will be moved from the google maps api to an accessible database.  The application will provide an easy interface for searching through the data by location, organization type, and need, as well as providing an interface for viewing details on each charity, including the location in Google Maps.  Currently the map for all of the charities takes a while to load, and storing them in a CRUD database will cut down on load times.  Providing an api will allow other services to easily make use of the data. 

**What are some stretch goals for the project?**
* Gamification - Provide ways for people to track which charities/causes they donated to or nonprofits they visited.  Shalisha actually has several fliers where she attempted this idea on paper, where a summary for some charaties in a particular city were hand curated, with check boxes for each one. 
* Ecommerce - Provide a way for people to easily donate resources to the charities they find with the platform.

**Tech Stack**
* Mongodb
* Express
* React
* Node.js

**Running Locally**
for instructions on setting up the REST server locally, see the [server README](./server/README.md#Installing and Running Locally)