const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


//Define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engines and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res)=> {
    res.render('index', {
        title: 'Weather',
        name: 'Vishal'
    })
})

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'About',
        name: 'Vishal'
    })
})

app.get('/help', (req, res)=> {
    res.render('help', {
        title: 'Help',
        name: 'Vishal'
    })
})
app.get('/weather', (req, res)=> {
    res.send('Weather')
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        message: 'Article not found'
    })
})

app.get('*', (req, res)=> {
    res.render('error', {
        message: '404 Page not found'
    })
})


app.listen(3000, ()=> {
    console.log('Server started on port 3000!')
})