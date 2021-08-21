/* eslint-disable @next/next/no-img-element */
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import Styles from "./index.module.scss";

const Catalog: React.FC<any> = ({ catalogs }) => {
  return (
    <div
      className={`${Styles.container} flex flex-wrap justify-center  mx-auto`}
    >
      <CatalogCard catalogs={catalogs} />
    </div>
  );
};
export default Catalog;

export async function getStaticProps() {
  const url = "https://daimaru-hakui.microcms.io/api/v1";
  const apiKey: any = process.env.API_KEY;
  const res = await fetch(`${url}/catalog?limit=250`, {
    headers: {
      "X-API-KEY": apiKey,
    },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  // let filterData = data.contents.filter((content: any) => {
  //   return content.transaction === true;
  // });
  let mapData = data.contents.map((data: any) => {
    return {
      id: data.id,
      maker: data.maker,
      title: data.title,
      year: data.year || null,
      category: data.category,
      season: data.season,
      link: data.link,
      image: data.image,
    };
  });
  const catalogs = mapData;
  return {
    props: { catalogs },
  };
}

// type Props = {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   revisedAt: string;
//   maker: string;
//   title: string;
//   year: string;
//   category: Array<string>;
//   season: Array<string>;
//   link: string;
//   image: {
//     url: string;
//     height: number;
//     width: number;
//   };
//   transaction: boolean;
// };
