import * as imageUtil from '../utils/image-util';
import mergeImages from 'merge-images';
import { Canvas, Image } from 'canvas';
import fs from 'fs';

/**
 * merge the images into a single image
 * @param text1 
 * @param text2 
 */
export async function merge(text1: string, text2: string): Promise<void> {
    const firstImgUrl = imageUtil.getUrl(text1);
    const secondImgUrl = imageUtil.getUrl(text2);
    await mergeImg(firstImgUrl, secondImgUrl);
}

/**
 * merge the 02 images using pre-built urls and save the output to a file
 * @param firstImgUrl 
 * @param secondImgUrl 
 */
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