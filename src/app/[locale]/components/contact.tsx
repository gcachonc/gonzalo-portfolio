import { useTranslations } from "next-intl";
import ContactForm from "./ui/contactForm";
import MyParagraph from "./ui/text-components/myParagraph";


const Contact = () => {
    const t = useTranslations('Contact');

    return(
        <section className="max-w-6xl box-border px-4 m-auto">
            <h2 className="max-w-2xl text-foreground font-play font-bold text-4xl text-center m-auto">{t('title')}</h2>
            <div className="max-w-xl mx-auto my-16">
                <MyParagraph text={t('description.paragraph1')} center />
            </div>
            <ContactForm />
        </section>
    )
}

export default Contact