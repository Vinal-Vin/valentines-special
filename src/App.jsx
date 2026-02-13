import { useState } from "react";
import "./App.css";

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showYesMessage, setShowYesMessage] = useState(false);

  const noButtonTexts = [
    "Pookie please 🥺",
    "Pookie pretty please 💕",
    "Pookie I'm begging you 🙏",
    "Pookie don't do this to me 😢",
  ];

  // Calculate Yes button size based on no clicks
  const yesButtonSize = 1 + noClickCount * 0.5;

  const handleNoClick = () => {
    if (noClickCount < 4) {
      setNoClickCount(noClickCount + 1);
    }
  };

  const handleYesClick = () => {
    setShowYesMessage(true);
  };

  if (showYesMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4">
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5ZHh6cGJldm1kd3F3YjJ3dGJxZGZ5eGR3YmJ4aHJiZXFxYzN0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
              alt="Cute celebration"
              className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">Yay! 💕✨</h1>
            <p className="text-2xl text-gray-700 font-semibold">
              I knew you couldn't resist, my love!
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              You're my favorite person in the whole world 🌎
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every day with you is a gift 🎁
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              You make my heart so full ❤️
            </p>
            <div className="mt-8 pt-6 border-t border-pink-200">
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Happy Valentine's Day, my beautiful wife! 💖
              </p>
              <p className="text-lg text-gray-600 mt-2">
                I love you more than words can say 💑
              </p>
            </div>
          </div>

          {/* Placeholder for couple photo */}
          <div className="mt-8 p-6 bg-pink-50 rounded-2xl border-4 border-pink-200">
            <div className="w-full h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                📷 Replace this with a photo of you two together
                <br />
                <span className="text-sm">
                  (Add your image in the public folder and update the src)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center">
        <div className="mb-8">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGxnZ2w3d2VjMmdnNWNpdXk4aXp4azdxNzVyZXlsMG85dHJma2E3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcJGy8I928yIlAQ/giphy.gif"
            alt="Cute pookie gif"
            className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          Hey Pookie! 💕
        </h1>

        <p className="text-2xl text-gray-700 mb-8 font-semibold">
          Will you be my Valentine? 🌹
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesButtonSize})`,
              transition: "transform 0.3s ease",
            }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            Yes! 💖
          </button>

          {noClickCount < 4 && (
            <button
              onClick={handleNoClick}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {noClickCount === 0 ? "No" : noButtonTexts[noClickCount - 1]}
            </button>
          )}
        </div>

        {noClickCount > 0 && noClickCount < 4 && (
          <div className="mt-6">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1vd3U5MDBkMWg5djFwZGFtcDVnaGM4eTZxdGl3ZmxuMWhvOWFkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif"
              alt="Sad pookie"
              className="w-48 h-48 mx-auto rounded-xl object-cover"
            />
          </div>
        )}

        {noClickCount === 4 && (
          <div className="mt-6">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTc5NGJtZHZpZGE1YWhtZWRzM2k0NzhnOHp4Y2JvaDY4MDRvODJocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif"
              alt="Very sad pookie"
              className="w-48 h-48 mx-auto rounded-xl object-cover"
            />
            <p className="text-xl text-gray-600 mt-4 font-semibold">
              You know you want to click Yes... 👉👈
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
