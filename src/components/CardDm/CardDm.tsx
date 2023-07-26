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
import { Dm } from "@/types";

export const CardDm: FC = () => {
  const [dm, setDm] = useState<Dm[]>([]);
  useEffect(() => {
    const getDm = async () => {
      const url = "https://digital-catalog-dm.microcms.io/api/v1/catalog-dm";
      const { data } = await axios.get(url, {
        headers: {
          "X-MICROCMS-API-KEY": "1oT5aGQM9I1EFKrQbyOJUyYz8u2iLc5G4p6e",
        },
      });
      const dmlist = await data.contents;
      setDm(dmlist);
    };
    getDm();
  }, []);
  return (
    <>
      {dm.length > 0 &&
        dm?.map(({ id, title, desc, link, image }) => (
          <Card
            key={id}
            style={{ width: "270px", margin: "0.5rem" }}
            className={`${Styles.root} relative`}
          >
            <div className="absolute top-2 left-2 z-10 py-1 px-3 border-2 font-bold bg-amber-400 rounded-md">
              広告
            </div>
            <Link
              href={link ? link : image.url}
              target="_blank"
              rel="noopener"
              className={`no-underline`}
            >
              <CardActionArea>
                <CardMedia title={title}>
                  <picture>
                    <source
                      srcSet={image.url + "?fm=webp&fit=max&w=270&h=355"}
                      type="image/webp"
                      style={{ height: "355px", width: "270px" }}
                      className={`object-cover`}
                    />
                    <img
                      src={image.url + "?fit=max&w=270&h=355"}
                      alt={title}
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
                    {title}
                  </h3>
                  <div className={`text-sm text-gray-700`}>{desc}</div>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
    </>
  );
};
