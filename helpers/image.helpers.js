const fs = require('fs') 

exports.saveImage = async (image, slug ,path) => {
    const nameFile = `${slug}.jpg`;
    try{
        image.mv(`./public/images/${path}/${nameFile}`)

        return `/images/${path}/${nameFile}`
    }catch(err){
        return {
            status: 400,
            message: "Failed Upload Image"
        }
    }
}

exports.deleteImage = async (image) => {
    try{
        fs.unlinkSync(`./public${image}`)
    }catch(err){
        console.log(err)
    }
}