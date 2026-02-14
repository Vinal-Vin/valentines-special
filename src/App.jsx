import { useState } from "react";
import "./App.css";

/**
 * Valentine's Day Special Application
 * A romantic interactive experience with animated backgrounds,
 * playful button interactions, and sweet Valentine's messages.
 */
function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showYesMessage, setShowYesMessage] = useState(false);

  // Sweet messages that appear on the "No" button after each click
  const noButtonTexts = [
    "Pookie please 🥺",
    "Pookie pretty please 💕",
    "Pookie I'm begging you 🙏",
    "Pookie don't do this to me 😢",
  ];

  // Calculate Yes button size - grows with each "No" click to make it more tempting!
  const yesButtonSize = 1 + noClickCount * 0.5;

  // Handle "No" button clicks - changes button text and grows "Yes" button
  const handleNoClick = () => {
    if (noClickCount < 4) {
      setNoClickCount(noClickCount + 1);
    }
  };

  // Handle "Yes" button click - shows the success message!
  const handleYesClick = () => {
    setShowYesMessage(true);
  };

  // Success screen shown when "Yes" is clicked
  if (showYesMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated floating hearts background */}
        <div className="floating-hearts"></div>
        
        {/* Falling rose petals animation */}
        <div className="falling-petals">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>

        <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center relative z-10 border-4 border-pink-200">
          {/* Cupid icon decoration */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full p-2 shadow-lg sparkle">
            <img src="/cupid.svg" alt="Cupid" className="w-full h-full" />
          </div>
          
          <div className="mb-6">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ5ZHh6cGJldm1kd3F3YjJ3dGJxZGZ5eGR3YmJ4aHJiZXFxYzN0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
              alt="Cute celebration"
              className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-lg ring-4 ring-pink-300"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-4">
              <span className="animated-gradient-text">Yay! </span>
              <span className="heartbeat">💕✨</span>
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">
              I knew you couldn't resist, my love! <span className="heartbeat">❤️</span>
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              You're my favorite person in the whole world <span className="heartbeat">🌎</span>
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every day with you is a gift <span className="heartbeat">🎁</span>
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              You make my heart so full <span className="heartbeat">❤️</span>
            </p>
            <div className="mt-8 pt-6 border-t border-pink-200">
              <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
                Happy Valentine's Day, my beautiful wife! 
                <span className="heartbeat ml-2">💖</span>
              </p>
              <p className="text-lg text-gray-600 mt-2">
                I love you more than words can say <span className="heartbeat">💑</span>
              </p>
            </div>
          </div>

          {/* Placeholder for couple photo with decorative hearts */}
          <div className="mt-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-4 border-pink-200 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="text-4xl heartbeat">💝</span>
            </div>
            <div className="w-full h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-red-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                <span className="text-5xl mb-2 block">📷</span>
                Replace this with a photo of you two together
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

  // Main question screen with interactive buttons
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating hearts background */}
      <div className="floating-hearts"></div>
      
      {/* Falling rose petals animation */}
      <div className="falling-petals">
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
        <div className="petal"></div>
      </div>

      <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center relative z-10 border-4 border-pink-200">
        {/* Heart decorations on corners */}
        <div className="absolute -top-4 -left-4 text-4xl heartbeat">💗</div>
        <div className="absolute -top-4 -right-4 text-4xl heartbeat" style={{animationDelay: '0.5s'}}>💗</div>
        
        <div className="mb-8">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGxnZ2w3d2VjMmdnNWNpdXk4aXp4azdxNzVyZXlsMG85dHJma2E3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcJGy8I928yIlAQ/giphy.gif"
            alt="Cute pookie gif"
            className="w-64 h-64 mx-auto rounded-2xl object-cover shadow-lg ring-4 ring-pink-300"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4">
          <span className="animated-gradient-text">Hey Pookie! </span>
          <span className="heartbeat">💕</span>
        </h1>

        <p className="text-2xl text-gray-700 mb-8 font-semibold">
          Will you be my Valentine? <span className="heartbeat">🌹</span>
        </p>

        {/* Interactive buttons with enhanced styling */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleYesClick}
            style={{
              transform: `scale(${yesButtonSize})`,
              transition: "transform 0.3s ease",
            }}
            className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 shimmer relative"
          >
            <span className="relative z-10">Yes! 💖</span>
          </button>

          {noClickCount < 4 && (
            <button
              onClick={handleNoClick}
              className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {noClickCount === 0 ? "No" : noButtonTexts[noClickCount - 1]}
            </button>
          )}
        </div>

        {/* Sad reactions when "No" is clicked */}
        {noClickCount > 0 && noClickCount < 4 && (
          <div className="mt-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-3xl heartbeat">💔</div>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG1vd3U5MDBkMWg5djFwZGFtcDVnaGM4eTZxdGl3ZmxuMWhvOWFkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L95W4wv8nnb9K/giphy.gif"
              alt="Sad pookie"
              className="w-48 h-48 mx-auto rounded-xl object-cover ring-2 ring-gray-300"
            />
          </div>
        )}

        {/* Extra sad reaction after 4 "No" clicks */}
        {noClickCount === 4 && (
          <div className="mt-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-3xl heartbeat">💔</div>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTc5NGJtZHZpZGE1YWhtZWRzM2k0NzhnOHp4Y2JvaDY4MDRvODJocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif"
              alt="Very sad pookie"
              className="w-48 h-48 mx-auto rounded-xl object-cover ring-2 ring-gray-300"
            />
            <p className="text-xl text-gray-600 mt-4 font-semibold">
              You know you want to click Yes... <span className="heartbeat">👉👈</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
