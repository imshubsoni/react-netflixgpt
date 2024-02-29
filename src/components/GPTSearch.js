import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const currentLang = useSelector((store) => store.config.lang);

  return (
    <div className="gpt-search-container">
      <div className="overlay w-full h-full bg-black opacity-60 top-0 bottom-0 left-0 right-0 fixed z-0"></div>
      <div className="background-img-container absolute bg-cover w-full h-full -z-10">
        <img
          className="min-w-full min-h-full h-[102vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className="gpt-search-form-container z-20 relative w-6/12 m-auto pt-[10%]">
        <div className="gpt-search-form bg-black text-center p-4 shadow-sm rounded-md shadow-white">
          <form className="gpt-form">
            <input
              className="gpt-search-input w-9/12 p-5 rounded-sm"
              placeholder={lang[currentLang].gptSearchPlaceholder}
              type="text"
            />
            <button className="bg-red-600 text-white py-5 ml-4 w-2/12 rounded-lg">
              {lang[currentLang].search}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
