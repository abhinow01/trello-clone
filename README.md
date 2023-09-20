# Questions 

## Scenario: User can create and edit stages for a particular board
## Tables and API Endpoints to Add:
#### Table: Stages
## API Endpoint for Stages:
POST /api/boards/{boardId}/stages: This endpoint will allow a user to create a new stage for a specific board.
PUT /api/boards/{boardId}/stages/{stageId}: This endpoint will allow a user to edit an existing stage for a specific board.
Tables and API Endpoints to Update:
Table: Boards
## API Endpoint for Boards:
PUT /api/boards/{boardId}: This endpoint will need to be updated to allow users to modify the stages associated with a board.
## Explanation:
With this change, users can now create and customise the stages for their task boards. The addition of the Stages table and corresponding API endpoints will enable users to manage the stages effectively. The PUT /api/boards/{boardId} endpoint will need to be updated to allow users to modify the stages associated with a board.

# Scenario: Users can comment on tasks
## Tables and API Endpoints to Add:
## Table: Comments
## API Endpoint for Comments:
POST /api/tasks/{taskId}/comments: This endpoint will allow a user to add a comment to a specific task.
## Tables and API Endpoints to Update:
## Table: Tasks
API Endpoint for Tasks:
GET /api/tasks/{taskId}: This endpoint will need to be updated to include the comments associated with a task.
Explanation:
In this scenario, users can now add comments to tasks. To facilitate this, a new Comments table will be added to store comments associated with tasks. The API endpoint POST /api/tasks/{taskId}/comments will allow users to add comments to a specific task. Additionally, the GET /api/tasks/{taskId} endpoint will need to be updated to include the comments associated with a task, providing users with access to task-related comments.
# Error Handling:
For error handling, the application can implement the following :
1. Use appropriate HTTP status codes to indicate the success or failure of an API request.
2. Provide descriptive error messages that give users and developers meaningful information about what went wrong.
3. Implement logging to record details about errors for debugging purposes.
4. Validate user input on both client and server sides to prevent invalid data from being processed.
5. Use a global error handling middleware to catch unhandled errors and respond with an appropriate error message.
6. Implement security measures such as input sanitization, parameterized queries, and authentication to prevent security vulnerabilities.
7. Provide user-friendly error messages on the UI to guide users on how to rectify the issue.

