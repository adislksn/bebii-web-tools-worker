"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterv1 = void 0;
const http_status_codes_1 = require("http-status-codes");
const utils_1 = require("../utils");
const appRouterv1 = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/', (req, res) => {
        res.status(http_status_codes_1.StatusCodes.OK).send('Welcome to the API');
    });
    app.post('/api/v1/tiktok', (req, res) => {
        const url = req.body.urls;
        (0, utils_1.getTiktok)(url).then((result) => {
            const data = {
                video: result.data.video
            };
            res.status(http_status_codes_1.StatusCodes.OK).send(data);
        }).catch((error) => {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        });
    });
    app.post('/api/v1/instagram', (req, res) => {
        const url = req.body.urls;
        (0, utils_1.getInstagram)(url).then((result) => {
            const data = {
                thumbnail: result.data[0].thumbnail,
                video: result.data[0].url
            };
            res.status(http_status_codes_1.StatusCodes.OK).send(data);
        }).catch((error) => {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        });
    });
    app.post('/api/v1/youtube', (req, res) => {
        const url = req.body.urls;
        (0, utils_1.getYoutube)(url).then((result) => {
            const data = {
                title: result.data.title,
                thumbnail: result.data.thumb,
                video: result.data.video,
                video_hd: result.data.video_hd,
                audio: result.data.audio,
                quality: result.data.quality
            };
            res.status(http_status_codes_1.StatusCodes.OK).send(data);
        }).catch((error) => {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        });
    });
    app.post('/api/v1/facebook', (req, res) => {
        const url = req.body.urls;
        (0, utils_1.getFacebook)(url).then((result) => {
            const data = {
                title: result.media.title,
                video: result.media.sd,
                video_hd: result.media.hd
            };
            res.status(http_status_codes_1.StatusCodes.OK).send(data);
        }).catch((error) => {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        });
    });
    app.post('/api/v1/twitter', (req, res) => {
        const url = req.body.urls;
        (0, utils_1.getTwitter)(url).then((result) => {
            const data = {
                video: result.data.SD,
                video_hd: result.data.HD
            };
            res.status(http_status_codes_1.StatusCodes.OK).send(data);
        }).catch((error) => {
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send(error);
        });
    });
});
exports.appRouterv1 = appRouterv1;
//# sourceMappingURL=index.js.map