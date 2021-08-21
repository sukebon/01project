/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Styles from "./CatalogCard.module.scss";

const CatalogCard: React.FC<any> = ({ catalogs }) => {
  return (
    <>
      {catalogs.map((catalog: any) => (
        <div key={catalog.id} className={`m-5 bg-white shadow-md`}>
          <div className={`flex flex-col`}>
            <div className={`${Styles.image}`}>
              <Link href={catalog.link} passHref>
                <a target="_blank">
                  <img
                    src={catalog.image.url}
                    alt={catalog.title}
                    width="266"
                    height="500"
                    className={`object-cover object-center h-full `}
                  />
                </a>
              </Link>
            </div>
            <div className={`p-2 text-sm`}>
              <div>
                {catalog.title} <span className={`ml-2`}>{catalog.year}</span>
              </div>
              <div className={`mt-1`}>{catalog.maker}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatalogCard;
