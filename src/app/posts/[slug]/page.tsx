import MarkDownViewer from '@/components/MarkDownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';


type Props = {
  params: {
    slug: string;
  }
}

export default async function PostPage({ params: { slug } }: Props) {
  const {path, content, title, description, date} = await getPostData(slug);

  return (
    <article className='rounded-2xl overflow-hidden m-4'>
      <Image
        className='w-full h-1/6 max-h-[500px]'
        src={`/images/${path}.jpg`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='p-4'>
        <p className='flex items-center justify-end font-semibold ml-2'>{date.toString()}</p>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <MarkDownViewer content={content}></MarkDownViewer>
      </section>
    </article>
  )
}

