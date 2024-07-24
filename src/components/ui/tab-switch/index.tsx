import "./style.scss";
import { useState } from "react";

function index() {
  const [active, setActive] = useState("1");
  return (
    <>
      <div className="btns">
        <button
          onClick={() => setActive("1")}
          className={`${active == "1" && "active"}`}
        >
          TEZKOR REZYUMENI KO'RIB CHIQISH
        </button>
        <button
          onClick={() => setActive("2")}
          className={`${active == "2" && "active"}`}
        >
          REZYUME NAMUNALARI
        </button>
        <button
          onClick={() => setActive("3")}
          className={`${active == "3" && "active"}`}
        >
          MAQSADNI DAVOM ETTIRISH
        </button>
        <button
          onClick={() => setActive("4")}
          className={`${active == "4" && "active"}`}
        >
          LINKEDIN OPTIMALLASHTIRISH
        </button>
      </div>
      <div className="content-tabs">
        {active == "1" ? (
          <div className="steps">
            <div>
              <video
                autoPlay
                controls
                muted
                src="https://www.resumeworded.com/assets/images/vid1resworded.mp4?v=1"
              ></video>
            </div>
            <div className="steps-text">
              <h3>
                O'zingizning rezyumeingiz bo'yicha mutaxassisning fikrini darhol
                oling
              </h3>
              <p>
                Mening rezyumeimni baholang, rezyumeni ishga qabul qiluvchilar
                va ishga qabul qilish menejerlari qidiradigan asosiy mezonlar
                bo'yicha baholaydi. Rezyumeingizni yuklang va atigi 30 soniya
                ichida siz rezyumeingizni yangilash va ko'proq intervyu olish
                uchun harakatga keladigan qadamlarga ega bo'lasiz.
              </p>
              <a href="#">
                <button>Rezyumeni yuklash</button>
              </a>
            </div>
          </div>
        ) : active == "2" ? (
          <div className="steps">
            <div>
              <video
                autoPlay
                controls
                muted
                src="https://www.resumeworded.com/assets/images/samplelinesvid.mp4"
              ></video>
            </div>
            <div className="steps-text">
              <h3>Yuqori rezyumelardan misollar</h3>
              <p>
                Muvaffaqiyatli ishga da'vogarlar allaqachon yuqori darajadagi
                kompaniyalarda intervyu olgan mukammal rezyumeni yaratish uchun
                bir necha soat sarflashgan. O'zingizning tajribangizga o'xshash
                qatorni toping, uni o'zgartiring va rezyumeingizda foydalaning.
              </p>
              <a href="#">
                <button>Rezyumeni yuklash</button>
              </a>
            </div>
          </div>
        ) : active == "3" ? (
          <div className="steps">
            <div>
             <img src="https://www.resumeworded.com/assets/images/targeted-resume.png" alt="" />
            </div>
            <div className="steps-text">
              <h3>O'z rezyumeingizni darhol ishga yo'naltiring</h3>
              <p>
                Bizning bepul sun'iy intellekt platformamiz ish tavsifini tahlil
                qiladi va sizning rezyumeingizda etishmayotgan muhim kalit
                so'zlar va ko'nikmalarni aniqlaydi. O'z rezyumeingizni ma'lum
                bir ishga moslashtirish va ko'proq intervyu olishni o'rganing.
              </p>
              <a href="#">
                <button>Rezyumeni yuklash</button>
              </a>
            </div>
          </div>
        ) : (
          <div className="steps">
            <div>
              <img src="https://www.resumeworded.com/linkedin-review/img/linkedin-showcase.png" alt="" />
            </div>
            <div className="steps-text">
              <h3>LinkedIn-da kerakli odamlarni toping</h3>
              <p>
                LinkedIn profilingizni qanday qilib bepul optimallashtirish
                bo'yicha moslashtirilgan fikr-mulohazalarni darhol oling. 5
                barobar ko'proq ish o'rinlari, etakchilar va imkoniyatlar
                yarating.
              </p>
              <a href="#">
                <button>Rezyumeni yuklash</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default index;
