import { notFound } from 'next/navigation';
import { galleryData } from '../../../../data/db';
import Image from 'next/image';

export const dynamicParams =true;

export async function generateStaticParams(){
  // const response = await fetch("external API endpoints");

  // const data = await response.json();
  // return data.map(item => ({id: item.id}));

  // commetnt or remove this return in case API endpoint are provided in the fetch
  return galleryData.map(item => ({gallery: item.id.toString()}));
}

async function getDetailsData(id){
  // const response = await fetch("URL from external source/${id}", {
  //   next: {
  //     revalidate: 60
  //   }
  // });

  // if(!response.ok){
  //   notFound()
  // }

  // const data = await response.json();

  // return data;

  // commetnt or remove this return in case API endpoint are provided in the fetch
  const item = galleryData.find(item => item.id === Number(id));
  return item;
}

export default async function DetailsPage({params}) {

  const data = await getDetailsData(params.gallery);

  if(!data){
    notFound()
  }

  return (
    <div>
      <h1 className='heading'>
        DETAILS ABOUT THE CAR
      </h1>
      <div className='py-8 px-8 flex flex-wrap gap-8 max-[768px]:flex-col'>
        <div className='flex-1'>
          <Image className='w-full' src={data.src} alt="" width={500} height={300}/>
        </div>
        <div className='flex-1 flex flex-col items-center justify-center'>
          <h3 className='py-5 text-red-900 md:text-[1.4rem] font-bold'>
            {data.title}
          </h3>
          <p className='text-center md:text-[1.05rem]'>
            {data.details}
          </p>
        </div>
      </div>
    </div>
  )
}
