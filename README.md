<div align="right">
  <a href="#english">English</a> | <a href="#japanese">日本語</a>
</div>

---

<a id="english"></a>
# Extended Just Intonation Kalimba Synthesizer

A browser-based, high-precision **Just Intonation Kalimba Synthesizer** built with vanilla HTML5, CSS3, and the Web Audio API. This application allows musicians, microtonal enthusiasts, and children to explore historical and alternative tuning systems through an interactive, responsive thumb piano interface.

---

## Key Features

*   **Adaptive Key Layouts:** Automatically switches between an **8-Key mode** (ideal for portrait or mobile views) and a **13-Key mode** (for landscape).
*   **Multiple Scale Systems:** Switch instantly between microtonal and historical just intonation tuning presets.
*   **Customizable Base Tonic (1/1):** Tune the root frequency using standard presets (417.6 Hz, 432 Hz, 440 Hz) or input a custom frequency.
*   **High-Resolution Audio Recording:** Record your performances directly in the browser and download them as **WAV files** (supports **32-bit Float** and **16-bit PCM** at **48 kHz** or **96 kHz**).
*   **Real-Time Telemetry Display:** Inspect plucked note details, frequency ratios, and cent differences between notes instantly.
*   **Interactive Chords & Arpeggios:** Trigger curated chord presets mapped specifically to each scale system.
*   **PWA Ready:** Fully responsive design with full-screen support and offline capability via a Service Worker.

---

## Supported Scale Systems

The synthesizer includes five distinct microtonal tuning systems:

1.  **7-Limit Soul Jazz Blues Tuning** – Explores septimal intervals tailored for soulful, bluesy microtonal expressions.
2.  **23-Limit Natural Harmonics** – Features upper partials derived from 16-32th natural harmonic series up to the prime number 23rd limit.
4.  **Pythagorean 3-Limit** – Pure 3-limit tuning based on 3:2 fifths, recognized as the oldest recorded tuning system in history (Philolaos's Fragment B6).
5.  **Archytas's 7-Limit Tetrachords** – Ancient Greek tuning system utilizing septimal ratios.
6.  **Classic 5-Limit Just Intonation** – Traditional 5-limit tuning optimized for pure major and minor triads.

---

## Controls & How to Play

### Playing Tines
*   **Mouse / Touch:** Click or tap directly on any tine to pluck it.
*   **Computer Keyboard:** Use keyboard shortcuts corresponding to the active tines (e.g., `1` through `8` for Portrait mode; `1`–`0`, `-`, `=`, `q` for Landscape mode).

### Telemetry & Monitoring
*   **Last Plucked:** Displays the ratio, name, and exact frequency (Hz) of the most recently played tine.
*   **Inter-Note Ratio:** Calculates the exact interval ratio and cent difference between the previous and current notes.

---

## Recording & Exporting

1. Click the **REC** button in the header to start capturing audio directly from the master output.
2. The button will pulse red, and a timer will display the recording duration.
3. Click **REC** again to stop.
4. Select your preferred audio format (`32-bit Float / 48 kHz`, `32-bit Float / 96 kHz`, `16-bit PCM / 48 kHz`, or `16-bit PCM / 96 kHz`) from the control panel.
5. Click **Download WAV** to save your performance locally.

---

## How to Use & Install (PWA)

You can play right away in your browser, or install it as a standalone desktop/mobile application using the latest version of Google Chrome.

### 1. Try Online & Install
* Open the live application in **Google Chrome**:
  **[Extended Just Intonation Kalimba Synthesizer](https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/)**
* **To install as an app:**
  * **Mobile (Android Chrome):** Open the browser menu and select **"Add to Home Screen"** or **"Install app"**.
　* **Desktop (Chrome / Edge):** Click the install icon (a small monitor with a download arrow or plus badge) on the right side of the address bar, or open the browser menu and select **"Install Extended Just Intonation Kalimba Synthesizer..."**.

### 2. Local Development (Optional)
If you prefer to run or modify the code locally:
1. Clone this repository:
   git clone [https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git](https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git)

---

<div align="right">
  <a href="#english">Top (English)</a> | <a href="#japanese">トップ (日本語)</a>
</div>

---

<a id="japanese"></a>
# 拡張純正律カリンバシンセサイザー(Extended Just Intonation Kalimba Synthesizer)

バニラHTML5、CSS3、Web Audio APIで構築された、ブラウザベースの**純正律カリンバ・シンセサイザー**です。楽器演奏者、数比に基づく微小音程（マイクロトーン）に興味をもつ年少者が、直感的な親指ピアノインターフェースを通じて歴史的および未来的な音律システムを探索、学習するために考案されました。

---

## 主な特徴

*   **レスポンシブキーレイアウト:** 縦向きに最適な**8キーモード**と、横向きに最適な**13キーモード**を自動的に切り替えます。
*   **多彩な音律システム:** 微小音律や歴史的な純正律のチューニングプリセットを切り替えられます。
*   **カスタマイズ可能な基準音 (1/1):** 標準プリセット（417.6 Hz, 432 Hz, 440 Hz）を使用するか、カスタム周波数を入力してルート音を変更できます。
*   **ハイレゾオーディオ録音:** アプリケーション上で直接演奏を録音し、**WAVファイル**としてダウンロードできます（**32-bit Float**および**16-bit PCM**、**48 kHz**または**96 kHz**をサポート）。
*   **リアルタイムテレメトリー表示:** 弾いた音程の詳細、周波数比、音程間のセント差を確認できます。
*   **インタラクティブなコードとアルペジオ:** 各音律システム専用にマッピングされた、厳選されたコードプリセットをトリガーできます。
*   **PWA対応:** フルスクリーンサポートとサービスワーカーによるオフライン機能を備えた、完全にレスポンシブなデザイン。

---

## 対応している音律

このシンセサイザーには、5つの異なる微小音律システムが含まれています：

1.  **7-Limit Soul Jazz Blues Tuning** – ソウルフルでブルージーな微小音律の表現に合わせたセプティマル音程を探索してください。
2.  **23-Limit Natural Harmonics** – 第16から第36倍音までの自然倍音列から抽出した素数23までの上位倍音で構成されています。
3.  **Pythagorean 3-Limit** – 3:2の完全五度をベースにした、文献史上世界最古の音律です（Philolaos's Fragment B6）。
4.  **Archytas's 7-Limit Tetrachords** – 素数７までの比率を利用した古代ギリシャの音律システム。
5.  **Classic 5-Limit Just Intonation** – 純正な長三度・短三度に最適化された伝統的な５限界チューニング。

---

## 操作方法と演奏方法

### 鍵盤の演奏
*   **マウス / タッチ:** 任意のキーを直接クリックまたはタップして弾きます。
*   **コンピューターキーボード:** アクティブなキーに対応するキーボードショートカットを使用します（例: ポートレートモードは `1` ～ `8`、ランドスケープモードは `1` ～ `0`、`-`、 `=`、 `q`）。

### テレメトリーとモニタリング
*   **直前に弾いた音 (Last Plucked):** 直前に演奏した鍵盤の比率、名前、正確な周波数（Hz）を表示します。
*   **音程比 (Inter-Note Ratio):** 前の音と現在の音の間の正確な音程比とセント差を計算します。

---

## 録音とエクスポート

1. ヘッダーの**REC**ボタンをクリックして、マスター出力から直接音声のキャプチャを開始します。
2. ボタンが赤く点滅し、タイマーに録音時間が表示されます。
3. もう一度**REC**をクリックして停止します。
4. コントロールパネルから、希望するオーディオフォーマット（`32-bit Float / 48 kHz`、`32-bit Float / 96 kHz`、`16-bit PCM / 48 kHz`、または `16-bit PCM / 96 kHz`）を選択します。
5. **Download WAV**をクリックして、演奏をローカルに保存します。

---

## 使い方とインストール (PWA)

ブラウザですぐにプレイするか、最新版のGoogle Chromeを使用してスタンドアロンのモバイルアプリとしてインストールできます。

### 1. オンラインで試す & インストールする
* Google Chromeでライブアプリケーションを開く:
  **[Extended Just Intonation Kalimba Synthesizer](https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/)**
* **アプリとしてインストールする場合:**
  * **モバイル (Android Chrome):** ブラウザメニューから **「ホーム画面に追加」** または **「アプリをインストール」** を選択します。
  * **デスクトップ (Chrome / Edge):** アドレスバーの右側にあるインストールアイコン（ダウンロード矢印やプラスバッジが付いた小さなモニター）をクリックするか、ブラウザメニューから **「Extended Just Intonation Kalimba Synthesizer をインストール...」** を選択します。

### 2. ローカル開発（オプション）
コードをローカルで実行または修正する場合:
1. リポジトリをクローンします：
   git clone [https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git](https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git)
