const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "君の涙にこんなに恋してる",
        artist: '夏いる',
        url: 'https://aptx4869.tv/music/natuiru-kimino_namidani_konnani_koisiteru.mp3',
        cover: 'https://aptx4869.tv/images/music_covers/natuiru-kimino_namidani_konnani_koisiteru_cover.jpg',
      },
      {
        name: '君がいない夏',
        artist: 'DEEN',
        url: 'https://aptx4869.tv/music/deen-kimiga_inai_natu.mp3',
        cover: 'https://aptx4869.tv/images/music_covers/deen-kimiga_inai_natu_cover.jpg',
      }
    ]
});
