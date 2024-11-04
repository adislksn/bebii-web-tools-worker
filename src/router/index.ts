import { type Express, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { 
    getTiktok, 
    getInstagram,
    getYoutube,
    getTwitter,
    getFBInfo,
    getFacebook,
    encodeStringToBase64
} from '../utils'
import { 
    type FBResult,
    type TiktokResult,
    type InstagramResult,
    type TwitterResult,
} from '../types/nayan'

export const appRouterv1 = async (app: Express): Promise<any> => {
    app.get('/', (req: Request, res: Response) => {
      res.status(StatusCodes.OK).send('Welcome to the API')
    })

    app.post('/api/v1/tiktok', (req: Request, res: Response) => {
        const url = req.body.urls
        let regex = /\/\/www\.tiktok\.com/i
        if(!regex.test(url)){
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64('Invalid URL, only support https://www.tiktok.com')
                }
            )
            return
        }
        getTiktok(url).then((result:TiktokResult) => {
            const data = {
                title: encodeStringToBase64(result.data.title),
                video: encodeStringToBase64(result.data.video),
                audio: encodeStringToBase64(result.data.audio),
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).send({
                title: encodeStringToBase64(error.msg)
            })
        })
    })

    app.post('/api/v1/instagram', (req: Request, res: Response) => {
        const url = req.body.urls
        let regex = /instagram\.com/i;
        if(!regex.test(url)){
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64('Invalid URL, only support https://www.instagram.com or https://instagram.com')
                }
            )
            return
        }
        getInstagram(url).then((result:InstagramResult) => {
            const data = {
                thumbnail: encodeStringToBase64(result.data[0].thumbnail),
                video: encodeStringToBase64(result.data[0].url)
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64(error.msg)
                }
            )
        })
    })

    app.post('/api/v1/youtube', (req: Request, res: Response) => {
        const url = req.body.urls
        // let regex = /youtube\.com/i;
        // if(!regex.test(url)){
        //     res.status(StatusCodes.BAD_REQUEST).send(
        //         {
        //             title: encodeStringToBase64('Invalid URL, only support https://www.youtube.com')
        //         }
        //     )
        //    return
        // }
        getYoutube(url).then((result) => {
            const data = {
                title: encodeStringToBase64(result.data.title),
                thumbnail: encodeStringToBase64(result.data.thumb),
                video: encodeStringToBase64(result.data.video),
                video_hd: encodeStringToBase64(result.data.video_hd),
                audio: encodeStringToBase64(result.data.audio),
                quality: encodeStringToBase64(result.data.quality)
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64(error.msg)
                }
            )
        })
    })

    app.post('/api/v1/facebook', (req: Request, res: Response) => {
        const url = req.body.urls
        let regex = /\/\/fb\.watch/i;
        if(!regex.test(url)){
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64('Invalid URL, only support https://fb.watch')
                }
            )
            return
        }
        getFacebook(url).then((result: FBResult) => {
            const media = {
                title: encodeStringToBase64(result.media.title || 'Not found'),
                hd: encodeStringToBase64(result.media.hd || ''),
                sd: encodeStringToBase64(result.media.sd || ''),
            }
            res.status(StatusCodes.OK).send(media)
        }).catch((error: any) => {
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64(error.msg)
                }
            )
        })
    })

    app.post('/api/v1/twitter', (req: Request, res: Response) => {
        const url = req.body.urls
        let regex = /\/\/x\.com/i;
        if(!regex.test(url)){
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64('Invalid URL, only support https://x.com')
                }
            )
            return
        }
        getTwitter(url).then((result: TwitterResult) => {
            const data = {
                video: encodeStringToBase64(result.data.SD),
                video_hd: encodeStringToBase64(result.data.HD),
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.BAD_REQUEST).send(
                {
                    title: encodeStringToBase64(error.msg)
                }
            )
        })
    })
}