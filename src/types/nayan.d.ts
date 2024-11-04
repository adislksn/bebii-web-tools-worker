export interface AllResult {
	developer: string | null
	devfb: string | null
	devwp: string | null
	status: boolean | null
	data: {
		title: string | null
		low: string | null
		high: string | null
	} | null
}

export interface FBResult{
	developer: string | null
	devfb: string | null
	devwp: string | null
	status: boolean | null
	msg: string | null
	media: {
		title: string | null
		hd: string | null
		sd: string | null
	} | null
}

export interface TiktokResult {
	developer: string | null
	devfb: string | null
	devwp: string | null
	status: boolean | null
	data: {
		author: {
			id: string | null
			unique_id: string | null
			nickname: string | null
			avatar: string | null
		} | null
		view: number | null
		comment: number | null
		play: number | null
		share: number | null
		download: number | null
		duration: number | null
		title: string | null
		video: string | null
		audio: string | null
	} | null
}

export interface InstagramResult {
	developer: string | null
	devfb: string | null
	devwp: string | null
	status: boolean | null
	data: [
		{
			thumbnail: string | null
			url: string | null
		} | null
	] | null
}

export interface TwitterResult {
	developer: string | null
	devfb: string | null
	devwp: string | null
	status: boolean | null
	data: {
		HD: string | null
		SD: string | null
	} | null
}