// all of our logic for the home page
// importing our Models to speak to our database to reference our Schema, Models

const ItemList = require('../models/itemlist')

// exporting our database items so we can reference whenever they are called.
// async function so they can wait for the database to become available to wait for a response.
module.exports = {
    getIndex : async (req, res) => {
        try {
            const items = await ItemList.find()
                // entire list in the collection and sending into a bundle to render to index.ejs
                res.render("index.ejs", {itemList: items})
            
        }catch(err){
           if (err) return res.status(500).send(err)
        }
    },
    // create an item
    createItem: async (req,res) => {
        const newItem = new ItemList({
            textinput:  req.body.textinput,
            numinput: req.body.numinput
        }
        )
        try{
            await newItem.save()
            console.log(newItem)
        }catch(err){
            if (err) return res.status(500).send(err)
            res.redirect('/')
        }
    }
}