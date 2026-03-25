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

    - Remove dependencies
        + Regular dependencies
            $ npm uninstall {{PACKAGE_NAME}}
        + Development dependencies 
            $ npm uninstall {{PACKAGE_NAME}} --save-dev
            $ npm uninstall {{PACKAGE_NAME}} -D

    - Tools
        + Generate Favicons (URL: https://favicon.io/)