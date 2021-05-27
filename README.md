# Advertyzment

This is a demo website created as a assignment for frontend Intern at Advertyzement. It is made using React.js as well material-ui. 

View it live https://keen-jang-168fe2.netlify.app/

## What it contains
1.it contains simple User card grid layout having navbar.

2.it contains button in the navbar saying 'Get Users', which makes an API call to get the user data.

3.Uses https://reqres.in/api/users?page=1 to get data.

4.it also shows a loader while the API fetches the data.

## My Approach 

1. I started of with Basic React BoilerPlate. 

2. I then started thinking about what all various components i will be having and decided something like.  
    
    App.js ->  Home.js ->  Dashboard.js ->  Card.js

3. After That i started with component Home.js by setting of the navbar using material-ui.

4. i then created api.js and implemented getuser function to get data from the given api using axios.

5. After getting the data i started with the Dashboard component to reflect that in the ui for that i again used the material-ui grid system.

6. After that i Started of with card.js component for displaying every single user data on a material-ui Card.

7. After done with i started adding a spinner to show loading
