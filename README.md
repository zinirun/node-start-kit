# node-start-kit
 Boilerplate for Node Express, Sequelize

# Start
1. Clone this repo
    ```bash
   git clone https://github.com/zinirun/node-start-kit
    ```
2. Setup yarn/npm packages
    ```bash
    yarn install # npm install
    ```
3. Happy hacking
   - Start express for development: `yarn dev # npm run dev`
   - Start express for production: `yarn start # npm run start`
     - For production start, You need to install PM2 globally `yarn global add pm2 # npm install pm2 --global`

# Packages
- cookie-parser
- cors
- dotenv
- express
- moment
- morgan
- mysql2
- sequelize

# Structure
- `/bin/server.js`: start express server
- `/controllers`: define your routers
- `/models`: define your database(MySQL)
  - You can define your tables in the same directory (reference at models/User.js)
- `./app.js`: define express server and middlewares
- `./.env`: define your environment variables