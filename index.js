const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubName',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn username?',
            name: 'linkedIn',
        },
    ])
    .then((response)=>{
        fs.writeFile(`${response.userName}.html`, `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Contact Me</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">Hi! My name is ${response.userName}</h1>
                  <p class="lead">I am from ${response.location}</p>
                  <h3>My information <span class="badge badge-secondary">Contact Me</span></h3>
                  <ul class="list-group">
                    <li class="list-group-item">My GitHub username is: ${response.githubName}</li>
                    <li class="list-group-item">My LinkedIn is: ${response.linkedIn}</li>
                  </ul>
                </div>
            </div>
        </body>
        </html>`, (err) => {
            if (err) {
                throw err
            } else {
                console.log("html created")
            }
        })
    });