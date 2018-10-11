const express = require('express')
const app = express()
const activity = require('./api/activity/index')

app.use('/api/v1', activity)

// app.get('/', (req, res)=>{
//     res.send({
//         data :{
//             "hello" : "world"
//         }
//     })
// })

// app.post('/', (req, res) =>{
    
// } )

app.listen(process.env.PORT || 8000, () => console.log('I am running on ', process.env.PORT))