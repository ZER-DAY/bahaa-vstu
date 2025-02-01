"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

export default function About() {
  const facultyMembers = [
    {
      name: "Годенко Алексей Ефимович",
      position: "Декан факультета",
      image: "/1.jpg",
    },
    {
      name: "Гаджиев Рашид Бахман Оглы",
      position: "Заместитель декана",
      image: "/2.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            <span className="italic">О</span> университете:
          </h1>
        </div>

        {/* الشبكة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-10">
          {/* العمود الأول */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                <b className="italic text-blue-600">
                  Волгоградский государственный технический университет
                </b>{" "}
                (ВолгГТУ) — это ведущий технический университет в Южном
                федеральном округе России, предоставляющий качественное
                образование и инновационные научные исследования.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-medium text-gray-800">
                20 000+ студентов
              </h3>
              <p className="text-gray-600">
                Обучение в университете проходит более 20 тысяч студентов,
                включая иностранных обучающихся.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Университет активно сотрудничает с промышленными предприятиями и
                научными центрами, внедряя передовые технологии и разрабатывая
                инновационные проекты.
              </p>
            </div>
          </div>

          {/* العمود الأوسط */}
          <div>
            {/* النص العلوي */}
            <div className="bg-white p-6 rounded shadow mb-6">
              <h3 className="text-xl font-medium">Основан в 1930 году</h3>
              <p className="text-gray-600">
                Университет был основан в 1930 году и за это время выпустил
                тысячи высококвалифицированных специалистов в различных сферах.
              </p>
            </div>

            {/* السلايدر للصور */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
            >
              {facultyMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">
                    {/* الصورة الدائرية */}
                    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-lg mx-auto">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    {/* النصوص أسفل الصورة */}
                    <div className="w-80 bg-blue-600 bg-opacity-90 text-white text-center py-4 mt-4 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      <p className="text-sm">{member.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* النص السفلي */}
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-xl font-medium">Научные исследования</h3>
              <p className="text-gray-600">
                В университете работают ведущие ученые, которые занимаются
                исследованиями в области инженерных технологий, цифровых систем
                и промышленного производства.
              </p>
            </div>
          </div>

          {/* العمود الثالث */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                ВолгГТУ является инновационным центром, предлагающим широкий
                спектр образовательных программ, от инженерных специальностей до
                цифровых технологий и IT-разработки.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-medium text-right">
                100+ научных лабораторий
              </h3>
              <p className="text-gray-600 text-right">
                Университет располагает современными лабораториями для научных
                исследований и практической подготовки студентов.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                Благодаря сотрудничеству с международными партнерами,
                университет активно привлекает иностранных студентов и
                исследователей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
