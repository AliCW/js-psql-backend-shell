# js-psql-backend-skeleton

JS backend using PSQL &amp; express


Clone the repo

    git clone https://github.com/AliCW/js-psql-backend-shell.git

Install the required packages

    npm install

Start the backend

    npm start

Setup environment variables `.env.test`, `.env.development` & `.env.production` & modify /db/seeds/setup.sql to match the database names set in environment variables.

Create the databases

    npm run setup-dbs

Add to /data/development-data to create a data set & index file, then modify seed.js to accomodate for the new data & change the target database in connection.js. Once the data set is created, change the /db/seeds/run-seed.js file to select which data set to seed & run the below

    npm run seed

The default IP is set to 127.0.0.1:9090

Query the database & paste the result to file with the below command.

    npm run query
