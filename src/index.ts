import * as dotenv from 'dotenv';
import * as imageService from './services/image-service';

dotenv.config();

/**
 * main entry point of the application
 */
async function main(): Promise<void> {
    const text1 = process.env.TEXT_1 || 'text1';
    const text2 = process.env.TEXT_2 || 'text2';

    const msg = 'NodeJS & TS';
    console.log(`Hello World from ${msg}`);
    imageService.merge(text1, text2);
}

(async () => {
    try {
        await main();
    }
    catch (err) {
        console.log(err);
    }
})();