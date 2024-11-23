import {useTranslations} from 'next-intl';

const BreakPoint1 = () => {
  const t = useTranslations('BreakPoint1')
  
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