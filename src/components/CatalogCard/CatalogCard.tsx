/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
} from "@material-ui/core";
import Styles from "./CatalogCard.module.scss";

const CatalogCard: React.FC<any> = ({ catalogs }) => {
  return (
    <>
      {catalogs.map((catalog: any) => (
        <Card
          key={catalog.id}
          style={{ width: "270px", margin: "0.5rem" }}
          className={`${Styles.root}`}
        >
          <Link
            href={catalog.link}
            target="_blank"
            rel="noopener"
            className={`no-underline`}
          >
            <CardActionArea>
              <CardMedia title={catalog.title}>
                <picture>
                  <source
                    srcSet={catalog.image.url + "?fm=webp&fit=max&w=270&h=355"}
                    type="image/webp"
                    style={{ height: "355px", width: "270px" }}
                    className={`object-cover`}
                  />
                  <img
                    src={catalog.image.url + "?fit=max&w=270&h=355"}
                    alt={catalog.title}
                    style={{ height: "355px", width: "270px" }}
                    loading="lazy"
                    className={`object-cover`}
                  />
                </picture>
              </CardMedia>
              <CardContent>
                <h3
                  className={`${Styles.title} text-sm tracking-tighter text-gray-900 overflow-hidden whitespace-pre`}
                >
                  {catalog.title}
                  <span className={`ml-2 `}>{catalog.year}</span>
                </h3>
                <div className={`text-sm text-gray-700`}>{catalog.maker}</div>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default CatalogCard;
