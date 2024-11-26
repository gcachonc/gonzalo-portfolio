"use client";

import {useTranslations} from 'next-intl';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, gsap } from 'gsap/all';

const BreakPoint1 = () => {
  const t = useTranslations('BreakPoint1');
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = new SplitType('#palabra-b1', { types: 'chars' });
    const text2 = new SplitType('#palabra-b2', { types: 'chars' });

    if(text.chars && text2.chars){

      const evenChars = text.chars.filter((_, index) => index % 2 === 0); // Índices pares
      const oddChars = text.chars.filter((_, index) => index % 2 !== 0); // Índices impares
      const evenChars2 = text2.chars.filter((_, index) => index % 2 === 0); // Índices pares palabra 2
      const oddChars2 = text2.chars.filter((_, index) => index % 2 !== 0); // Índices impares palabra 2

      // Crear timeline
      const tl = gsap.timeline({scrollTrigger: {
        trigger: '#breakpoint-1',
        start: 'top center',
        end: 'bottom bottom',
        scrub: true
      }});
  
      // Animación para los caracteres pares
      tl.from(
        evenChars,
        {
          y: -15,
          opacity: 0,
          stagger: 0.1, // Espaciado entre las animaciones
          duration: 0.5, // Duración de cada animación
        },
        0 // Comienza inmediatamente
      );

      tl.from(
        evenChars2,
        {
          y: 15,
          opacity: 0,
          stagger: -0.1, // Espaciado entre las animaciones
          duration: 0.5, // Duración de cada animación
        },
        0 // Comienza inmediatamente
      );
  
      // Animación para los caracteres impares
      tl.from(
        oddChars,
        {
          y: -15,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
        },
        0.5 // Delay de 0.5 segundos respecto a la animación anterior
      );

      tl.from(
        oddChars2,
        {
          y: 15,
          opacity: 0,
          stagger: -0.1,
          duration: 0.5,
        },
        0.5 // Delay de 0.5 segundos respecto a la animación anterior
      );
    }
  }); 
  
  return (
    <section className='h-[150vh] w-screen relative' id='breakpoint-1'>
        <div className='h-screen sticky top-0 flex flex-col justify-center items-center'>
            <h3 id='palabra-b1' className='font-playfair text-4xl lg:text-9xl uppercase text-center font-semibold'>{t('word1')}</h3>
            <h3 id='palabra-b2' className='font-playfair text-4xl lg:text-9xl uppercase text-center font-semibold'>{t('word2')}</h3>
        </div>
    </section>
  );
};

export default BreakPoint1;