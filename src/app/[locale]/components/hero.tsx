"use client";

import React from 'react';
import {useTranslations} from 'next-intl';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';

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
        <figure className='relative'>
          <Image
            src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1731584766/foto-principal_ikkv5f.png"
            alt="foto-climbing"
            className="rounded-3xl absolute t-[20px] z-0 hidden max-h-[372px] lg:max-h-[553px] w-auto"
            id="foto4"
            width={250}
            height={372}
          />
          <Image
            src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732270204/foto-esqui_akqgf5.png"
            alt="foto-riding"
            className="rounded-3xl -rotate-6 absolute top-[10px] z-10 right-[20px] max-h-[372px] lg:max-h-[553px] w-auto"
            id="foto3"
            width={250}
            height={372}
          />
          <Image
            src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732270204/foto-escalada_we5cf3.png"
            alt="foto-esqui"
            className="rounded-3xl -rotate-3 absolute top-0 z-20 right-[10px] max-h-[372px] lg:max-h-[553px] w-auto"
            id="foto2"
            width={250}
            height={372}
          />
          <Image
            src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1732267773/foto-princi_jipiuu.png"
            alt="foto-princi"
            className="rounded-3xl -rotate-1 relative top-[-10px] z-30 right-0 max-h-[372px] lg:max-h-[553px] w-auto"
            id="foto1"
            width={250}
            height={372}
          />
        </figure>
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='max-w-lg text-center font-play text-5xl tracking-wider'>{t('title') }</h1>
            <h2 className='max-w-lg text-center font-play font-normal'>{t('subtitle')}</h2>
        </div>
      </section>
  );
};

export default Hero;
