import * as config from '../configs/image-config';

/**
 * build the URL using config values
 * @param text 
 * @returns 
 */
export function getUrl(text: string): string {
    return `${config.BASE_URL}${text}?width=${config.WIDTH}&height=${config.HEIGHT}&color=${config.COLOR}&s=${config.SIZE}`;
}