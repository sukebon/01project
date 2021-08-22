/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
} from "@material-ui/core";
import Styels from "./CatalogCard.module.scss";

const CatalogCard: React.FC<any> = ({ catalogs }) => {
  return (
    <>
      {catalogs.map((catalog: any) => (
        <Card
          key={catalog.id}
          style={{ width: "270px", margin: "0.5rem" }}
          className={`${Styels.root}`}
        >
          <CardActionArea>
            <Link
              href={catalog.link}
              target="_blank"
              className={`no-underline`}
            >
              <CardMedia
                image={catalog.image.url}
                title={catalog.title}
                style={{ height: "355px" }}
              />
              <CardContent>
                <h3 className={`text-gray-900`}>
                  {catalog.title}
                  <span className={`ml-2 `}>{catalog.year}</span>
                </h3>
                <div className={`text-sm text-gray-500`}>{catalog.maker}</div>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default CatalogCard;
