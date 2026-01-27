import useTheme from '../hooks/useTheme';
import bottomImage from '../assets/images/dark2.png';
import leftImage from '../assets/images/dark1.png';
import rightImage from '../assets/images/dark1.png';

function BackgroundImages() {
  const { isDark } = useTheme();

  if (!isDark) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <img
        src={bottomImage}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20"
      />
      
      <img
        src={leftImage}
        alt=""
        className="absolute left-[2%] top-[10%] h-64 opacity-15"
      />
      
      <img
        src={rightImage}
        alt=""
        className="absolute right-[4%] top-[30%] h-56 opacity-15"
      />
    </div>
  );
}

export default BackgroundImages;