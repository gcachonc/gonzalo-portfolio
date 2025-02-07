import { useTranslations } from "next-intl";
import MyParagraph from "./text-components/myParagraph";
import MyTitle from "./text-components/myTitle";
import Image from "next/image";

const GoConceptExperience = () => {
  const t = useTranslations("GoConcept");

  const logos = [
    "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035119/GoConcept_n6sq6w.svg",
    "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035117/Sice_vwcois.svg",
  ];
  const links = [
    { url: "https://www.goconcept.com/en/", title: "Go Concept" },
    { url: "https://www.sice.com/", title: "Sice" },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center mt-24 box-border px-6 mb-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between relative w-full">
        <div className="flex flex-col w-full max-w-xl">
          <MyTitle text={t("title")} />
          <p className="text-sub font-play text-base lg:text-lg mb-7">{t("duration")}</p>
          <MyParagraph text={t("description.parrafo1")} />
          <MyParagraph text={t("description.parrafo2")} />
        </div>
        <div className="flex flex-col h-fit relative lg:sticky lg:top-6 w-full lg:w-auto max-w-xl my-5">
          <figure className="max-h-[369px] max-w-[480px] lg:max-w-[372px] mb-4">
            <Image
              src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035109/gonzalocachon_A_programmer_working_in_a_bright_bustling_open-_bb087f21-170d-4587-80f1-708fddaf1c6a_3_ctvyen.png"
              alt="ilustration"
              width={480}
              height={369}
              className="w-full h-auto rounded-2xl"
            />
          </figure>
          <div className="flex flex-row gap-2">
            {logos?.map((key, index) => (
              <figure key={index} className="h-[48px] max-w-[150px]">
                <Image
                  src={key}
                  alt="logo empresa"
                  width={150}
                  height={48}
                  className="h-full w-auto"
                />
              </figure>
            ))}
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
                rel="noopener noreferrer"
                className="text-sub hover:text-white font-play text-sm lg:text-lg underline"
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

export default GoConceptExperience;
