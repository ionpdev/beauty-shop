const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if(process.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.post('/payment', (req, res) => {
    const body ={
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'GBP'
    }

    stripe.charges.create(body, (stripeRes, stripeErr) => {
        if(stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else {
            res.status(200).send({ success: stripeRes })
        }
    })
})

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
 
app.use(expressCspHeader({
    directives: {
        'default-src': [SELF],
        'script-src': [SELF, INLINE, 'somehost.com'],
        'style-src': [SELF, 'mystyles.net'],
        'img-src': ['data:', 'images.com'],
        'worker-src': [NONE],
        'block-all-mixed-content': true
    }
}))

app.listen(port, error => {
    if(error) throw error
    console.log('Server running on port ' + port)
})