const express = require('express')
const app = express()
const router = require('./modules')
const path = require('path')
const PORT = process.env.PORT || 3000;
//middilweares
app.use(express.json())
app.set("views", path.join(__dirname, "views"));
app.use('/assets' , express.static(path.resolve(__dirname , 'public')))
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended: true}))
app.use( router)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
}) 