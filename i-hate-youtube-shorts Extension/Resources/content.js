// Simple function to check if we're on a Shorts URL and redirect if needed
function blockYouTubeShorts() {
    if (window.location.pathname.includes('/shorts/')) {
        // Redirect to YouTube homepage
        window.location.href = 'https://www.youtube.com';
    }
}

// Run initially
blockYouTubeShorts();

// Monitor URL changes with interval - this is the most reliable way for YouTube
setInterval(blockYouTubeShorts, 50);

