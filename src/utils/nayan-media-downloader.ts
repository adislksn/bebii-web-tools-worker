
const { ytdown, ndown, tikdown, twitterdown, fbdown2 } = require("nayan-media-downloader")
const request = require("request")
const key = "Nayan" //dont change key
import { 
	type FBResult,
	type TiktokResult,
	type InstagramResult,
	type TwitterResult,
} from '../types/nayan'

export const getTiktok = async (url:string): Promise<TiktokResult> => {
	var result = await tikdown(url)
	if(!result.status){
		throw { msg: result.msg || "Video not found" }
	}
    return result
}
// TODO: Fix the return type of getYoutube
export const getYoutube = async (url:string) => {
	var result = await ytdown(url)
	if(!result.status){
		throw { msg: result.text || "Video not found" }
	}
	return result
}

export const getFacebook = async (url: string): Promise<FBResult> => {
	return await fbdown2(url, key).then((result:FBResult) => {
		if(!result.status){
			throw { msg: result.msg || "Video not found" }
		}
		return result
	}).catch((error:any) => {
		throw { msg: "Video not found" }
	})
}

export const getInstagram = async (url:string): Promise<InstagramResult> => {
	var result = await ndown(url)
	if(!result.status){
		throw { msg: result.msg || "Video not found" }
	}
	return result
}

export const getTwitter = async (url:string): Promise<TwitterResult> => {
	var result = await twitterdown(url)
	if(!result.status){
		throw { msg: result.msg || "Video not found" }
	}
	return result
}