JOBIFY (MERN - MongoDB, Express, ReactJS and NodeJS)

* Front-End
    - Create your Vite + React project
        $ npm create vite@latest client -- --template react
            > Use Vite 8 beta (Experimental)?: No
            > Install with npm and start now? No
        $ cd client
        $ npm install   // Install dependencies
        $ npm run dev   // Run app

    - Install dependencies
        + All libraries (Optional)
            $ npm install @tanstack/react-query axios dayjs react-icons react-router-dom react-toastify recharts styled-components
        
        + React-Router-Dom
            $ npm i react-router-dom
        + Styled Components
            $ npm install styled-components
        + React-icons
            $ npm install react-icons --save
        + Axios
            $ npm install axios
        + React Toastify
            $ npm i --save react-toastify
        + Day.js
            $ npm install dayjs

    - Remove dependencies
        + Regular dependencies
            $ npm uninstall {{PACKAGE_NAME}}
        + Development dependencies 
            $ npm uninstall {{PACKAGE_NAME}} --save-dev
            $ npm uninstall {{PACKAGE_NAME}} -D

    - Tools
        + Generate Favicons (URL: https://favicon.io/)
        + Cool Images (URL: https://undraw.co/)

* Back-End
    - Initialize the app
        $ npm inti -y
        $ node server       // Run single file
        $ npm run setup-project     // Setup project
        $ npm run dev               // Run app

    - Install dependencies
        + All libraries (Optional)
            $ npm install express nodemon dotenv mongoose express-async-errors express-validator http-status-codes bcryptjs jsonwebtoken concurrently cookie-parser dayjs morgan multer nanoid

        + Express.js
            $ npm install express --save
            $ npm install express@4.x --save        // ExpressJS Async Errors
        + Nodemon
            $ npm i nodemon
        + Morgan
            $ npm i morgan
        + DotENV
            $ npm install dotenv --save
        + NanoID
            $ npm i nanoid
        + Mongoose
            $ npm install mongoose
        + ExpressJS Async Errors
            $ npm install express-async-errors --save
        + HTTP Status Codes
            $ npm install http-status-codes --save
        + Express Validator
            $ npm install express-validator
        + Bcryptjs
            $ npm install bcryptjs
        + JSON Web Token
            $ npm install jsonwebtoken
        + Cookie Parser
            $ npm install cookie-parser
        + concurrently
            $ npm i concurrently
        + Multer
            $ npm install multer
        + Cloudinary
            $ npm i cloudinary

    - Remove dependencies
        + Uninstall a single dependency
            $ npm uninstall PACKAGE-NAME
        + Uninstall a dev dependency
            $ npm uninstall PACKAGE_NAME --save-dev

* Postman
    - Create Workspace > Black workspace | Click 'Next' > Name: Ax2cDev | Select workspace type: Internal | Click 'Create'
        + Create New Collection > Blank Collection > Name: store-api
            * Add a request > Name: Get Hello World | GET: http://localhost:5000/ | Click 'Send'
    
    - Variables in this request > Globals
        > URL         http://localhost:5000/api/v1
    
    - HTTP request
        > POST: {{URL}}/test                                            => Click 'Send'
            > Body > Row > JSON
                {
                    "name": "adriano"
                }
        > GET: {{URL}}/jobss                                            => Click 'Send' (Error middleware!!!)

        * Job (Click '...' > Add folder | Name folder: Job)
            + Get All Jobs
                > GET: {{URL}}/jobs                                     => Click 'Send'
            + Create Job
                > POST: {{URL}}/jobs                                    => Click 'Send'
                    > Body > Row > JSON
                        {
                            "company": "apple",
                            "position": "front-end",
                            "jobStatus": "pending",
                            "jobType": "full-time",
                            "jobLocation": "florida"
                        }
            + Get Single Job
                > GET: {{URL}}/jobs/{{JOB_ID}}                          => Click 'Send'
            + Update Job
                > PATCH: {{URL}}/jobs/{{JOB_ID}}                        => Click 'Send'
                    > Body > Row > JSON
                        {
                            "company": "huawei",
                            "position": "backed-end",
                            "jobStatus": "pending",
                            "jobLocation": "florida"
                        }
            + Delete Job
                > DELETE: {{URL}}/jobs/{{JOB_ID}}                       => Click 'Send'
        * Auth (Click '...' > Add folder | Name folder: Auth)
            + Create User
                > POST: {{URL}}/auth                                    => Click 'Send'
                    > Body > Row > JSON
                        {
                            "name": "adriano",
                            "email": "adriano@mail.com",
                            "password": "adriano123",
                            "lastName": "ayala",
                            "location": "my city"
                        }
            + Login User
                > POST: {{URL}}/auth/login                              => Click 'Send'
                    > Body > Row > JSON
                        {
                            "email": "adriano@mail.com",
                            "password": "secret123"
                        }
            + Logout User
                > DELETE: {{URL}}/auth/logout                           => Click 'Send'
        * Auth (Click '...' > Add folder | Name folder: User)
            + Get Current User
                > GET: {{URL}}/users/current-user                       => Click 'Send'
            + Get Application Stats
                > GET: {{URL}}/users/admin/app-stats                    => Click 'Send'
            + Update User
                > PATCH: {{URL}}/users/update-user                      => Click 'Send'
                    > Body > Row > JSON
                        {
                            "name": "adriano",
                            "email": "adriano@mail.com",
                            "lastName": "ayala",
                            "location": "my city"
                        }

* HTTP response status codes
    - 200 OK Ok
    - 201 CREATED Created
    - 400 BAD_REQUEST Bac Request
    - 401 UNAUTHORIZED Unauthorized
    - 403 FORBIDDEN Forbidden
    - 404 NOT_FOUND Not Found
    
* Mockaroo (URL: https://www.mockaroo.com/)
    File Name       Type            Options
    company         Company Name
    position        Job Title
    jobLocation     City
    jobStatus       Custom List     pending,declined,interview
    jobType         Custom List     full-time,part-time,internship
    createdAt       Datetime        01/01/2025  to 03/20/2026   format: ISO 8601 (UTC)

    # Rows: 100     Format: JSON    array: true     include null values: false

    Click 'GENERATE DATA' or 'PREVIEW'
    