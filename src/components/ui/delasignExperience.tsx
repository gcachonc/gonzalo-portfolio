import { useTranslations } from "next-intl";
import MyParagraph from "./text-components/myParagraph";
import MyTitle from "./text-components/myTitle";
import Image from "next/image";

const DelasignExperience = () => {
  const t = useTranslations("Delasign");

  const links = [
    { url: "https://delasign.com/work/seemypath/", title: "See My Path" },
    { url: "https://delasign.com/work/priceafter/", title: "Price After" },
    { url: "https://delasign.com/collective/", title: "Delasign Collective" },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center mt-24 box-border px-6 mb-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between relative w-full">
        <div className="flex flex-col w-full max-w-xl">
          <MyTitle text={t("title")} />
          <p className="text-sub font-play text-base lg:text-lg mb-7">
            {t("duration")}
          </p>
          <MyParagraph text={t("description.parrafo1")} />
          <MyParagraph text={t("description.parrafo2")} />
          <MyParagraph text={t("description.parrafo3")} />
        </div>
        <div className="flex flex-col h-fit relative lg:sticky lg:top-6 w-full lg:w-auto max-w-xl my-5">
          <figure className="max-h-[369px] max-w-[480px] lg:max-w-[372px] mb-4">
            <Image
              src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732030503/Delasign-ilustration_kng5og.png"
              alt="ilustration"
              width={480}
              height={369}
              className="w-full h-full rounded-2xl"
            />
          </figure>
          <div className="flex flex-row gap-2">
              <figure className="h-[48px] max-w-[150px]">
                <Image
                  src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732030537/delasignBlack_odneko.webp"
                  alt="logo empresa"
                  width={48}
                  height={48}
                  className="h-full"
                />
              </figure>
          </div>
        </div>
      </div>
      {links && (
        <div className="flex flex-col w-full max-w-xl lg:max-w-full">
          <h4 className="text-foreground font-play font-normal text-3xl lg:text-4xl mb-8">
            {t("links")}
          </h4>
          <div className="flex flex-row gap-3">
            {links.map((link, index) => (
              <a
                href={link.url}
                key={index}
                target="_blank"
                className="text-sub hover:text-white font-play text-sm lg:text-lg underline"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DelasignExperience;
