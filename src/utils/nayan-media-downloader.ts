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
	var result = await fbdown2(url, key)
	return result
}

export const getInstagram = async (url:string) => {
	var result = await ndown(url)
	return result
}

export const getTwitter = async (url:string) => {
	var result = await twitterdown(url)
	return result
}

// getUrl("https://www.youtube.com/watch?v=FylHa4_neOA")
// getUrl("https://x.com/PicturesFoIder/status/1841465685588799572")
// getUrl("https://fb.watch/u_1yLxEJkX/")
// getUrl("https://www.instagram.com/reel/DAiIPdVzXra/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")
// getUrl("https://www.tiktok.com/@vonnyfelicia/video/7173541489467804955")

