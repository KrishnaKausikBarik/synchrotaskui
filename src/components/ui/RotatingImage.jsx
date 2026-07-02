import RotatingImageSvg from "../../assets/Components/Hero Section/RotatingImage.svg";

export default function RotatingImage() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-[7] flex justify-center pointer-events-none">
      <style>{`
        .rotating-image-container {
          position: relative;
          overflow: hidden;
        }

        .rotating-image-container img {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          animation: spin 30s linear infinite;
        }

        @keyframes spin {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        /* Mobile: width < 640px */
        @media (max-width: 639px) {
          .rotating-image-container {
            width: 280px;
            height: 112px;        /* 40% of 280px */
          }

          .rotating-image-container img {
            width: 280px;
            height: 280px;
          }
        }

        /* Tablet: 640px - 1024px */
        @media (min-width: 640px) and (max-width: 1023px) {
          .rotating-image-container {
            width: 380px;
            height: 152px;        /* 40% of 380px */
          }

          .rotating-image-container img {
            width: 380px;
            height: 380px;
          }
        }

        /* Desktop: 1024px+ */
        @media (min-width: 1024px) {
          .rotating-image-container {
            width: 800px;
            height: 320px;        /* 40% of 800px */
          }

          .rotating-image-container img {
            width: 800px;
            height: 800px;
          }
        }

        /* Landscape orientation */
        @media (max-height: 500px) and (orientation: landscape) {
          .rotating-image-container {
            width: 250px;
            height: 100px;        /* 40% of 250px */
          }

          .rotating-image-container img {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>

      <div className="rotating-image-container">
        <img
          src={RotatingImageSvg}
          alt="Rotating"
        />
      </div>
    </div>
  );
}