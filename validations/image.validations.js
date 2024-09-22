exports.imageValidations = (req) => {
    console.log(req.files);
    if(!req.files) {
        return {
            error: false,
            message: "tanpa edit foto profile"
        }
    }else{
        const image = req.files.image;
        const imageExtension = image.name.split('.').pop();
        const allowedExtensions = ['jpg', "png", 'jpeg'];
    
        if(!allowedExtensions.includes(imageExtension)){
            return {
                error: true,
                message: "Only jpg, png, and jpeg are allowed"
            }
        }
    
        return {
            error: false,
            message: "Image is valid",
            data: imageExtension
        }
    }
}