import { type Express, type Request, type Response } from 'express'
const { fbdown2 } = require("nayan-media-downloader")
import { StatusCodes } from 'http-status-codes'
import { 
    getTiktok, 
    getInstagram,
    getYoutube,
    getTwitter,
    encodeStringToBase64
} from '../utils'

export const appRouterv1 = async (app: Express): Promise<any> => {
    app.get('/', (req: Request, res: Response) => {
      res.status(StatusCodes.OK).send('Welcome to the API')
    })

    app.post('/api/v1/tiktok', (req: Request, res: Response) => {
        const url = req.body.urls
        getTiktok(url).then((result) => {
            const data = {
                video: encodeStringToBase64(result.data.video),
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.NOT_FOUND).send(error)
        })
    })

    app.post('/api/v1/instagram', (req: Request, res: Response) => {
        const url = req.body.urls
        getInstagram(url).then((result) => {
            const data = {
                thumbnail: encodeStringToBase64(result.data[0].thumbnail),
                video: encodeStringToBase64(result.data[0].url)
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.NOT_FOUND).send(error)
        })
    })

    app.post('/api/v1/youtube', (req: Request, res: Response) => {
        const url = req.body.urls
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
            res.status(StatusCodes.NOT_FOUND).send(error)
        })
    })

    app.post('/api/v1/facebook', (req: Request, res: Response) => {
        const url = req.body.urls
        fbdown2(url, 'Nayan').then((result: any) => {
            const media = {
                title: encodeStringToBase64(result.media.title),
                hd: encodeStringToBase64(result.media.hd),
                sd: encodeStringToBase64(result.media.sd)
            }
            res.status(StatusCodes.OK).send(media)
        }).catch((error: any) => {
            res.status(StatusCodes.NOT_FOUND).send(error)
        })
    })

    app.post('/api/v1/twitter', (req: Request, res: Response) => {
        const url = req.body.urls
        getTwitter(url).then((result) => {
            const data = {
                video: encodeStringToBase64(result.data.SD),
                video_hd: encodeStringToBase64(result.data.HD),
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
            res.status(StatusCodes.NOT_FOUND).send(error)
        })
    })
}