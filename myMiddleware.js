const myMiddleware = (config) => {
    // might set default options in config
    return ({
        before: async (handler, next) => {
            // might read options from `config`
            try {
                const { event } = handler;
                event.someShit = 1;
            } catch (err) {
                console.log('Failed: ', err.message);
            }
            return next();
        },
        onError: (handler, next) => {
            console.log("ERROR");
            console.log(handler.error)
            return Promise.resolve(handler.error);
        }
    })
}

module.exports = myMiddleware