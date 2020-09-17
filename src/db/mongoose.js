const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://user:felixjiang@cluster0.hh11q.mongodb.net/felix?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
