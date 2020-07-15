# Drone Challenge

Bob's Epic Drone Shack Inc. manufactures drones. They have made an API available at bobs-epic-drone-shack-inc.herokuapp.com listing all of their products and providing information about these products. The API is poorly documented, and fails frequently with a variety of status errors. The documentation lists the following routes:

GET -> /api/v0/drones

GET -> /api/v0/drone/:id

No other documentation is provided.

1. Using tools of your choice, build a UI which lists the results of GET -> /api/v0/drones in a readable manner.
1. The API is unstable and has a high failure rate. You are tasked with building an integration that masks this from the end user. Your solution should be reliably demoable despite the broken API.
1. (Bonus - only attempt if you have time): The API returns drone crash statistics. Build a UI which allows you to filter the drones by crash rate range (for example: between 0-10%).

## Submission

* Key assumptions made
    in the table I have assumed that all of the data recieved from the API shares the same properties.
    I have also assumed that the fetch request would eventually come back successful.
    
 * What technical compromises have I made
    Not handling the errors on an individual basis. Instead opted to continuous retry the fetch request until successful which could be dangerous if something changes in the API causing it to not work at all. To solve this I would add a maximun amount of retries the fetch request can make before logging the most common issue.
    
To run the code, clone a copy of this repository into your terminal and in your terminal cd into the folder, then:
1. npm init
2. npm start


You could use this API to help calculate risk levels of a type of drone based on its crash rate.
