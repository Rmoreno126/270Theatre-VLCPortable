// ============================================================
// CONFIGURATION — update this one line to match your machine
// Example: "file:///C:/Users/YourName/Documents/VLCPortable/Videos/"
// ============================================================
const basePath = "Videos/";

// 1. DATA LAYER
const videoDatabase = [
    { id: "v1", title: "Redwood Canopy",        description: "Immersive local forest view.",         filePath: basePath + "redwoods_360.mov",    thumbnail: "images/redwoods.jpg",   speed: 1.0 },
    { id: "v2", title: "Mars Rover Panorama",    description: "Explore the surface of Mars.",         filePath: basePath + "mars_rover_360.mov",  thumbnail: "images/marsRover.jpg",  speed: 0.5 },
    { id: "v3", title: "Trinidad Tide Pools",    description: "Northern California marine life.",     filePath: basePath + "tide_pools_360.mov",  thumbnail: "images/tidepools.jpg",  speed: 1.0 },
    { id: "v4", title: "California Wildflowers", description: "Spring superbloom time-lapse.",        filePath: basePath + "wildflowers_360.mov", thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946", speed: 1.0 },
    { id: "v5", title: "Cityscape Timelapse",    description: "Urban architecture and traffic flow.", filePath: basePath + "cityscape_360.mov",   thumbnail: "images/cityscape.jpg",  speed: 0.5 }
];

// 2. VIEW LAYER
function renderKiosk() {
    const container = document.getElementById('video-grid');
    container.innerHTML = ''; 
    videoDatabase.forEach(video => {
        const card = document.createElement('div');
        card.className = 'scene-card';
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <button class="play-btn" onclick="playVideo('${video.filePath}', ${video.speed})">Play Scene</button>
        `;
        container.appendChild(card);
    });
}

// 3. CONTROLLER LAYER (API Calls)
function playVideo(filePath, targetSpeed) {
    // Command 1: Tell VLC to play the video
    const playUrl = `/requests/status.xml?command=in_play&input=${encodeURIComponent(filePath)}`;
    
    fetch(playUrl)
        .then(() => {
            // Command 2: Wait 500 milliseconds for VLC to load the video, then set the speed
            setTimeout(() => {
                fetch(`/requests/status.xml?command=rate&val=${targetSpeed}`)
                    .catch(err => console.error("Speed adjustment error", err));
            }, 500);
        })
        .catch(err => alert("Error connecting to VLC."));
}

function togglePause() {
    fetch('/requests/status.xml?command=pl_pause')
        .catch(err => console.error("Pause error", err));
}

function stopPlayback() {
    fetch('/requests/status.xml?command=pl_stop')
        .catch(err => console.error("Stop error", err));
}

// NEW: Toggle Repeat Current Item
function toggleLoop() {
    fetch('/requests/status.xml?command=pl_repeat')
        .catch(err => console.error("Loop error", err));
}

// Play from USB Drive (local file path only)
function playCustomMedia() {
  let inputPath = document.getElementById('customInput').value.trim();
  if (!inputPath) {
    alert("Please enter a USB file path first (e.g., D:\\my_video.mp4)");
    return;
  }
  // Convert Windows path to URI format VLC understands
  if (!inputPath.startsWith('file:///')) {
    inputPath = 'file:///' + inputPath.replace(/\\/g, '/');
  }
  playVideo(inputPath, 1.0);
}

// Initialize the Kiosk
renderKiosk();