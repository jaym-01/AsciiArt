import { Image } from 'image-js';

const chars = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.";

async function main() {
    const image = (await Image.load('dog8.png')).grey();
    const asciiData = image.data.map((val)=>{
        return chars[Math.floor((val/255) * chars.length)];
    });
    // console.log(asciiData.filter(val=>val!==69))
    let buffer = "";
    asciiData.forEach((val, i)=>{
        buffer += val;
        if((i + 1) % image.width === 0) buffer += '\n';
    })
    // console.log(buffer);
    await Deno.writeTextFile("hello.txt", buffer);
}

main().catch(console.error);