import { FC, useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import Styles from "../CatalogCard/CatalogCard.module.scss";
import axios from "axios";

export const CardDm: FC = () => {
  
  const [dm, setDm] = useState([]);
  useEffect(() => {
    const getDm = async () => {
      const url = "https://digital-catalog-dm.microcms.io/api/v1/catalog-dm";
      const { data } = await axios.get(url, {
        headers: {
          "X-MICROCMS-API-KEY": "1oT5aGQM9I1EFKrQbyOJUyYz8u2iLc5G4p6e",
        },
      });
      const res = await data.contents;
      setDm(res);
    };
    getDm();
  }, []);
  return (
    <>
      {dm.length > 0 &&
        dm?.map((catalog: any) => (
          <Card
            key={catalog.id}
            style={{ width: "270px", margin: "0.5rem" }}
            className={`${Styles.root} relative`}
          >
            <div className="absolute top-2 left-2 z-10 py-1 px-3 border-2 font-bold bg-amber-400 rounded-md">広告</div>
            <Link
              href={catalog.link ? catalog.link : catalog.image.url}
              target="_blank"
              rel="noopener"
              className={`no-underline`}
            >
              <CardActionArea>
                <CardMedia title={catalog.title}>
                  <picture>
                    <source
                      srcSet={
                        catalog.image.url + "?fm=webp&fit=max&w=270&h=355"
                      }
                      type="image/webp"
                      style={{ height: "355px", width: "270px" }}
                      className={`object-cover`}
                    />
                    <img
                      src={catalog.image.url + "?fit=max&w=270&h=355"}
                      alt={catalog.title}
                      style={{ height: "355px", width: "270px" }}
                      loading="lazy"
                      className="object-cover"
                    />
                  </picture>
                </CardMedia>
                <CardContent>
                  <h3
                    className={`${Styles.title} text-sm tracking-tighter text-gray-900 overflow-hidden whitespace-pre`}
                  >
                    {catalog.title}
                  </h3>
                  <div className={`text-sm text-gray-700`}>{catalog.desc}</div>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
    </>
  );
};
