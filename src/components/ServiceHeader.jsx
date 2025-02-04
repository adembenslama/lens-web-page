import { useNavigate } from "react-router-dom";
import { brainwave } from "../assets";

const ServiceHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-n-1 transition-colors hover:text-color-1"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-code text-xs uppercase">Retour</span>
        </button>

        <a className="block w-[12rem] mx-auto" href="/">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
      </div>
    </div>
  );
};

export default ServiceHeader; 