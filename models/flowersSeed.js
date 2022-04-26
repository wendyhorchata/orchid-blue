require('dotenv').config();
const Flowers = require('./flowers')
const mongoose = require('mongoose')
mongoose.connect (process.env.DATABASE_URL)
    
const flowersSeedData = [
       {
        name: 'Orchid Galore',
        description: 'Spark a vision in their eyes with gorgeous blooms that are sure to win them over! Show them how much you care with bells of Ireland, green trick dianthus, and white orchids',
        img: 'https://i.imgur.com/VytCBgE.jpg',
        price: 80.00,
        qty: '12'
        },
        {
        name: 'Love Roses',
        description: 'This vase of brilliant red roses is an elegant and natural way to say, "I love you." Truly a classic for a reason, these dozen roses will turn the romance all the way up!',
        img: 'https://i.imgur.com/yxnQrMc.jpg',
        price: 90.00,
        qty: '12'
        },
        {
        name: 'Stargazer Lily',
        description: 'This exquisite bouquet is a clear beauty! With picturesque red stargaze Lilys, ravishing white hydrangeas, Timeless and classic, this graceful bouquet is perfect for any celebration or season!',
        img: 'https://i.imgur.com/aDkRTpX.jpg',
        price: 60.80,
        qty: '12'
        },
            
        {
        name: 'Sunny Escape Flower Arrangement',
        description: 'Bring home the beauty of sunflowers. This arrangement is bursting with bright sunflowers and yellow button poms. It is perfect for a pick-me-up or to let someone know they are your sunshine!',
        img: 'https://i.imgur.com/wW3yIT0.jpg',
        price: 49.99,
        qty: '12'    
        },
        {
        name: 'Tulip Trio',
        description: 'This flawless and colorful arrangement is sure to impress! You can not go wrong with these breathtaking lavender, pretty pink, and wondrous yellow tulips. They are sure to bring life, light, and happiness to any room or occasion!',
        img: 'https://i.imgur.com/kIXu6GD.jpg',
        price: 50.75,
        qty: '12'
        },
            
        {
        name: 'Very Violet Bouquet',
        description: 'This stunning arrangement is a purple lovers dream! Featuring lovely purple mini carnations, lavender spider mums, fuchsia alstroemeria, and more, Very Violet is a regal display of purple. Surprise someone you love with this beauty today!',
        img: 'https://i.imgur.com/Xt1iKwg.jpg',
        price: 40.00,
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