const middy = require('@middy/core')
const myMiddleware = require('./myMiddleware')

const baseHandler = async (event, context, callback) => {
    console.log("Reached");
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            value: event.someShit || 'empty'
        })
    });
};

const handler = middy(baseHandler).use(myMiddleware())

module.exports = {
    handler
}