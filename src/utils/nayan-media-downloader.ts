
const { ytdown, ndown, tikdown, twitterdown,fbdown2 } = require("nayan-media-downloader")
const request = require("request")
const key = "Nayan" //dont change key

export const getTiktok = async (url:string) => {
	var result = await tikdown(url)
    return result

}

export const getYoutube = async (url:string) => {
	var result = await ytdown(url)
	return result
}

export const getFacebook = async (url:string) => {
	await fbdown2(url, key).then((result: any) => {
		const media = {
			title: Buffer.from(result.media.title).toString('base64'),
			hd: Buffer.from(result.media.hd).toString('base64'),
			sd: Buffer.from(result.media.sd).toString('base64')
		}
		console.log(media)
		return media
	}).catch((error:any) => {
		return error
	})
}

export const getInstagram = async (url:string) => {
	var result = await ndown(url)
	return result
}

export const getTwitter = async (url:string) => {
	var result = await twitterdown(url)
	return result
}