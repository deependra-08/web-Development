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
    const existedUser = User.findOne({
        $or:[{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with this email and username already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalpath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalpath)

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }

    const user = await User.create({
        fullname,
        avatar:avatar.url,
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