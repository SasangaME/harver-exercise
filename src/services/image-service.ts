import * as imageUtil from '../utils/image-util';
import mergeImages from 'merge-images';
import { Canvas, Image } from 'canvas';
import fs from 'fs';

export async function merge(text1: string, text2: string): Promise<void> {
    const firstImgUrl = imageUtil.getUrl(text1);
    const secondImgUrl = imageUtil.getUrl(text2);
    await mergeImg(firstImgUrl, secondImgUrl);
}

async function mergeImg(firstImgUrl: string, secondImgUrl: string): Promise<void> {
    await mergeImages([{ src: firstImgUrl, x: 0, y: 0 },
    { src: secondImgUrl, x: 400, y: 0 }], {
        Canvas: Canvas,
        Image: Image
    })
        .then(b64 => {
            const buffer = Buffer.from(b64.split(',')[1], 'base64');
            fs.writeFile('mergedImage.jpg', buffer, err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Image saved successfully!');
                }
            });
        });
}