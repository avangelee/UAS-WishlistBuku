'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StarRating from './StarRating';
import Link from 'next/link';

export default function ImageSwiper() {
  return (
    <div className="my-6">
      <Swiper
        spaceBetween={8}
        slidesPerView={6}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-xl"
      >
       <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/HP3">
                <img
                    src="/HP3.jpeg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/HP1">
                <img
                    src="/HP1.webp"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/HP8">
                <img
                    src="/HP8.webp"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/Lorax">
                <img
                    src="/Lorax.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
         <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/TentangKamu">
                <img
                    src="/TentangKamu.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/MidnightLibrary">
                <img
                    src="/MidnightLibrary.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/Hello">
                <img
                    src="/Hello.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
         <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/TheCat">
                <img
                    src="/TheCat.jpeg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/H4">
                <img
                    src="/H4.webp"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/IkanDilangit">
                <img
                    src="/IkanDilangit.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
         <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/KapanNanti">
                <img
                    src="/KapanNanti.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/PulauBatu">
                <img
                    src="/PulauBatu.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/TanahLada">
                <img
                    src="/TanahLada.avif"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/KitaPergiHariIni">
                <img
                    src="/KitaPergiHariIni.jpg"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col items-center">
            <Link href="/detail/Jakarta">
                <img
                    src="/Jakarta.webp"
                    alt="Banner 1"
                    className="w-40 h-64 object-cover rounded-xl cursor-pointer"
                />
            </Link>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}