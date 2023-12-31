
export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const BACKGROUND='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg';

export const USER_AVATAR = 'https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e';

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "ru", name: "Russian" },
    { identifier: "hi", name: "Hindi" },
  ];

export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const MAX_CACHE_SIZE = 5;

export const IFRAME = {
  link_0: 'https://www.youtube.com/embed/',
  link_1: '?autoplay=1&mute=1&controls=0&loop=1',
  title: 'YouTube video player',
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
};

export const LOADING_TEXT = 'Loading...';

export const GPT_ROUTE = '/gpt';
export const BROWSE_ROUTE = '/browse';
export const DETAILS_ROUTE = '/details';