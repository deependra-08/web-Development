import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export const uploadOnCloudinary = async (localFilePath) =>{
    try{
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        console.log("File is Uploaded on cloudinary",responce.url);
        fs.unlinkSync(localFilePath)
        return responce;
    }
    catch(error){
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
}

export default uploadOnCloudinary;