import Scarecrow from "./assets/Scarecrow.png";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid h-screen p-4">
      <Header />

      <main className="flex flex-col items-center md:flex-row font-mono h-[85vh]">
        <div className="flex justify-center items-center w-full md:w-1/2 md:h-full p-4">
          <img
            className="w-[286.83px] h-[238px] md:w-[539.22px] md:h-[447.43px]"
            src={Scarecrow}
            alt="Scarecrow image"
          />
        </div>

        <div className="flex flex-col justify-center p-5 w-full md:w-1/2 md:h-full">
          <h2 className="text-[#333333] font-bold text-5xl leading-[71.09px] md:text-6xl md:leading-[94.85px]">
            I have bad news for you
          </h2>
          <p className="text-[#4f4f4f] font-normal text-lg md:text-2xl leading-[26.66px] md:leading-[35.54px]">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <a
            className="flex justify-center items-center bg-[#333333] w-[216px] h-[68px] uppercase text-white text-sm leading-[20.73px] p-4 font-bold mt-5 md:mt-24 hover:bg-gray-900 transition-all"
            href="https://melvinsantana.com"
          >
            Back to homepage
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
