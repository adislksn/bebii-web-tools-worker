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
exports.getTwitter = exports.getInstagram = exports.getFacebook = exports.getYoutube = exports.getTiktok = void 0;
const { ytdown, ndown, tikdown, twitterdown, fbdown2 } = require("nayan-media-downloader");
const request = require("request");
const key = "Nayan"; //dont change key
const getTiktok = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield tikdown(url);
    return result;
});
exports.getTiktok = getTiktok;
const getYoutube = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield ytdown(url);
    return result;
});
exports.getYoutube = getYoutube;
const getFacebook = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield fbdown2(url, key);
    return result;
});
exports.getFacebook = getFacebook;
const getInstagram = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield ndown(url);
    return result;
});
exports.getInstagram = getInstagram;
const getTwitter = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var result = yield twitterdown(url);
    return result;
});
exports.getTwitter = getTwitter;
// getUrl("https://www.youtube.com/watch?v=FylHa4_neOA")
// getUrl("https://x.com/PicturesFoIder/status/1841465685588799572")
// getUrl("https://fb.watch/u_1yLxEJkX/")
// getUrl("https://www.instagram.com/reel/DAiIPdVzXra/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==")
// getUrl("https://www.tiktok.com/@vonnyfelicia/video/7173541489467804955")
//# sourceMappingURL=nayan-media-downloader.js.map