function getThumbnail() {
    const url = document.getElementById('youtubeUrl').value;
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (!videoId) {
        document.getElementById('thumbnailResult').innerHTML = 'Please enter a valid YouTube URL.';
        return;
    }

    const thumbnailUrls = {
        large: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        small: `https://img.youtube.com/vi/${videoId}/default.jpg`
    };

    document.getElementById('thumbnailResult').innerHTML = `
        <div class="thumbnail">
            <h3>Large</h3>
            <img src="${thumbnailUrls.large}" alt="Large YouTube Thumbnail"><br>
            <a href="${thumbnailUrls.large}" download>Download Large</a>
        </div>
        <div class="thumbnail">
            <h3>Medium</h3>
            <img src="${thumbnailUrls.medium}" alt="Medium YouTube Thumbnail"><br>
            <a href="${thumbnailUrls.medium}" download>Download Medium</a>
        </div>
        <div class="thumbnail">
            <h3>Small</h3>
            <img src="${thumbnailUrls.small}" alt="Small YouTube Thumbnail"><br>
            <a href="${thumbnailUrls.small}" download>Download Small</a>
        </div>
    `;
}