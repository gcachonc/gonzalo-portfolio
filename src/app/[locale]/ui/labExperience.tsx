import { useTranslations } from "next-intl";
import MyParagraph from "./text-components/myParagraph";
import MyTitle from "./text-components/myTitle";

interface LabExperienceProps {
    text: string;
    mainImage: string;
    logos: string[];
    links?: { title: string; url: string }[];
  }


const LabExperience = ({ text, mainImage, logos, links } : LabExperienceProps) => {
    const t = useTranslations(text);

    const descriptionKeys = Object.keys(t.raw('description')) as string[];
    return (
        <section className='max-w-7xl mx-auto flex flex-col items-center  mt-24 box-border px-6 mb-24'>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between relative w-full">
                <div className="flex flex-col w-full max-w-xl">
                    <MyTitle text={t('title')} />
                    <p className="text-sub font-play text-base lg:text-lg mb-7">{t('duration')}</p>
                    {descriptionKeys.map((key, index) => (
                        <MyParagraph key={index} text={t(`description.${key}`)} />
                    ))}
                </div>
                <div className="flex flex-col h-fit relative lg:sticky lg:top-6 w-full lg:w-auto max-w-xl my-5">
                    <figure className="max-h-[369px] max-w-[480px] lg:max-w-[372px] mb-4">
                        <img src={mainImage} alt="ilustration" className="w-full h-full rounded-2xl"/>
                    </figure>
                    <div className="flex flex-row gap-2">
                        {logos.map((key, index) => {
                            return(
                                <figure key={index} className="h-[48px] max-w-[150px]">
                                    <img src={key} alt="logo empresa" className="h-full" />
                                </figure>
                            )
                        })}
                    </div>
                </div>
            </div>
            {links && (
                <div className="flex flex-col w-full max-w-xl lg:max-w-full">
                    <h4 className="text-white font-play font-normal text-3xl lg:text-4xl mb-8">{t('links')}</h4>
                    <div className="flex flex-row gap-3">
                        {links.map((link, index) => (
                            <a href={link.url} key={index} target="blank" className="text-sub hover:text-white font-play text-sm lg:text-lg underline">{link.title}</a>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default LabExperience;