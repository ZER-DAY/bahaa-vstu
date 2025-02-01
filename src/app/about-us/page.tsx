// app/cards/page.tsx
import Image from "next/image";

const people = [
  {
    name: "Годенко Алексей Ефимович",
    role: "Декан",
    office: "Комната: 415, учебный корпус №79",
    phones: ["(8442) 24-84-19"],
    email: "forstud@vstu.ru",
    address: "400005, г.Волгоград, ул.Советская, д.35",
    description:
      "Научные направления:Международное образование  , Моделирование и оптимизация сложных технических и социальных объектов .",
    image: "/1.jpg",
  },
  {
    name: "Гаджиев Рашид Бахман Оглы",
    role: "Заместител декана",
    office: "Общ. №1 к.402",
    phones: ["29-38-83 ", "Внутренний телефон: 36-04"],
    email: "forstud@vstu.ru",
    address: "400005, г.Волгоград, ул.Мира, д.25",
    description:
      " Концепции современного естествознания; Общая и неорганическая химия; Химия;",
    image: "/2.jpg",
  },

  {
    name: "Дубинина Елена Валерьевна",
    role: "секретарь",
    office: "Каб. 413а",
    phones: ["+7(8442) 23-44-20"],
    email: "dubinina@vstu.ru",
    address: "400005, г.Волгоград, ул. Советская, д.35",
    description: "",
    image: "/4.jpg",
  },
  {
    name: "Белявцева Марина Васильевна",
    role: "специалист по учебно-методической работе",
    office: "Каб. 409",
    phones: ["+7 (8442) 24-84-16"],
    internal_phone: "84-16",
    email: "marina-bel89@vstu.ru",
    address: "400005, г.Волгоград, ул.Советская, д.35",
    description:
      "Работа с иностранными студентами очной формы обучения, подготовка и подписание приказов, выписок из приказов, работа с заявлениями студентов, отслеживание оплаты студентов, подготовка отчетов.",
    image: "/bahaa.jpg",
  },
  {
    name: "Демешкина Елена Викторовна",
    role: "диспетчер по учебно-методической работе с иностранными гражданами",
    office: "Каб. 409",
    phones: ["+7 (8442) 24-84-16"],
    internal_phone: "84-16",
    email: "dipa2901@vstu.ru",
    address: "400005, г.Волгоград, ул.Советская, д.35",
    description:
      "Работа с иностранными студентами очно-заочной и заочной форм обучения, подготовка и подписание приказов, выписок из приказов, работа с заявлениями студентов, подготовка справок иностранным студентам, отслеживание оплаты студентов.",
    image: "/5.jpg",
  },

  {
    name: "Засыпкина Юлия Владимировна",
    role: "специалист по учебно-методической работе",
    office: "Каб. 417",
    phones: ["+7 (8442) 24-84-14"],
    internal_phone: "84-14",
    email: "fms@vstu.ru",
    address: "400005, г.Волгоград, ул.Советская, д.35",
    description: "Оформление приглашений.",
    image: "/6.jpg",
  },
  {
    name: "Эйвазова Татьяна Васильевна",
    role: "специалист по учебно-методической работе",
    office: "Каб. 417",
    phones: ["+7 (8442) 24-84-14"],
    internal_phone: "84-14",
    email: "forbase@vstu.ru",
    address: "400005, г.Волгоград, ул.Советская, д.35",
    description:
      "Подготовка и оформление дипломов, работа с посольствами, легализация документов.",
    image: "/7.jpg",
  },

  {
    name: "Тюменцева Елена Владимировна",
    role: "специалист по учебно-методической работе",
    office: "Общ. №1 к. 413",
    phones: ["24-84-18"],
    internal_phone: "84-14",
    email: ["study@vstu.ru"],
    address:
      "400005, г.Волгоград, ул.Советская, д.35 , Кафедра Русский язык, доцент",
    description:
      "Заместитель декана факультета подготовки иностранных специалистов по вопросам обучения на подготовительном отделении",
    image: "/8.jpg",
  },
];

export default function CardsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Карточки сотрудников
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {/* ✅ الصف الأول - يجعل البطاقتين جنبًا إلى جنب في الشاشات الكبيرة وتحت بعض في الصغيرة */}
        <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-center">
          {people.slice(0, 2).map((person, index) => (
            <div
              key={index}
              className="w-[350px] lg:w-[400px] border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={280}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-center mb-2">
                {person.name}
              </h2>
              <p className="text-sm text-gray-500 text-center mb-4">
                {person.role}
              </p>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Кабинет:</strong> {person.office}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Телефоны:</strong>
                <ul>
                  {person.phones.map((phone, idx) => (
                    <li key={idx}>{phone}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>E-mail:</strong>{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {person.email}
                </a>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Адрес:</strong> {person.address}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Основная работа:</strong>
                <p>{person.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* الصف الثاني: يحتوي على 3 بطاقات في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {people.slice(2, 10).map((person, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={250}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-center mb-2">
                {person.name}
              </h2>
              <p className="text-sm text-gray-500 text-center mb-4">
                {person.role}
              </p>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Кабинет:</strong> {person.office}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Телефоны:</strong>
                <ul>
                  {person.phones.map((phone, idx) => (
                    <li key={idx}>{phone}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>E-mail:</strong>{" "}
                <a
                  href={`mailto:${person.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {person.email}
                </a>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Адрес:</strong> {person.address}
              </div>
              <div className="text-sm text-gray-700">
                <strong>Основная работа:</strong>
                <p>{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
