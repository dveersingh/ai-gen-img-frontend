# AI Image Generator - Frontend (Next.js)

This is the frontend for the AI Image Generator project built with **Next.js**. It interacts with a FastAPI backend to generate images from text prompts using a Hugging Face model.

---

## 🛠️ Features

- Modern UI built with React and Next.js
- Sends user prompts to backend for image generation
- Displays generated image on the same page
- Ready for deployment on Vercel

---

## 📁 Project Structure

```
ai-generate-image/
├── backend/              # FastAPI Backend (separate repo/directory)
└── frontend/             # This Next.js frontend project
```

---

## 🚀 Getting Started




### 1. Install dependencies

Make sure you have Node.js (v18 or higher) installed.

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Connecting to Backend

If you're using **hardcoded URLs**, update your `fetch` calls with the correct backend URL (e.g., in `pages/index.js`):

```js
fetch("https://your-backend-url.com/generate-image", ...)
```

Or, if using environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

And access it in your code:

```js
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
```

---

## 🔄 Deployment on Vercel

1. Push your frontend code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the project
3. Set root directory to `frontend/`
4. Set `NEXT_PUBLIC_BACKEND_URL` in Vercel's Environment Variables (if used)
5. Deploy 🚀

---


## 📄 License

MIT


