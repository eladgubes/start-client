console.log('hi');

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);


// app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}


const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const reviewRoutes = require('./api/review/review.routes')
const listRoutes = require('./api/list/list.routes')
const orderRoutes = require('./api/order/order.routes')
const connectSockets = require('./api/socket/socket.routes')



// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/list', listRoutes)
app.use('/api/order', orderRoutes)
connectSockets(io)





const port = process.env.PORT || 3030;
http.listen(port, () => {
    console.log('Server is running on port: ' + port);
});



