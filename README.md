# 270° Study Theatre — Portable Kiosk

An out-of-the-box kiosk system designed for the 270-degree Study Theatre. This repository includes a portable instance of VLC Media Player and a custom web-based control panel.

## 🚀 One-Minute Setup

### STEP 1 — Download the Project
* Clone this repository or click the green **Code** button on GitHub and select **Download ZIP**.
* Extract the contents anywhere on your machine (e.g., your Desktop).

### STEP 2 — Configure VLC Settings
Before running the Kiosk, you must manually enable VLC's web interface and set the security password:
1. Open the `270Theatre-VLCPortable` folder and double-click `VLCPortable.exe` to launch VLC.
2. In the top menu, go to **Tools** > **Preferences** (or press `Ctrl + P`).
3. At the bottom left under **Show settings**, select the **All** radio button.
4. In the left sidebar, navigate to **Interface** > **Main interfaces**.
5. Check the box for **Web** to enable the HTTP interface.
6. Expand the **Main interfaces** menu on the left sidebar and click on **Lua**.
7. Under **Lua HTTP**, enter the password: `theatre270` (leave the username blank).
8. Click **Save** and restart VLC for the changes to take effect.

### STEP 3 — Add the Videos (Required)
Due to GitHub file size limits, the heavy 360° video assets are hosted separately.
* Download the video assets ZIP from the Google Drive link provided in our project brief. You can also follow this link: [Google Drive Video Assets](https://drive.google.com/drive/folders/1Bi8P6TIGvcxc4ksKvDUzDwTXmYFdNcOk?usp=sharing).
* Extract the video files and drop them directly into the **Videos** folder located right in the root directory of the project: `270Theatre-VLCPortable/Videos/`

### STEP 4 — Run the Kiosk
1. Ensure VLC is open in the background with the settings from Step 2 applied.
2. Open any web browser (Chrome, Edge, or Firefox) and navigate to: `http://localhost:8080`
3. When prompted by the browser for credentials, leave the **username blank** and type the password: `theatre270`

The custom 270° Study Theatre user interface, scene triggers, Humboldt branding, and localized video playback controls will work instantly out of the box.
