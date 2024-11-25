import {useTranslations} from 'next-intl';
import MyTitle from './ui/text-components/myTitle';
import MyParagraph from './ui/text-components/myParagraph';

const Education = () => {
  const t = useTranslations('Education')
  
  return (
    <section className='max-w-7xl mx-auto flex flex-col items-center lg:items-start mt-24 box-border px-6'>
      <MyTitle text={t('title')}/>
      <div className='flex flex-col lg:flex-row-reverse w-full lg:justify-between max-w-xl lg:max-w-none mt-8'>
        <div className='relative flex flex-col w-full max-w-xl items-center'>
          <figure className="w-1/2 max-h-[135px] lg:max-h-[220px] max-w-[180px] lg:max-w-[319px] relative left-[80px] lg:left-[120px] " >
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1731940777/gonzalocachon_a_clear_image_that_depicts_engineering_day_in_s_80c182be-8d02-48e9-9999-d2398d06491c_0_jpdkt2.png" alt="ingenieria civil" className='h-full w-full rounded-3xl object-cover'/>
          </figure>
          <figure className="w-1/2 max-h-[135px] lg:max-h-[220px] max-w-[180px] lg:max-w-[319px] relative right-[80px] lg:right-[120px] -top-6">
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1731940809/gonzalocachon_an_illustration_of_a_proggramer_using_his_compu_253a20b1-198b-4351-9c79-81068cb5e9ef_1_hlpxx4.png" alt="ingenieria civil" className='h-full w-full rounded-3xl object-cover' />
          </figure>
          <figure className="w-1/2 max-h-[135px] lg:max-h-[220px] max-w-[180px] lg:max-w-[319px] relative left-[80px] lg:left-[120px] -top-12">
            <img src="https://res.cloudinary.com/dzc4qte1c/image/upload/v1731940848/gonzalocachon_an_illustration_of_a_proggramer_using_his_compu_dde46f59-1794-4299-959b-7489a5767898_1_sfnnce.png" alt="ingenieria civil" className='h-full w-full rounded-3xl object-cover'/>
          </figure>
        </div>
        <div className='max-w-xl box-border flex flex-col'>
          <MyParagraph text={t('paragraph1')} />
          <MyParagraph text={t('paragraph2')} />
          <MyParagraph text={t('paragraph3')} />
        </div>
      </div>
    </section>
  );
};

export default Education;