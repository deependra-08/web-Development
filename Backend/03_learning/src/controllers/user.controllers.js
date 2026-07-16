 import { asyncHandler } from "../utils/asyncHandler.js";
 import {ApiError} from "../utils/ApiError.js";
 import {User} from "../models/user.models.js";
 import {uploadOnCloudinary} from "../utils/cloudinary.js";
 import { ApiResponse } from "../utils/ApiResponse.js";

 const registerUser = asyncHandler(async (req,res)=>{
    const {fullname,email,username,password}=req.body
    console.log("email: ",email);

    if(
        [fullname,email,username,password].some((field)=>
        field?.trim()==="")
    ){
        throw new ApiError(400,"All Fields are Required")
    }
    const existedUser = await User.findOne({
        $or:[{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with this email and username already exist")
    }
    console.log(req.files);
    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    // const coverImageLocalpath = req.files?.coverImage?.[0]?.path || req.files?.CoverImage?.[0]?.path;

    let coverImageLocalpath;
    if(req.files && Array.isArray(req.files.coverImage) &&req.files.coverImage.length>0){
        coverImageLocalpath = req.files.coverImage[0].path
    }

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }

    let avatar = null
    let coverImage = null

    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_CLOUD_NAME !== '<your_api_secret>' && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET && process.env.CLOUDINARY_API_SECRET !== '<your_api_secret>') {
        avatar = await uploadOnCloudinary(avatarLocalPath)
        coverImage = await uploadOnCloudinary(coverImageLocalpath)
    }

    if (!avatar) {
        avatar = { url: '/default-avatar.svg' }
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering a user");
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered Successfully")
    )
 })

 export default registerUser