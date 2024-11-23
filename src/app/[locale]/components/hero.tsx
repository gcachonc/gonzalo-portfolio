"use client";

import React from 'react';
import {useTranslations} from 'next-intl';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Hero = () => {
  const t = useTranslations('Hero')

  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    function animarCarrusel() {
      timeline
          .set("#foto4", {scale: 0.6 , autoAlpha: 0, zIndex: 30, right: "-10px", top: "-10px", delay: 4, position: "relative"})
          .to("#foto4",{ duration: 0.5, scale: 1, autoAlpha: 1, display: "block", right: "0", transform: "rotate(-1deg)"}, "<")
          .to("#foto3", { duration: 1, display: "none", zIndex: 0, right: "20px", top: "20px", transform: "rotate(-6deg)", autoAlpha: 0}, "<")
          .to("#foto1", { duration: 1, right: "10px", top: 0, transform: "rotate(-3deg)", zIndex: 20, position: "absolute" }, "<")
          .to("#foto2", { duration: 1, right: "20px", top: "10px", transform: "rotate(-6deg)", zIndex: 10 }, "<")
  
          .set("#foto3", {scale: 0.6 , autoAlpha: 0, zIndex: 30, right: "-10px", top: "-10px", delay: 4, position: "relative"})
          .to("#foto3", { duration: 0.5, scale: 1, autoAlpha: 1, display: "block", right: "0", transform: "rotate(-1deg)"}, "<")
          .to("#foto2", { duration: 1, display: "none", zIndex: 0, right: "20px", top: "20px", transform: "rotate(-6deg)", autoAlpha: 0}, "<")
          .to("#foto4", { duration: 1, right: "10px", top: 0, transform: "rotate(-3deg)", zIndex: 20, position: "absolute"}, "<")
          .to("#foto1", { duration: 1, right: "20px", top: "10px", transform: "rotate(-6deg)", zIndex: 10 }, "<")
  
          .set("#foto2", {scale: 0.6 , autoAlpha: 0, zIndex: 30, right: "-10px", top: "-10px", delay: 4, position: "relative"})
          .to("#foto2", { duration: 0.5, scale: 1, autoAlpha: 1, display: "block", right: "0", transform: "rotate(-1deg)"}, "<")
          .to("#foto1", { duration: 1, display: "none", zIndex: 0, right: "20px", top: "20px", transform: "rotate(-6deg)", autoAlpha: 0}, "<")
          .to("#foto3", { duration: 1, right: "10px", top: 0, transform: "rotate(-3deg)", zIndex: 20, position: "absolute"}, "<")
          .to("#foto4", { duration: 1, right: "20px", top: "10px", transform: "rotate(-6deg)", zIndex: 10 }, "<")
  
          .set("#foto1", {scale: 0.6 , autoAlpha: 0, zIndex: 30, right: "-10px", top: "-10px", delay: 4, position: "relative"})
          .to("#foto1", { duration: 0.5, scale: 1, autoAlpha: 1, display: "block", right: "0", transform: "rotate(-1deg)"}, "<")
          .to("#foto4", { duration: 1, display: "none", zIndex: 0, right: "20px", top: "20px", transform: "rotate(-6deg)", autoAlpha: 0}, "<")
          .to("#foto2", { duration: 1, right: "10px", top: 0, transform: "rotate(-3deg)", zIndex: 20, position: "absolute"}, "<")
          .to("#foto3", { duration: 1, right: "20px", top: "10px", transform: "rotate(-6deg)", zIndex: 10 }, "<")
    }

    animarCarrusel();



  })
  
  return (
      <section className="max-w-6xl mx-auto text-center flex items-center flex-col lg:flex-row min-h-96 max-h-screen w-full justify-center lg:justify-between gap-20 px-8 lg:py-16 mt-14 lg:mt-6 box-border">
        <figure className='max-h-[372px] lg:max-h-[553px] max-w-[250px] lg:max-w-[372px] relative'>
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732270204/foto-escalada_we5cf3.png" alt="foto-climbing" className='h-full w-full rounded-3xl absolute t-[20px] z-0 hidden' id='foto4'/>
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1731584766/foto-principal_ikkv5f.png" alt="foto-riding" className='h-full w-full rounded-3xl -rotate-6 absolute  top-[10px] z-10 right-[20px]' id='foto3' />
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732270204/foto-esqui_akqgf5.png" alt="foto-esqui" className='h-full w-full rounded-3xl -rotate-3 absolute top-0 z-20 right-[10px]' id='foto2'/>
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732267773/foto-princi_jipiuu.png" alt="foto-princi" className='h-full w-full rounded-3xl -rotate-1 relative top-[-10px] z-30 right-0' id='foto1'/>
        </figure>
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='max-w-lg text-center font-play text-5xl tracking-wider'>{t('title') }</h1>
            <h2 className='max-w-lg text-center font-play font-normal'>{t('subtitle')}</h2>
        </div>
      </section>
  );
};

export default Hero;
