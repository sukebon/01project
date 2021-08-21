/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-ui/core";
import { useState } from "react";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import Styles from "./index.module.scss";

const Catalog: React.FC<any> = ({ apiData }) => {
  const [catalogs, setCatalogs] = useState(apiData);
  const [inputValue, setInputValue] = useState("");

  const onChangeText = (e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
    let newCatalog = apiData.filter((catalog: any) => {
      return catalog.title.includes(e.target.value);
    });
    setCatalogs(newCatalog);
  };

  return (
    <>
      <div className={`p-10 flex justify-center`}>
        <input type="text" value={inputValue} onChange={onChangeText} />
        <Button variant="contained">Default</Button>
      </div>
      <section
        className={`${Styles.container} flex flex-wrap justify-center  mx-auto`}
      >
        <CatalogCard catalogs={catalogs} />
      </section>
    </>
  );
};
export default Catalog;

export async function getStaticProps() {
  const url = "https://daimaru-hakui.microcms.io/api/v1";
  const apiKey: string = "3c62454d-9a98-4e3d-aee1-d337c3bbdf7e";
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
  let filterData = data.contents.filter((content: any) => {
    return content.transaction === true;
  });
  let mapData = filterData.map((data: any) => {
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
  const apiData = mapData;
  return {
    props: { apiData },
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
