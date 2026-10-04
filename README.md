<div align="right">
  <a href="#english">English</a> | <a href="#japanese">日本語</a>
</div>

---

<a id="english"></a>
# Extended Just Intonation Kalimba Synthesizer

A browser-based, high-precision **Just Intonation Kalimba Synthesizer** built with vanilla HTML5, CSS3, and the Web Audio API. This application allows musicians, microtonal enthusiasts, and learners to explore historical and alternative tuning systems through an interactive, responsive thumb piano interface.

---

## Key Features

*   **Adaptive Key Layouts:** Automatically switches between an **8-Key mode** (ideal for portrait or mobile views) and a **13-Key or 17-Key mode** (for landscape views)[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span).
*   **7 Distinct Scale Systems:** Switch instantly between 7 microtonal and historical just intonation tuning presets, including 7-Limit Soul Jazz Blues, 23-Limit Natural Harmonics, Chinese 3-Limit JI, Pythagorean 3-Limit JI, Archytas's 7-Limit JI, Classic 5-Limit JI, and Nearly TET 19-limit JI[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span).
*   **Customizable Base Tonic (1/1) & Ratio Multiplier:** Tune the root frequency using standard presets (417.6 Hz, 432 Hz, 440 Hz, 512 Hz) or custom input, with real-time tonic fraction multipliers and octave shifting (+/-)[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).
*   **High-Quality Recording Engine:** Built-in WAV audio recording supporting 32-bit Float and 16-bit PCM formats at 48 kHz or 96 kHz[span_9](start_span)[span_9](end_span). Uses low-latency `AudioWorklet` architecture with a fallback to `ScriptProcessor`[span_10](start_span)[span_10](end_span).
*   **Advanced Audio Customization:** A dedicated settings modal allows toggling of Random Noise textures, Tine Noise Filters, Harmonic Effects (OSC 2), and Compressor Routing to shape the perfect tone[span_11](start_span)[span_11](end_span).
*   **Automated Chord Playback:** Trigger scale-specific chord patterns with an adjustable BPM controller and loop toggle capabilities[span_12](start_span)[span_12](end_span).
*   **Real-Time Telemetry:** Visual readout of the last plucked tines, displaying exact frequencies, cents, and inter-note ratio differences[span_13](start_span)[span_13](end_span).
*   **Progressive Web App (PWA):** Fully installable with built-in service worker caching and on-screen update notifications for offline use[span_14](start_span)[span_14](end_span).

---

## Supported Scale Systems

The synthesizer includes 7 distinct microtonal and just intonation tuning systems:

1.  **7-Limit Soul Jazz Blues Tuning** – Explores septimal intervals tailored for soulful, bluesy microtonal expressions.
2.  **23-Limit Natural Harmonics** – Features upper partials derived from 16-32 natural harmonic series up to the 23rd prime limit.
3.  **Chinese 3-Limit Dao** – Traditional Chinese 3-limit tuning based on the Sanfen Sunyi (pythagorean-like) method, mapping classic pitch names.
4.  **Pythagorean 3-Limit** – Pure 3-limit tuning based on 3:2 fifths, recognized as the oldest recorded tuning system in history (Philolaos's Fragment B6).
5.  **Archytas's 7-Limit Tetrachords** – Ancient Greek tuning system utilizing septimal ratios designed by Archytas.
6.  **Classic 5-Limit Just Intonation** – Traditional 5-limit tuning optimized for pure major and minor triads.
7.  **Nearly TET 19-limit Just Intonation** – A 19-limit just intonation scale approximating 12-tone Equal Temperament intervals.

---

## Controls & How to Play

### Playing Tines
*   **Mouse / Touch:** Click or tap directly on any tine to pluck it.
*   **Computer Keyboard:** Use keyboard shortcuts corresponding to active tines (`1`–`8` for Portrait 8-Key mode; `1`–`0`, `-`, `=`, `q` for Landscape 13-Key mode).

### Telemetry & Monitoring
*   **Last Plucked:** Displays the ratio, name, and exact frequency (Hz) of the most recently played tine.
*   **Inter-Note Ratio:** Calculates the exact interval ratio and cent difference between the previous and current notes.

### Advanced Tone & Scale Controls
*   **Base Tonic & Multiplier:** Adjust the fundamental frequency and apply interval multipliers to shift tonic references dynamically.
*   **Noise Filter & Rec Engine:** Toggle acoustic tine noise simulation and choose between `AudioWorklet` (fast) or `ScriptProcessor` recording engines.
*   **Arpeggio & Chord BPM:** Adjust chord playback speed or trigger automated arpeggio loops where supported.

---

## Recording & Exporting

1. Select your preferred audio format (`32-bit Float / 48 kHz`, `32-bit Float / 96 kHz`, `16-bit PCM / 48 kHz`, or `16-bit PCM / 96 kHz`) and recording engine from the control panel.
2. Click the **REC** button in the header to start capturing audio directly from the master output.
3. The button will pulse red, and a timer will display the recording duration.
4. Click **REC** again to stop.
5. Click **Download WAV** to save your performance locally.

---

## How to Use & Install (PWA)

You can play right away in your browser, or install it as a standalone mobile/desktop application using Google Chrome.

### 1. Try Online & Install
* Open the live application in **Google Chrome**:
  **[Extended Just Intonation Kalimba Synthesizer](https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/)**
* **To install as an app:**
  * **Mobile (Android Chrome):** Open the browser menu and select **"Add to Home Screen"** or **"Install app"**.
  * **Desktop (Chrome / Edge):** Click the install icon (a small monitor with a download arrow or plus badge) on the right side of the address bar, or open the browser menu and select **"Install Extended Just Intonation Kalimba Synthesizer..."**.

### 2. Local Development (Optional)
If you prefer to run or modify the code locally:
1. Clone this repository:
   ```bash
   git clone [https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git](https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git)
   ```

---

<div align="right">
  <a href="#english">Top (English)</a> | <a href="#japanese">トップ (日本語)</a>
</div>

---

<a id="japanese"></a>
# 拡張純正律カリンバシンセサイザー (Extended Just Intonation Kalimba Synthesizer)

バニラHTML5、CSS3、Web Audio APIで構築された、ブラウザベースの**純正律カリンバ・シンセサイザー**です。楽器演奏者、数比に基づく微小音程（マイクロトーン）に興味をもつ人が、直感的な親指ピアノインターフェースを通じて歴史的および未来的な音律システムを探索、学習するために考案されました。

---

<a id="japanese"></a>
# Extended Just Intonation Kalimba Synthesizer (拡張純正律カリンバシンセサイザー)

HTML5、CSS3、Web Audio APIを使用して構築された、ブラウザベースの高精度な純正律カリンバシンセサイザーです[span_15](start_span)[span_15](end_span)[span_16](start_span)[span_16](end_span)。音楽家や微分音の愛好家が、インタラクティブな親指ピアノのインターフェースを通じて、歴史的および代替的なチューニングシステムを探求できるように設計されています[span_17](start_span)[span_17](end_span)。

## 主な機能

*   **アダプティブ・キーレイアウト:** 縦画面（モバイル）に最適な**8キーモード**と、横画面用の**13キーモードまたは17キーモード**を自動・手動で切り替えることができます[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span)。
*   **7種類の音階システム:** 7-Limit Soul Jazz Blues、23-Limit Natural Harmonics、Chinese 3-Limit JI、Pythagorean 3-Limit JI、Archytas's 7-Limit JI、Classic 5-Limit JI、Nearly TET 19-limit JI の7つのチューニングプリセットを瞬時に切り替え可能です[span_20](start_span)[span_20](end_span)[span_21](start_span)[span_21](end_span)。
*   **基音（トニック）とレシオのカスタマイズ:** 417.6 Hz、432 Hz、440 Hz、512 Hzの標準プリセット、または任意のカスタム周波数でルート音をチューニングできます[span_22](start_span)[span_22](end_span)[span_23](start_span)[span_23](end_span)。さらに分数倍率やオクターブシフト（+/-）によるリアルタイム調整をサポートしています[span_24](start_span)[span_24](end_span)。
*   **高品質レコーディングエンジン:** 32-bit Float および 16-bit PCM（48kHz / 96kHz）フォーマットに対応したWAVレコーダーを内蔵しています[span_25](start_span)[span_25](end_span)。低遅延の `AudioWorklet` を採用し、`ScriptProcessor` へのフォールバックエンジンも搭載しています[span_26](start_span)[span_26](end_span)。
*   **詳細なサウンドエディット:** 専用のオーディオ設定モーダルから、テクスチャ用のランダムノイズ、タイン（キー）ノイズフィルター、ハーモニックエフェクト（OSC 2）、コンプレッサーのルーティングを切り替え、理想の音作りが可能です[span_27](start_span)[span_27](end_span)。
*   **自動コード・フレーズ再生:** 音階に応じたコードパターンを、BPM調整機能とループ機能を利用して自動再生できます[span_28](start_span)[span_28](end_span)。
*   **リアルタイム・テレメトリ:** 最後に弾いたキーの正確な周波数、セント値、および音程間の比率（インターバル）の差を画面上で視覚的に確認できます[span_29](start_span)[span_29](end_span)。
*   **PWA（Progressive Web App）対応:** Service Workerによるキャッシュ管理とアップデート通知を備え、オフラインでも利用できるアプリとしてインストール可能です[span_30](start_span)[span_30](end_span)。

---

## 対応している音律

このシンセサイザーには、7つの異なる微小音律・純正律システムが含まれています：

1.  **7-Limit Soul Jazz Blues Tuning** – ソウルフルでブルージーな微小音律の表現に合わせたセプティマル音程（7限界）。
2.  **23-Limit Natural Harmonics** – 第16-32の自然倍音列から抽出した素数23までの上位倍音で音律を構成。
3.  **Chinese 3-Limit Dao** – 三分損益法に基づく伝統的な中国の3限界純正律（黄鐘・大呂・太簇などの律呂名と執始を含む音律）。
4.  **Pythagorean 3-Limit** – 3:2の完全五度をベースにした、文献史上世界最古の音律（Philolaos's Fragment B6）。
5.  **Archytas's 7-Limit Tetrachords** – 古代ギリシャのアルキタスによる素数7までの比率を利用したテトラコルド音律。
6.  **Classic 5-Limit Just Intonation** – 純正な長三度・短三度に最適化された伝統的な5限界純正律。
7.  **Nearly TET 19-limit Just Intonation** – 12平均律に近似した音程を持つ19限界純正律プリセット。

---

## 操作方法と演奏方法

### キーの演奏
*   **マウス / タッチ:** 任意のキーを直接クリックまたはタップして弾きます。
*   **コンピューターキーボード:** アクティブなキーに対応するキーボードショートカットを使用します（縦向き8キーモード: `1` ～ `8`、横向き13キーモード: `1` ～ `0`、`-`、 `=`、 `q`）。

### テレメトリーとモニタリング
*   **直前に弾いた音 (Last Plucked):** 直前に演奏したキーの比率、名前、正確な周波数（Hz）を表示します。
*   **音程比 (Inter-Note Ratio):** 前の音と現在の音の間の正確な音程比とセント差を計算します。

### 詳細設定パネル
*   **基準音 (Base Tonic) & 倍率 (Multiplier):** ルート音の周波数を調整し、音程比率を指定して基音を自由に移動できます。
*   **ノイズフィルター & 録音エンジン:** 音響ノイズシミュレーションのON/OFFおよび録音処理エンジン（`AudioWorklet` / `ScriptProcessor`）の切替が可能です。
*   **BPM設定 & アルペジオ:** コード再生速度（Chord BPM）や五度圏アルペジオのテンポ（Arp BPM）を調整できます。

---

## 録音とエクスポート

1. コントロールパネルから、希望するオーディオフォーマット（`32-bit Float / 48 kHz`、`32-bit Float / 96 kHz`、`16-bit PCM / 48 kHz`、または `16-bit PCM / 96 kHz`）と録音エンジンを選択します。
2. ヘッダーの**REC**ボタンをクリックして、マスター出力から直接音声のキャプチャを開始します。
3. ボタンが赤く点滅し、タイマーに録音時間が表示されます。
4. もう一度**REC**をクリックして停止します。
5. **Download WAV**をクリックして、演奏をローカルに保存します。

---

## 使い方とインストール (PWA)

ブラウザですぐに演奏するか、Google Chromeを使用して通信の不要なローカル環境で動くスタンドアロンのモバイルアプリとしてインストールできます。

### 1. オンラインで試す & インストールする
* Google Chromeでライブアプリケーションを開く:
  **[Extended Just Intonation Kalimba Synthesizer](https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/)**
* **アプリとしてインストールする場合:**
  * **モバイル (Android Chrome):** ブラウザメニューから **「ホーム画面に追加」** または **「アプリをインストール」** を選択します。
  * **デスクトップ (Chrome / Edge):** アドレスバーの右側にあるインストールアイコン（ダウンロード矢印やプラスバッジが付いた小さなモニター）をクリックするか、ブラウザメニューから **「Extended Just Intonation Kalimba Synthesizer をインストール...」** を選択します。

### 2. ローカル開発（オプション）
コードをローカルで実行または修正する場合:
1. リポジトリをクローンします：
   ```bash
   git clone [https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git](https://github.com/homo-rehabilis/Extended-Just-Intonation-Kalimba-Synthesizer.git)
   ```
