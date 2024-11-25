"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const NewsPaper = () => {
    const t = useTranslations('NewsPaper')
    gsap.registerPlugin(ScrollTrigger);

    const [somosEquipoURLIMG, setSomosEquipoURLIMG] = useState("https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201737/portada-somos-equipo-mobile_jg8gjy.png");

    useEffect(() => {
        const updateImageURL = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1024) {
                setSomosEquipoURLIMG("https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201735/portada-somos-equipo-desktop_y3ggjp.png");
            } else {
                setSomosEquipoURLIMG("https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201737/portada-somos-equipo-mobile_jg8gjy.png");
            }
        };

        updateImageURL(); // Set on mount
        window.addEventListener("resize", updateImageURL);

        return () => {
            window.removeEventListener("resize", updateImageURL);
        };
    }, []);

    useGSAP(() => {
        gsap.from('#Newspaper', {
            scrollTrigger: {trigger: '#Newspaper', start: 'top bottom', end: 'top 20%', scrub: true },
            opacity: 0,
            y: 50
        })
    })


    return (
        <section id="Newspaper" className="bg-newspaper bg-repeat bg-[length:100%_25%] bg-center max-w-6xl w-full mx-auto my-24 lg:my-40  ">
            <div className="w-full box-border px-6 lg:px-20 flex flex-col">
                <h2 className="font-lora uppercase font-medium text-black text-center text-4xl lg:text-7xl mt-12">{t('header')}</h2>
                <div className="w-full h-[1px] bg-black mt-6"></div>
                <div className="my-5 ">
                    <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732107443/portada_rcsp42.png" alt="redaccion de un periodico" />
                    <h3 className="font-lora font-medium text-black text-center text-2xl lg:text-4xl mt-4 mx-auto max-w-2xl">{t('headline')}</h3>
                </div>
                <div className="flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-gray-800 mt-8 lg:mb-8">
                    <div className=" box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/05/07/nissan-como-disenar-una-tecnologia-para-que-nadie-se-resista-a-usarla/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732115023/portada-nissan_o8uulm.png" alt="" className="w-1/2 lg:w-full object-cover" />
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article1')}</h4>
                        </a>
                    </div>
                    <div className="box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/09/27/alhambra-sin-prisa-por-que-el-77-de-los-espanoles-prefiere-pasar-en-compania-un-momento-de-desconexion/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732115063/portada-alhambra_osdovj.png" alt="" className="w-1/2 lg:w-full object-cover"/>
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article2')}</h4>
                        </a>
                    </div>
                    <div className="box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/07/23/telefonica-smart-steps-la-tecnologia-que-optimiza-el-trafico-en-grandes-eventos/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732115021/portada-telefonica_ldmhei.png" alt="" className="w-1/2 lg:w-full object-cover" />
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article3')}</h4>
                        </a>
                    </div> 
                </div>
                <div className="flex flex-col lg:flex-row divide-y">
                    <div className="box-border py-3 lg:py-0 lg:px-3 lg:w-1/3">
                        <a href="https://www.abc.es/contentfactory/post/2024/09/27/alhambra-sin-prisa-por-que-el-77-de-los-espanoles-prefiere-pasar-en-compania-un-momento-de-desconexion/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center py-5 border-t border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732187063/portada-ikea_agqbwq.png" alt="" className="w-1/2 lg:w-full object-cover"/>
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article4')}</h4>
                        </a>
                    </div>
                    <div className="box-border p-5 lg:w-2/3 lg:mr-3 bg-gray-300">
                        <a href="https://www.abc.es/contentfactory/post/2024/09/27/alhambra-sin-prisa-por-que-el-77-de-los-espanoles-prefiere-pasar-en-compania-un-momento-de-desconexion/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-3 justify-center ">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732187065/portada-bigcrafters_iruwfm.png" alt="" className="w-1/2 object-cover"/>
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl mx-auto flex justify-center items-center px-3">{t('article5')}</h4>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col px-3 mb-6">
                    <div className="w-full h-[1px] bg-black mt-6 mb-2"></div>
                    <div className="flex flex-row justify-between items-center">
                        <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732191109/somos-equipo_rs1pkp.svg" alt="logo somos equipo" className="max-h-[22px] lg:max-h-[32px]" />
                        <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732191114/un-proyecto-laliga_h7mjtf.svg" alt="un proyecto con Laliga" className="max-h-[18px] lg:max-h-[27px]" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:h-[382px]">
                    <div className="lg:w-1/3">
                        <a href="https://www.relevo.com/laliga/somos-equipo/" target="_blank" rel="noopener noreferrer" className="h-full ">
                            <img src={somosEquipoURLIMG} alt="portada capitulos somos-equipo" className="w-full h-full px-3 pb-3" />
                        </a>
                    </div>
                    <div className="lg:w-2/3 flex flex-col">
                        <div className="h-auto flex flex-row">
                            <div>
                                <a href="https://www.relevo.com/laliga/villarreal-haz-que-importe-a-todos/" target="_blank" rel="noopener noreferrer" className="">
                                    <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201737/portada-villarreal_y5jccm.png" alt="" className="object-cover px-3 pb-3"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.relevo.com/laliga/real-celta-de-vigo-haz-que-importe-a-todos" target="_blank" rel="noopener noreferrer" className="">
                                    <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201735/portada-celta_of5b9o.png" alt="" className="object-cover px-3 pb-3"/>
                                </a>
                            </div>
                        </div>
                        <div className="h-auto flex flex-row">
                            <div>
                                <a href="https://www.relevo.com/laliga/sevilla-fc-cree-en-el-talento-deja-huella/" target="_blank" rel="noopener noreferrer" className="">
                                    <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201737/portada-sevilla_fms3wp.png" alt="" className="object-cover p-3"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.relevo.com/laliga/atletico-de-madrid-apuntar-alto-a-base-de-coraje-y-corazon/" target="_blank" rel="noopener noreferrer" className="">
                                    <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732201735/portada-atletico_toxrcf.png" alt="" className="object-cover p-3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-gray-800 lg:mt-8 lg:mb-8">
                    <div className=" box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/04/16/xiaomi-tecnologia-arte-y-artesania-una-camara-para-llegar-al-corazon/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732260463/portada-xiaomi_z19w89.png" alt="" className="w-1/2 lg:w-full object-cover" />
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article6')}</h4>
                        </a>
                    </div>
                    <div className="box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/10/02/sabadell-te-acerco-embutidos-fermin-todo-lo-hacen-aqui/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732260465/portada-sabadell_fceoin.png" alt="" className="w-1/2 lg:w-full object-cover"/>
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article7')}</h4>
                        </a>
                    </div>
                    <div className="box-border py-3 lg:py-0 lg:px-3">
                        <a href="https://www.abc.es/contentfactory/post/2024/10/22/buena-huella-las-camisetas-del-futuro-se-haran-con-paja/" target="_blank" rel="noopener noreferrer" className="flex flex-row lg:flex-col gap-3 lg:gap-0 items-center lg:py-5 lg:border-t lg:border-gray-800">
                            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732260531/portada-naturgy_kqaqp6.png" alt="" className="w-1/2 lg:w-full object-cover" />
                            <h4 className="font-lora font-medium text-black text-lg lg:text-2xl lg:mt-4 mx-auto">{t('article8')}</h4>
                        </a>
                    </div> 
                </div>

            </div>
        </section>
    );
}



export default NewsPaper