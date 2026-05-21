# ThumbExp

ThumbExp helps you generate better YouTube and social media thumbnails. Upload your video, get AI-powered thumbnail suggestions based on the actual content, pick one, add context, and download a ready-to-use image no design tools required.

https://github.com/user-attachments/assets/c741874c-f216-4d92-b2e2-2a11b453836a

> This project is currently open source. That may change in the future.

---

## Tech Stack

- **Frontend** : Next.js, Tailwind CSS
- **Backend** : Node.js, Express.js, FFmpeg
- **AI** : Replicate API

---

## Local Setup

### Prerequisites

- Node.js installed
- FFmpeg installed (see below)
- A Replicate API key : get one at [replicate.com](https://replicate.com/)

---

### 1. Clone the repository

SSH:

```bash
git clone git@github.com:SuperexMack/ThumbExp.git
```

HTTPS:

```bash
git clone https://github.com/SuperexMack/ThumbExp.git
```

---

### 2. Start the frontend

```bash
cd ThumbExp/Frontend/client
npm install
npm run dev
```

---

### 3. Configure the backend

Navigate to the Backend folder and create a `.env` file:

```bash
cd ../../Backend
touch .env
```

Open it and add the following:

```
PORT=9000
API_KEY=your_replicate_api_key_here
```

Then install dependencies and start the server:

```bash
npm install
npm run dev
```

---

### 4. Open the app

Visit [http://localhost:3000](http://localhost:3000)

---

## Installing FFmpeg

**Ubuntu / Debian:**

```bash
sudo apt update && sudo apt install ffmpeg -y
ffmpeg -version
```

If the version prints correctly, you are good to go.

---

## How to Use

1. Go to [http://localhost:3000/thumbCreate](http://localhost:3000/thumbCreate) or click **Start Building**
2. Upload your video
3. Wait a moment : ThumbExp will analyze the video and surface thumbnail suggestions
4. Select a suggestion that fits your content
5. Add context describing what the thumbnail should convey
6. Click **Generate Thumbnail**
7. Once generated, hit **Download**

---

## Current Limitations

- No user accounts yet , everything runs as a guest session
- Videos with no spoken audio (pure music, vlogs, room tours) may not generate strong suggestions voice-based content works best right now. Improving this is on the roadmap.
- Version 1.0 , expect rough edges

Found a bug? Reach out:

- Twitter / X: [@mohitsatitwt](https://x.com/mohitsatitwt)
- LinkedIn: [mohitsatilinks](https://www.linkedin.com/in/mohitsatilinks/)

---

## Contributing

Open source contributions are welcome. If you want to improve ThumbExp whether it is a bug fix, a new feature, or a better approach to something open a pull request or start a discussion.

---

Built with hard work and care by [Mohit Sati](https://github.com/SuperexMack)
