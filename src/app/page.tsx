import Image from 'next/image';
import Profile from '@/components/profile';
import FeaturedPosts from '@/components/featuredPosts';
import CarouselPosts from '@/components/carouselPosts';

export default function HomePage() {
  return (
    <section>
      <Profile/>
      <FeaturedPosts />
      <CarouselPosts/>
    </section>
  )
}

