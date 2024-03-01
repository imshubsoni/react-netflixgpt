import GPTSearchForm from "./GPTSearchForm";
import GptSearchResults from "./GptSearchResults";

const GPTSearch = () => {
  return (
    <div className="gpt-search-container">
      <div className="overlay w-full h-full bg-black opacity-60 top-0 bottom-0 left-0 right-0 fixed z-0"></div>
      <div className="background-img-container fixed bg-cover w-full h-full -z-10">
        <img
          className="min-w-full min-h-full h-[102vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <GPTSearchForm />
      <GptSearchResults />
    </div>
  );
};

export default GPTSearch;
