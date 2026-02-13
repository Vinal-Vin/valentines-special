# 💖 Valentine's Day Special for My Wife

A playful and interactive Valentine's Day application built with React and Tailwind CSS.

## 🎯 Features

- **Cute Pookie GIFs** - Adorable animations throughout the experience
- **Interactive Buttons** - Yes/No buttons with playful behavior
- **Growing Yes Button** - Gets bigger each time "No" is clicked
- **Changing No Button** - Displays sweet variations of "Pookie please" (4 times max)
- **Disappearing No** - After 4 clicks, only "Yes" remains
- **Sweet Message** - Beautiful Valentine's message when "Yes" is clicked
- **Photo Placeholder** - Space for your favorite couple photo

## 🚀 Getting Started

The development server should already be running! Check your browser at:

- Local: http://localhost:5178/

If you need to restart the server:

```bash
npm run dev
```

## 📸 Add Your Photo

To personalize with your couple photo:

1. Add your image to the `public` folder
2. Update line 76 in `src/App.jsx`:
   ```jsx
   <img
     src="/your-photo.jpg"
     alt="Us together"
     className="w-full h-64 object-cover rounded-xl"
   />
   ```

## 🎨 Customize

Feel free to customize:

- The sweet messages in the "Yes" screen
- The GIF URLs (find more at giphy.com)
- The color scheme in Tailwind classes
- The "Pookie please" variations

## 💝 How It Works

1. Your wife sees cute pookie gifs and the question "Will you be my Valentine?"
2. If she clicks "No":
   - The "Yes" button grows bigger
   - The "No" button changes text ("Pookie please 🥺", etc.)
   - Sad pookie gifs appear
3. After 4 "No" clicks, only "Yes" remains
4. When she clicks "Yes", a beautiful message and celebration appears!

## 🛠️ Built With

- React 18
- Vite
- Tailwind CSS
- Love 💕

---

**Happy Valentine's Day, my love!** 💖✨
