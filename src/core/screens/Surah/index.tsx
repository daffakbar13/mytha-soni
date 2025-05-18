import Image from "next/image";

const SurahScreen: React.FC = () => {
  return (
    <div className="w-full bg-linen">
      <div className="flex flex-col items-center px-[20px] pb-[46px]">
        <Image
          src="/images/gallery/1.jpg"
          alt="gallery-1"
          width={320}
          height={0}
          className="w-full h-auto mt-[60px] rounded-[10px]"
        />
        <div className="text-[25px] font-cinzel uppercase font-medium mt-6">
          We Found Love
        </div>
        <div className="text-xs text-center font-gilda">
          “Dan diantara tanda-tanda kekuasaanNya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikanNya diantaramu rasa kasih dan sayang.
          <br />
          Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
          bagi kaum yang berpikir.”
          <br />
          <br />
          (Qs. Ar. Rum (30) : 21)
        </div>
      </div>
    </div>
  );
};

export default SurahScreen;
