import "@/assets/tailwind.css"; // Ensure your Tailwind CSS is properly linked
import MagicWandIcon from "@/assets/icons/magic-wand.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-96 w-96  p-6 bg-background  text-foreground text-center">
      {/* Icon */}
      <img
        src={MagicWandIcon}
        alt="Magic Wand"
        className="w-16 h-16 mb-4 animate-pulse"
      />

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">You're all set!</h1>

      {/* Message */}
      <p className="text-lg text-foreground mb-4">
        There's no need to enable the extension—since you&apos;ve added it to
        your browser, it just works like magic!
      </p>

      {/* Subtle Call-to-action or Note */}
      <p className="text-sm text-primary opacity-80 italic">
        Enjoy the seamless experience. No more manual switches!
      </p>

      {/* Decorative footer or spacing */}
      <div className="mt-6">
        <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
