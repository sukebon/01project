export type Catalog = {
    id: string;
    link: string;
    title: string;
    year: string;
    image: {
      url: string;
    };
    maker: string;
    season: string[];
    category:string[];
  };

 export  type TopicData = {
    id: string;
    title: string;
    link: string;
    maker: string;
  };

  export type Dm = {
    id: string;
    title: string;
    desc: string;
    link: string;
    image: {
      url: string;
    };
  };