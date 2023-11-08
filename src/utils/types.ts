export interface LanguageTranslations {
    search: string;
    gptSearchPlaceholder: string;
};
  
export interface LangType{
    [key: string]: LanguageTranslations;
};

export interface Result {
    adult:             boolean;
    backdrop_path:     null | string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
};
export interface GptSliceType {
    movieResults: Result[][] | null,
    movieNames: string[] | null,
};

export interface MovieType {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
  }
  
export interface VideoType {
iso_639_1:    string;
iso_3166_1:   string;
name:         string;
key:          string;
published_at: Date;
site:         string;
size:         number;
type:         string;
official:     boolean;
id:           string;
}
  
  
export interface PopularMovieType {
adult:                 boolean;
backdrop_path:         string;
belongs_to_collection: BelongsToCollection;
budget:                number;
genres:                Genre[];
homepage:              string;
id:                    number;
imdb_id:               string;
original_language:     string;
original_title:        string;
overview:              string;
popularity:            number;
poster_path:           string;
production_companies:  ProductionCompany[];
production_countries:  ProductionCountry[];
release_date:          Date;
revenue:               number;
runtime:               number;
spoken_languages:      SpokenLanguage[];
status:                string;
tagline:               string;
title:                 string;
video:                 boolean;
vote_average:          number;
vote_count:            number;
}

export interface BelongsToCollection {
id:            number;
name:          string;
poster_path:   string;
backdrop_path: string;
}

export interface Genre {
id:   number;
name: string;
}

export interface ProductionCompany {
id:             number;
logo_path:      string;
name:           string;
origin_country: string;
}

export interface ProductionCountry {
iso_3166_1: string;
name:       string;
}

export interface SpokenLanguage {
english_name: string;
iso_639_1:    string;
name:         string;
}

export interface AllMovieType{
nowPlayingMovies: MovieType[] | null,
popularMovies: PopularMovieType[] | null,
trailerVideo: VideoType | null,            
}
  
 export interface UserType{
    uid: string,
    email: string,
    displayName: string,
    photoURL: string,            
}

export interface MovieListType {
    title: string;
    movies: MovieType[] | PopularMovieType[] | Result[] | null;
}

export interface MovieCardType {
    posterPath: string;
    movieId: number;
}

export interface VideoBackgroundType {
    movieId: number;
}

export interface VideoTitleType {
    title: string;
    overview: string;
}

export interface LanguageTranslations {
    [key: string] : string;
  };
    
  export interface LangType {
    en: LanguageTranslations;
    hindi: LanguageTranslations;
  }