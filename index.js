const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 3000;
const app = express();
const url = "https://booking.ibomair.com/vars/public/b/FlightCal.aspx?VarsSessionID=c119df58-6e61-4af3-bba4-d32d9c0ef06f"
const  getData= async ()=>{
    try {
      const {data} = await axios(url)
        const html = data
        const prices = []
    //   console.log(html)  
    const $ = cheerio.load(html)
    let key = 1
    $(".small-price-tab",html).each(function(){
       const price = $(this).text()
       
       let pac = "price"+key
       prices.push({pac :price
    ,key:pac})
       key++
    //    console.log(prices)

    })
    $(".fare-price-small",html).each(function(){
        const price = $(this).text()
        
        let pac = "pri"+key
        prices.push({fare :price
     ,key:pac})
        key++
        console.log(prices)
 
     })
    } catch (error) {
        
    } 
}
getData()


app.listen(PORT, () => console.log(`running on port ${PORT}`));
