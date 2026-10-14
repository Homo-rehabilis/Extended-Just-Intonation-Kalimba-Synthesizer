<div align="right">
  <a href="#english">English</a> | <a href="#japanese">日本語</a>
</div>

---

<a id="english"></a>
# Extended Just Intonation Kalimba Synthesizer

A browser-based, high-precision **Just Intonation Kalimba Synthesizer** built with vanilla HTML5, CSS3, and the Web Audio API. This application allows musicians, microtonal enthusiasts, and learners to explore historical and alternative tuning systems through an interactive, responsive thumb piano interface.

---

## 🌟 What's New
### Custom Mode: Extended Just Intonation Custom Synthesizer β

https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/custom.html

An advanced custom extension designed for exploring tuning systems using custom frequency ratios. It features 4 highly customizable preset slots, harmonic modes inspired by physical and biological acoustics (*Syrinx*, *Cricket*, and instrument inharmonics), acoustic parameters (LFO Vibrato, Initial Pitch Chirp, ADSR, Nonlinear Decay), high-definition WAV recording (up to 32-bit Float / 192 kHz), HPF/LPF filters, a compressor, real-time performance looping, and full **Scala (`.scl`)** file import/export support.

1. **Preset Management, Base Tonic & Tuning Layout**
   * **4 Individual Preset Slots:** Save, Load, and Reset to Default for 4 independent preset slots using `localStorage` (Preset 1–4) with download support.
   * **Base Frequency Configuration:** Select preset values (417.6 Hz, 432 Hz, 440 Hz, 512 Hz, or 3569.48 Hz for cricket-based tuning) or enter custom values (100–6000 Hz).
   * **Ratio Multipliers & Octave Shift:** Apply exact fraction multipliers (Numerator/Denominator from 1–99), shift octaves (±N), and utilize 12 customizable quick Just Intonation ratio shortcut buttons.
   * **Key Layout:** Switch between 8-key and 17-key layouts (with automatic switching based on screen orientation/aspect ratio).

2. **Harmonic Modes & Physical Modeling**
   * **Rich Harmonic Modes:**
     * `Sine`: Pure fundamental sine wave.
     * `1, 2, 3`: Adds 2nd and 3rd natural harmonics.
     * `Inharmonic` / `Inharm2`: Inharmonic overtones (1 or 2 extra inharmonic components).
     * `Syrinx`: Complex resonance series inspired by Pan's flute / avian vocal organs.
     * `Cricket`: Insect-like tone combining 45 Hz Amplitude Modulation (AM) with inharmonic overtones.
   * **Harmonic Controls:**
     * `Harm Vol`: Continuous harmonic gain adjustment (0.0–0.5).
     * `Inharm Ratio`: Select physical ratios (Fundamental 1.000, Circular Membrane Modes 1.594/2.136, Golden Ratio 1.618, π 3.142, Stiff String 3.400, Metallic Bell 3.650, Free-Free Bar 2.756, etc.).

3. **Timbre Panel (Advanced Acoustic Settings)**
   * **Vibrato (LFO):** Toggle ON/OFF, rate control (1.0–15.0 Hz), and depth control (0–10%).
   * **Nonlinear Harmonic Decay:** Toggle ON/OFF with 5 selectable decay curves (Low Damping, Glass/Crystal, Standard Metal Bar, Stiff Material/High Friction, or Square Law Damping).
   * **Initial Pitch Chirp:** Transient pitch drop/rise on attack (Depth: 0.0–7.0%, Duration: 2–45 ms).
   * **Physical Attack Noise:** Toggle between Metallic Touch and Fast Attack modes.
   * **Random Noise & Filter:** Adjustable random noise gain and bandpass filter cutoff frequency.
   * **LPF / HPF / BPF Filters:** Individual sub-tab configuration with adjustable cutoff frequencies and slope characteristics (6 to 36 dB/oct).


4. **ADSR Envelope, Spatial & Master Settings**
   * **Independent ADSR Envelope:** Slider controls for Attack, Decay, Sustain, and Release parameters.
   * **Master & Spatial Controls:**
     * Master gain slider (-40 dB to -12 dB).
     * Stereo / Mono toggle with individual Pan (L1.00–R1.00) and Preset Gain (0.10–2.00) controls in stereo mode.
     * **Key-Position Stereo Spread:** Automatically spreads notes across the stereo field based on key placement (ON/OFF).
     * **Long Press Mode:** Toggle between sustained long tones (Long Tone) and rapid repeated triggers (Rapid Fire).
   * **Compressor:** Switch between Standard (Threshold -24 dB), Hard (Threshold -12 dB), and OFF (Bypass).

5. **Performance & Playback Functions**
   * **Triggering Inputs:** Touch / Mouse triggering (with long-press support) and QWERTY keyboard shortcuts.
   * **Chord Arpeggiator:** One-click chord triggering, BPM control (1–500), loop playback toggle, and stop button.
   * **Real-time Performance Loop:** Record user keystrokes in real-time (REC), loop playback, and clear.

6. **High-Definition Recording & WAV Export**
   * **Formats:** 32-bit Float / 16-bit PCM at 192 kHz, 96 kHz, or 48 kHz (6 total format configurations).
   * **Recording Engine:** AudioWorklet (primary) with ScriptProcessor fallback.
   * **File Export:** Live recording timer with automatic timestamped filename download (.wav).

7. **Visual Interface & Scale/Chord Editor (Scala Support)**
   * **Display Switcher (3 Modes):**
     * `INFO`: Telemetry display (last note played, inter-note ratio, cent differences).
     * `FFT`: Real-time FFT frequency visualizer (logarithmic frequency scale).
     * `Timbre`: Deep acoustic timbre adjustment panel.
   * **Fullscreen Mode:** Toggle full-screen display for the synthesizer card.
   * **Scala (.scl) Compatibility:**
     * Scale and Chord Editor for 8-key and 17-key layouts.
     * One-click loading of server `.scl` preset files (Chinese, Pythagorean, Classic, 7-limit, 23-limit, etc.).
     * Local `.scl` file import and custom scale `.scl` export.
   * **Progressive Web App (PWA):** Offline capability via Service Worker with automatic update notifications.

---

## Standard Key Features

*   **Adaptive Key Layouts:** Automatically switches between an **8-Key mode** (ideal for portrait or mobile views) and a **13-Key or 17-Key mode** (for landscape views).
*   **7 Distinct Scale Systems:** Switch instantly between 7 microtonal and historical just intonation tuning presets, including 7-Limit Soul Jazz Blues, 23-Limit Natural Harmonics, Chinese 3-Limit JI, Pythagorean 3-Limit JI, Archytas's 7-Limit JI, Classic 5-Limit JI, and Nearly TET 19-limit JI.
*   **Customizable Base Tonic (1/1) & Ratio Multiplier:** Tune the root frequency using standard presets (417.6 Hz, 432 Hz, 440 Hz, 512 Hz) or custom input, with real-time tonic fraction multipliers and octave shifting (+/-).
*   **High-Quality Recording Engine:** Built-in WAV audio recording supporting 32-bit Float and 16-bit PCM formats at 48 kHz or 96 kHz. Enabled to select low-latency `AudioWorklet` or `ScriptProcessor`.
*   **Advanced Audio Customization:** A dedicated settings modal allows toggling of Random Noise textures, Tine Noise Filters, Harmonic Effects, and Compressor Routing to shape the perfect tone.
*   **Automated Chord Playback:** Trigger scale-specific chord patterns with an adjustable BPM controller and loop toggle capabilities.
*   **Real-Time Telemetry:** Visual readout of the last plucked tines, displaying exact frequencies, cents, and inter-note ratio differences.
*   **Progressive Web App (PWA):** Fully installable with built-in service worker caching and on-screen update notifications for offline use.

---

## Supported Scale Systems

The synthesizer includes 7 distinct microtonal and just intonation tuning systems:

1.  **7-Limit Soul Jazz Blues Tuning** – Explores septimal intervals tailored for soulful, bluesy microtonal expressions.
2.  **23-Limit Natural Harmonics** – Features upper partials derived from 16-32 natural harmonic series up to the 23rd prime limit.
3.  **Chinese 3-Limit Dao** – Traditional Chinese 3-limit tuning based on the Sanfen Sunyi (pythagorean-like) method, mapping classic pitch names.
4.  **Pythagorean 3-Limit** – Pure 3-limit tuning based on 3:2 fifths, recognized as the oldest recorded tuning system in history (Philolaos's Fragment B6).
5.  **Archytas's 7-Limit Tetrachords** – Ancient Greek tuning system utilizing septimal ratios based on Archytas's tetrachord.
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

## 🌟 新機能
### Custom Mode：Extended Just Intonation Custom Synthesizer β

https://homo-rehabilis.github.io/Extended-Just-Intonation-Kalimba-Synthesizer/custom.html

細部まで調整可能な4つの個別プリセット、生体音響や音響物理の特性を応用した倍音モード（シリンクス・コオロギ・各種楽器の非調和倍音など）、音響パラメータ（LFOビブラート・ピッチチャープ・ADSR・非線形減衰特性）、ハイレゾWAV録音（最大32-bit Float/192kHz）、HPF/LPFフィルター、コンプレッサー、リアルタイムループ録音、および **Scala (`.scl`) ファイル** のインポート/エクスポート機能を備えた、ユーザー独自の比率を用いた音律を探求できるカスタム拡張モードです。

1. **プリセット管理 & 基音・音律レイアウト**
   * **4つのプリセットスロット:** `localStorage` を活用した個別の保存（Save）、読込（Load）、デフォルトリセット（Reset）機能（Preset 1〜4）。最新版ではDownloadフォルダへの保存と読込が可能に。
   * **基準周波数（Base Frequency）:** 417.6Hz、432Hz、440Hz、512Hz、3569.48Hz（コオロギ基準等）のプリセット選択、または100〜6000Hzのカスタム数値入力。
   * **比率乗数 & オクターブ:** 分子/分母（1〜99）による乗算、オクターブシフト（±N）。さらに12種類のカスタマイズ可能な純正比率ショートカットボタンを装備。
   * **鍵盤レイアウト:** 8キー／17キーの切り替え（画面の縦横比に応じた自動判定・切替にも対応）。

2. **倍音モード（Harmonic Modes）と物理モデリング**
   * **多彩なモード選択:**
     * `Sine`: 純音（サイン波）。
     * `1,2,3`: 第2・第3自然倍音を加えた響き。
     * `Inharmonic` / `Inharm2`: 非調和倍音（1系統または2系統を追加）。
     * `Syrinx`: シリンクス（ギリシャ神話のパンの笛／鳥類の鳴声器官に由来する複雑な共鳴倍音列）。
     * `Cricket`: 45Hzの振幅変調（AM）と非調和倍音を組み合わせたコオロギの鳴き声風音色。
   * **倍音・非調和パラメータ:**
     * `Harm Vol`: 倍音ボリューム（0.0〜0.5）。
     * `Inharm Ratio`: プリセット切替（基音1.000、円形膜モード1.594/2.136、黄金比1.618、π 3.142、弦剛性3.400、ベル音3.650、自由端バー2.756等）。

3. **Timbre（音色）パネル**
   * **Vibrato (LFO):** ON/OFF、速度（1.0〜15.0 Hz）、深度（0〜10%）。
   * **Nonlinear Harmonic Decay:** ON/OFF、減衰特性（Decay Power 5段階切替：低減衰・ガラス調・標準金属バー・剛性素材・急激な二乗則）。
   * **Initial Pitch Chirp:** 打鍵初期のピッチチャープ（深度0.0〜7.0%、持続時間2〜45ms）。
   * **Physical Attack Noise:** メタリックタッチ / 高速アタックの切替。
   * **Random Noise & Filter:** ランダムノイズの音量調整およびバンドパスフィルター（カットオフ周波数設定）。
   * **LPF / HPF / BPF フィルター:** 個別周波数設定とスロープ特性（6〜36 dB/oct）が選択可能。

4. **ADSRエンベロープ & 空間・マスター設定**
   * **ADSR 個別調整:** Attack、Decay、Sustain、Release をスライダーで精密に設定。
   * **ボリューム・空間設定:**
     * マスターゲインスライダー（-40dB〜-12dB）。
     * ステレオ / モノラル切替、ステレオ時の個別パン（L1.00〜R1.00）およびゲイン（0.10〜2.00）。
     * **Key-Position Stereo Spread:** 鍵盤位置に応じた自動パン配置（ON/OFF）。
     * **ロングプレス動作:** 長音維持（Long Tone）か連打（Rapid Fire）の切替。
   * **コンプレッサー:** Standard（閾値-24dB）、Hard（閾値-12dB）、OFF（バイパス）の切替。

5. **演奏・パフォーマンス機能**
   * **打鍵トリガー:** マウス／タッチ（長押し・連打対応）、QWERTYキーボードによる演奏。
   * **コード自動演奏（Arpeggio）:** コードボタン選択、BPM設定（1〜500）、ループ再生ON/OFF、ストップ。
   * **リアルタイムパフォーマンス録音:** 打鍵のリアルタイム録音（REC）、ループ再生、消去。

6. **ハイレゾオーディオ録音 & WAVエクスポート**
   * **フォーマット:** 32-bit Float / 16-bit PCM × 192kHz / 96kHz / 48kHz（全6種）。
   * **録音エンジン:** AudioWorklet（メイン）とScriptProcessor（フォールバック）の選択。
   * **ファイル管理:** タイマー表示付き録音と、日時スタンプ付きファイル名のWAVダウンロード。

7. **ビジュアル・UI機能 & スケールエディター（Scala対応）**
   * **表示切替（3モード）:**
     * `INFO`: テレメトリ（最後に弾いた音・音程比率・セント差）。
     * `FFT`: リアルタイムFFT周波数アナライザー（対数スケール）。
     * `Timbre`: 音色詳細設定パネル。
   * **フルスクリーンモード:** アプリ全体の全画面表示切替。
   * **Scala (.scl) 完全対応:**
     * 8キー／17キーのカスタム鍵盤・コードエディター。
     * サーバー上の多彩な `.scl` ファイル（Chinese, Pythagorean, Classic, 7-limit, 23-limitなど）のワンクリック読み込み。
     * ローカル `.scl` ファイルのインポートおよびカスタムスケールのエクスポート。
   * **Web App機能:** Service Workerによるオフライン対応と自動更新通知。

---

## 主な機能

*   **アダプティブ・キーレイアウト:** 縦画面（モバイル）に最適な**8キーモード**と、横画面用の**13キーモードまたは17キーモード**を自動・手動で切り替えることができます。
*   **7種類の音階システム:** 7-Limit Soul Jazz Blues、23-Limit Natural Harmonics、Chinese 3-Limit JI、Pythagorean 3-Limit JI、Archytas's 7-Limit JI、Classic 5-Limit JI、Nearly TET 19-limit JI の7つのチューニングプリセットを瞬時に切り替え可能です。
*   **基音と比率のカスタマイズ:** 417.6 Hz、432 Hz、440 Hz、512 Hzの標準プリセット、または任意のカスタム周波数でルート音をチューニングできます。さらに分数倍率やオクターブシフト（+/-）によるリアルタイム調整をサポートしています。
*   **高品質レコーディングエンジン:** 32-bit Float および 16-bit PCM（48kHz / 96kHz）フォーマットに対応したWAVレコーダーを内蔵しています。低遅延の `AudioWorklet` を採用し、不具合がある場合の`ScriptProcessor` への切り替え機能も搭載しています。
*   **詳細なサウンドカスタマイズ:** 右上の⚙️にあるオーディオ設定画面から、サウンドテクスチャ用のランダムノイズ、タイン（キー）ノイズフィルター、インハーモニック倍音エフェクト、コンプレッサーのルーティングを切り替え、理想の音作りが可能です。
*   **自動コード・アルペジオ再生:** 音階に応じたコードパターンを、BPM調整機能とループ機能を利用して自動再生できます。
*   **リアルタイム・テレメトリ:** 最後に弾いたキーの正確な周波数、セント値、および音程間の比率（インターバル）の差を画面上で視覚的に確認できます。
*   **PWA（Progressive Web App）対応:** Service Workerによるキャッシュ管理とアップデート通知を備え、オフラインでも利用できるアプリとしてインストール可能です。

---

## 対応している音律

このシンセサイザーには、7つの異なる微小音律・純正律システムが含まれています：

1.  **7-Limit Soul Jazz Blues Tuning** – ソウルフルでブルージーな微小音律の表現に合わせたセプティマル音程（7限界）。
2.  **23-Limit Natural Harmonics** – 第16-32の自然倍音列から抽出した素数23までの上位倍音で音律を構成。
3.  **Chinese 3-Limit Dao** – 三分損益法に基づく伝統的な中国の3限界純正律（黄鐘・大呂・太簇などの律呂名と執始を含む音律）。
4.  **Pythagorean 3-Limit** – 3:2の完全五度をベースにした、文献史上世界最古の音律（Philolaos's Fragment B6）。
5.  **Archytas's 7-Limit Tetrachords** – 古代ギリシャのアルキタスの理論に基づく素数7までの比率を利用したテトラコルド音律。
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
*   **BPM設定 & アルペジオ:** コード再生速度（Chord BPM）や五度圏アルペジオのテンポを調整できます。

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
