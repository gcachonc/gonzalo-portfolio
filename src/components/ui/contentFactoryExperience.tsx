import { useTranslations } from "next-intl";
import MyParagraph from "./text-components/myParagraph";
import MyTitle from "./text-components/myTitle";

const ContentFactoryExperience = () => {
    const t = useTranslations('ContentFactory');

    const logos = ["https://res.cloudinary.com/dzc4qte1c/image/upload/v1732091090/Vocento_kgqhod.svg"]


    return (
        <section className='max-w-7xl mx-auto flex flex-col items-center  mt-24 box-border px-6 mb-24'>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between relative w-full">
                <div className="flex flex-col w-full max-w-xl">
                    <MyTitle text={t('title')} />
                    <p className="text-sub font-play text-base lg:text-lg mb-7">{t('duration')}</p>
                    <MyParagraph text={t('description.parrafo1')} />
                    <MyParagraph text={t('description.parrafo1')} />
                    <MyParagraph text={t('description.parrafo1')} />
                </div>
                <div className="flex flex-col h-fit relative lg:sticky lg:top-6 w-full lg:w-auto max-w-xl my-5">
                    <figure className="max-h-[369px] max-w-[480px] lg:max-w-[372px] mb-4">
                        <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732093949/gonzalocachon_a_programmer_in_a_newspapers_office_--ar_43_--s_e57c474d-55f1-4646-b2c7-ac6072767e9d_1_upg80h.png" alt="ilustration" className="w-full h-full rounded-2xl"/>
                    </figure>
                    <div className="flex flex-row gap-2">
                        {logos?.map((key, index) => {
                            return(
                                <figure key={index} className="h-[48px] max-w-[150px]">
                                    <img src={key} alt="logo empresa" className="h-full" />
                                </figure>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentFactoryExperience;