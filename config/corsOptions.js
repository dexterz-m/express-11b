const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500']

const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }
        else{
            callback(new Error("Not allowed"))
        }
    },
    optionsSuccesStatus: 200,
}

module.exports = corsOptions;