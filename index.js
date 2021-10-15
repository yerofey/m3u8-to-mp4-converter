// ffmpeg required on the system

const m3u8ToMp4 = require('m3u8-to-mp4');
const converter = new m3u8ToMp4();

(async () => {
    const filename = 'dummy.mp4';
    const m3u8Url = 'https://a3569457660-s36342.cdn.ngenix.net/1544389649/series/video/titans/s1e1/video_hd.mp4/index-v1-a1.m3u8';
    await converter
      .setInputFile(m3u8Url)
      .setOutputFile(filename)
      .start();
   
    console.log('File converted');
})();
