# Extended Just Intonation Kalimba Synthesizer

A browser-based, high-precision **Just Intonation Kalimba Synthesizer** built with vanilla HTML5, CSS3, and the Web Audio API. This application allows musicians, microtonal enthusiasts, and sound designers to explore historical and alternative tuning systems through an interactive, responsive thumb piano interface.

---

## 🌟 Key Features

*   **Adaptive Key Layouts:** Automatically switches between an **8-Key mode** (ideal for portrait or mobile views) and a **13-Key mode** (for landscape or desktop environments).
*   **Multiple Scale Systems:** Switch instantly between microtonal and historical just intonation tuning presets.
*   **Customizable Base Tonic (1/1):** Tune the root frequency using standard presets (417.6 Hz, 432 Hz, 440 Hz) or input a custom frequency in real-time.
*   **High-Resolution Audio Recording:** Record your performances directly in the browser and download them as **WAV files** (supports **32-bit Float** and **16-bit PCM** at **48 kHz** or **96 kHz**).
*   **Real-Time Telemetry Display:** Inspect plucked note details, frequency ratios, and cent differences between notes instantly.
*   **Interactive Chords & Arpeggios:** Trigger curated chord presets mapped specifically to each scale system.
*   **PWA Ready:** Fully responsive design with full-screen support and offline capability via a Service Worker.

---

## 🎵 Supported Scale Systems

The synthesizer includes five distinct microtonal tuning systems:

1.  **7-Limit Soul Jazz Blues Tuning** – Explores septimal intervals tailored for soulful, bluesy microtonal expressions.
2.  **23-Limit Natural Harmonics** – Features upper partials derived from natural harmonic series up to the 23rd limit.
3.  **Pythagorean 3-Limit** – Pure 3-limit tuning based entirely on clean 3:2 fifths.
4.  **Archytas's 7-Limit Tetrachords** – Ancient Greek tuning system utilizing septimal ratios.
5.  **Classic 5-Limit Just Intonation** – Traditional 5-limit tuning optimized for pure major and minor triads.

---

## ⌨️ Controls & How to Play

### Playing Tines
*   **Mouse / Touch:** Click or tap directly on any tine to pluck it.
*   **Computer Keyboard:** Use keyboard shortcuts corresponding to the active tines (e.g., `1` through `8` for Portrait mode; `1`–`0`, `-`, `=`, `q` for Landscape mode).

### Telemetry & Monitoring
*   **Last Plucked:** Displays the ratio, name, and exact frequency (Hz) of the most recently played tine.
*   **Inter-Note Ratio:** Calculates the exact interval ratio and cent difference between the previous and current notes.

---

## 💾 Recording & Exporting

1. Click the **REC** button in the header to start capturing audio directly from the master output.
2. The button will pulse red, and a timer will display the recording duration.
3. Click **REC** again to stop.
4. Select your preferred audio format (`32-bit Float / 48 kHz`, `32-bit Float / 96 kHz`, `16-bit PCM / 48 kHz`, or `16-bit PCM / 96 kHz`) from the control panel.
5. Click **Download WAV** to save your performance locally.

---

## 🚀 How to Use & Install (PWA)

You can play right away in your browser, or install it as a standalone desktop/mobile application using the latest version of Google Chrome.

### 1. Try Online & Install
* Open the live application in **Google Chrome**:
  👉 **[Extended Just Intonation Kalimba Synthesizer](https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/)**
* **To install as an app:**
  * **Desktop (Chrome / Edge):** Click the install icon (a small monitor with a download arrow or plus badge) on the right side of the address bar, or open the browser menu and select **"Install Extended Just Intonation Kalimba Synthesizer..."**.
  * **Mobile (Android Chrome):** Open the browser menu and select **"Add to Home Screen"** or **"Install app"**.

### 2. Local Development (Optional)
If you prefer to run or modify the code locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git
