import * as config from '../configs/image-config';

export function getUrl(text: string): string {
    return `${config.BASE_URL}${text}?width=${config.WIDTH}&height=${config.HEIGHT}&color=${config.COLOR}&s=${config.SIZE}`;
}