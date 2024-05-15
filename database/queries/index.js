import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

export async function getAllHotels(){
    const hotels=await hotelModel
    .find()
    .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
    .lean();

    return replaceMongoIdInArray(hotels);
}

export async function getHotelById(hotelId){

    const hotel=await hotelModel.findById(hotelId).lean();

    return replaceMongoIdInObject(hotel);
}

export async function getRatingForAHotel(hotelId){

    const rating=await ratingModel.find({hotelId:hotelId}).lean();

     return replaceMongoIdInArray(rating);
}

export async function getReviewForAHotel(hotelId){

    const rating=await reviewModel.find({hotelId:hotelId}).lean();

     return replaceMongoIdInArray(rating);
}