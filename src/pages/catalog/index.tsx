/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import Styles from "./index.module.scss";

const Catalog: React.FC<any> = ({ apiData, listCategory }) => {
  const [catalogs, setCatalogs] = useState(apiData);
  const [seasonList, setSeasonList] = useState([]);
  const [makerList, setMakerList] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [seasonValue, setSeasonValue] = useState("");
  const [makerValue, setMakerValue] = useState("");

  //seasonの重複を削除
  useEffect(() => {
    const seasonData = catalogs.map((value: any) => {
      return value.season[0];
    });
    const newData = seasonData.filter((value: any, index: any, self: any) => {
      if (self.indexOf(value) == index) return value;
    });
    setSeasonList(newData);
  }, [catalogs]);

  //makerの重複を削除
  useEffect(() => {
    const makerData = catalogs.map((value: any) => {
      return value.maker;
    });
    const newData = makerData.filter((value: any, index: any, self: any) => {
      if (self.indexOf(value) == index) return value;
    });
    setMakerList(newData);
  }, [catalogs]);

  const onChangeCategory = (e: any) => {
    e.preventDefault();
    setCategoryValue(e.target.value);

    let prevCatalogs = apiData.filter((catalog: any) => {
      if (catalog.season.includes(seasonValue) || seasonValue == "") {
        return catalog;
      }
    });

    prevCatalogs = prevCatalogs.filter((catalog: any) => {
      if (catalog.maker.includes(makerValue) || makerValue == "") {
        return catalog;
      }
    });

    let newCatalogs = prevCatalogs.filter((catalog: any) => {
      if (e.target.value === "") return catalog;
      return catalog.category.includes(e.target.value);
    });
    setCatalogs(newCatalogs);
  };

  const onChangeSeason = (e: any) => {
    e.preventDefault();
    setSeasonValue(e.target.value);

    let prevCatalogs = apiData.filter((catalog: any) => {
      if (catalog.category.includes(categoryValue) || categoryValue == "")
        return catalog;
    });

    prevCatalogs = prevCatalogs.filter((catalog: any) => {
      if (catalog.maker.includes(makerValue) || makerValue == "")
        return catalog;
    });

    let newCatalogs = prevCatalogs.filter((catalog: any) => {
      if (catalog.season.includes(e.target.value) || e.target.value === "") {
        return catalog;
      }
    });
    setCatalogs(newCatalogs);
  };

  const onChangeMaker = (e: any) => {
    e.preventDefault();
    setMakerValue(e.target.value);

    let prevCatalogs = apiData.filter((catalog: any) => {
      if (catalog.category.includes(categoryValue) || categoryValue == "")
        return catalog;
    });

    prevCatalogs = prevCatalogs.filter((catalog: any) => {
      if (catalog.season.includes(seasonValue) || seasonValue == "")
        return catalog;
    });

    let newCatalogs = prevCatalogs.filter((catalog: any) => {
      if (catalog.maker.includes(e.target.value) || e.target.value == "")
        return catalog;
    });
    setCatalogs(newCatalogs);
  };

  const onClickReset = () => {
    setCatalogs(apiData);
    setCategoryValue("");
    setSeasonValue("");
    setMakerValue("");
  };

  return (
    <>
      <div
        className={`p-10 flex flex-col items-strach lg:mt-6 lg:flex-row lg:justify-center`}
      >
        <div className={`${Styles.formArea}`}>
          <FormControl variant="outlined" className={`w-full lg:w-56`}>
            <InputLabel id="demo-simple-select-outlined-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={categoryValue}
              onChange={onChangeCategory}
              label="category"
            >
              <MenuItem value="">
                <em>-- 全て選択 --</em>
              </MenuItem>
              {listCategory.map((v: any) => (
                <MenuItem key={v.id} value={v.key}>
                  {v.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={`${Styles.formArea}`}>
          <FormControl variant="outlined" className={`w-full lg:w-56`}>
            <InputLabel id="demo-simple-select-outlined-label">
              Season
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={seasonValue}
              onChange={onChangeSeason}
              label="season"
            >
              <MenuItem value="">
                <em>-- 全て選択 --</em>
              </MenuItem>
              {seasonList.map((value: any, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={`${Styles.formArea}`}>
          <FormControl variant="outlined" className={`w-full lg:w-56`}>
            <InputLabel id="demo-simple-select-outlined-label">
              maker
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={makerValue}
              onChange={onChangeMaker}
              label="maker"
            >
              <MenuItem value="">
                <em>-- 全て選択 --</em>
              </MenuItem>
              {makerList.map((value: any, index) => (
                <MenuItem key={index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={onClickReset}
        >
          Delete
        </Button>
      </div>

      <section
        className={`${Styles.container} flex flex-wrap justify-center mx-auto`}
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
  const params = {
    headers: {
      "X-API-KEY": apiKey,
    },
  };
  const [res1, res2] = await Promise.all([
    await fetch(`${url}/catalog?limit=250`, params),
    await fetch(`${url}/catalog-category?limit=50`, params),
  ]);

  const data1 = await res1.json();
  const data2 = await res2.json();
  if (!data1) return { notFound: true };
  if (!data2) return { notFound: true };

  let filterData = data1.contents.filter((content: any) => {
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

  let listCategory = data2.contents;

  return {
    props: { apiData, listCategory },
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
