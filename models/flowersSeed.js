require('dotenv').config();
const Flowers = require('./flowers')
const mongoose = require('mongoose')
mongoose.connect (process.env.DATABASE_URL)
    
const flowersSeedData = [
       {
        name: 'Orchid',
        description: 'Is one of the largest families of flowering plants from the genus Orchis.',
        img: 'https://i.imgur.com/P3YpU39.jpg',
        price: 7.50,
        qty: '12'
        },
        {
        name: 'Red Rose',
        description: 'Is a flowering plant of the genus Rosa, whose stems are armed with sharp prickles.',
        img: 'https://i.imgur.com/gucYguT.jpg',
        price: 8,
        qty: '12'
        },
        {
        name: 'Stargazer Lily',
        description: 'Are known for their fragrant perfume. Thy can grow to a height of 36 inches with a spread of 10 to 14 inches.',
        img: 'https://i.imgur.com/Q1nhvuX.jpg',
        price: 4.80,
        qty: '12'
        },
            
        {
        name: 'Sunflower',
        description: 'Are the most well-known species whose round flower heads in combination with the ligules look like the sun.',
        img: 'https://i.imgur.com/TB4o4Kh.jpg',
        price: 4.00,
        qty: '12'    
        },
        {
        name: 'Tulip',
        description: 'Is from the genus Tulipa, which are spring blooming perennial herbaceous geophytes.',
        img: 'https://i.imgur.com/peWwOG3.jpg',
        price: 5.75,
        qty: '12'
        },
            
        {
        name: 'Violets',
        description: 'Is from the genus viola. The most common violet is the blue violet.',
        img: 'https://i.imgur.com/VlDBDJd.jpg',
        price: 4.90,
        qty: '12'
        }, 

]
    

const flowersSeed = async () => {
  await Flowers.remove({})
    flowersSeedData.forEach((product, index) => {
    const instance = new Flowers();
    console.log("no", product)
    instance.name=product.name
    instance.description=product.description
    instance.img=product.img
    instance.price=product.price
    instance.qty=product.qty
    instance.save((err, res) => {
      console.log("yo", err, res)
  if(index == flowersSeedData.length - 1) {
    process.exit ()
  }
    })
  })
  }
 
  mongoose.connection
  .on("connected", () => { console.log("Connected to mongoose!")
  flowersSeed()
})
  .on("close", () => { console.log("mongoose disconnected") })
  .on("error", (error) => { console.log(error) });