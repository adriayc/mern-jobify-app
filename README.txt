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
        + Nodemon
            $ npm i nodemon

    - Remove dependencies
        + Uninstall a single dependency
            $ npm uninstall PACKAGE-NAME
        + Uninstall a dev dependency
            $ npm uninstall PACKAGE_NAME --save-dev

* Postman
    - Create Workspace > Black workspace | Click 'Next' > Name: Ax2cDev | Select workspace type: Internal | Click 'Create'
        + Create New Collection > Blank Collection > Name: store-api
            * Add a request > Name: Get Hello World | GET: http://localhost:5000/ | Click 'Send'
    
    - HTTP request
        * Test request
            > POST: http://localhost:5000/                                          => Click 'Send'
                > Body > Row > JSON
                    {
                        "message": "hello world"
                    }
