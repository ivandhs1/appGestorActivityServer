const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/app-gestor-activitys", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err));
