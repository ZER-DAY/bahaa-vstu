import React from "react";

const YandexMap: React.FC = () => {
  return (
    <section className="yandex-map py-12" id="yandex-map-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-4xl tracking-wide text-gray-800 mb-8">
          Университетские места
        </h2>
        <div className="yandex-map__content relative bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=44.528339%2C48.714070&z=16&l=map&pt=44.527027,48.712935,pm2rdl~44.528339,48.714070,pm2rdl~44.529013,48.713137,pm2rdl~44.529785,48.713969,pm2rdl"
            title="Yandex Map"
            className="w-full h-[500px] rounded-md border-0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
