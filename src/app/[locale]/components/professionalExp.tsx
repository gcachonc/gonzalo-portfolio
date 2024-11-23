import LabExperience from "../ui/labExperience";

const ProfessionalExp = () => {
  const Delasign = {
    text : "Delasign",
    mainImage: "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732030503/Delasign-ilustration_kng5og.png",
    logos: ["https://res.cloudinary.com/dzc4qte1c/image/upload/v1732030537/delasignBlack_odneko.webp"],
    links: [{url: "https://delasign.com/work/seemypath/",title : "See My Path"},{url: "https://delasign.com/work/priceafter/", title: "Price After" },{url:"https://delasign.com/collective/", title: "Delasign Collective"}]
  }

  const GoConcept = {
    text : "GoConcept",
    mainImage: "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035109/gonzalocachon_A_programmer_working_in_a_bright_bustling_open-_bb087f21-170d-4587-80f1-708fddaf1c6a_3_ctvyen.png",
    logos: ["https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035119/GoConcept_n6sq6w.svg", "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732035117/Sice_vwcois.svg"],
    links: [{url: "https://www.goconcept.com/en/",title : "Go Concept"},{url: "https://www.sice.com/", title: "Sice" }]
  }

  const ContentFactory = {
    text: "ContentFactory",
    mainImage: "https://res.cloudinary.com/dzc4qte1c/image/upload/v1732093949/gonzalocachon_a_programmer_in_a_newspapers_office_--ar_43_--s_e57c474d-55f1-4646-b2c7-ac6072767e9d_1_upg80h.png",
    logos: ["https://res.cloudinary.com/dzc4qte1c/image/upload/v1732091090/Vocento_kgqhod.svg"]
  }

  return (
    <section className='' id='professional-experience'>
        <LabExperience {...Delasign} />
        <LabExperience {...GoConcept} />
        <LabExperience {...ContentFactory} />
    </section>
  );
};

export default ProfessionalExp; 