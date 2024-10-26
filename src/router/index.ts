import { type Express, type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { 
    getTiktok, 
    getInstagram,
    getYoutube,
    getFacebook,
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
        getFacebook(url).then((result) => {
            const data = {
                title: encodeStringToBase64(result.media.title),
                video: encodeStringToBase64(result.media.sd),
                video_hd: encodeStringToBase64(result.media.hd)
            }
            res.status(StatusCodes.OK).send(data)
        }).catch((error) => {
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