interface LanguageTranslations {
    search: string;
    gptSearchPlaceholder: string;
};
  
interface LangType{
    [key: string]: LanguageTranslations;
};

const lang: LangType = {
    en: {
      search: "Search",
      gptSearchPlaceholder: "What would you like to watch today?",
    },
    hindi: {
      search: "खोज",
      gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    },
    spanish: {
      search: "buscar",
      gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
    },
  };
  
  export default lang;