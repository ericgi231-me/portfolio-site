import useTheme from '../hooks/useTheme';
import pumpkin1 from '../assets/images/pumpkin1.png';
import pumpkin2 from '../assets/images/pumpkin2.png';
import skeletons from '../assets/images/skeletons.png';
import skeleton1 from '../assets/images/skeleton1.gif';
import skeleton2 from '../assets/images/skeleton2.gif';

function BackgroundImages() {
  const { isDark } = useTheme();

  if (!isDark) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <img
        src={skeletons}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20"
      />
      
      <img
        src={pumpkin2}
        alt=""
        className="absolute left-[2%] top-[10%] h-64 opacity-15"
      />
      
      <img
        src={pumpkin1}
        alt=""
        className="absolute right-[4%] top-[20%] h-56 opacity-15"
      />

      <img
        src={skeleton1}
        alt=""
        className="absolute bottom-[8%] left-[4%] h-56 opacity-15 hidden md:block"
      />

      <img
        src={skeleton2}
        alt=""
        className="absolute bottom-[8%] right-[4%] h-56 opacity-15 hidden md:block"
      />
    </div>
  );
}

export default BackgroundImages;