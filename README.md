# bigelow

a website for the 🅱️igelow house

http://bglw.org

## how to run
first, go to root directory and install dependencies
`npm install`

if you don't have npm yet, use `nvm` to install it.

by that, I mean run `nvm install node` not 'npm'

### backend

we use serverless for the bigelow backend. `npm install -g serverless`

to run the backend locally, `cd` into the bigelow-service directory and run `npm install`. then, run `serverless offline`

you need the right credentials to be able to run the lambda locally. Update your .env file with AWS credentials to your IAM user in scott's AWS account in the same format as the .env.sample file.

### frontend

we use webpack dev server to serve the bigelow front end with hot reload.

to run the frontend, navigate to the root directory and run `npm start`. Then navigate in your browser of choice to http://localhost:8080 .

to bundle the frontend and upload to s3, run `npm run build`

## rules

make sure it actually builds before committing it

pull before push

bigelow boys are the best in the business
