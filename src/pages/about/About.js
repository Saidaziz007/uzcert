import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-title">
            <h1>Biz haqimizda</h1>
          </div>
        </div>
      </div>
      <div className="about-info">
        <div className="container">
          <div className="about-works">
            <h1>ASOSIY VAZIFALAR</h1>
            <ul>
              <li>
                Internet tarmogining milliy segmentida axborot xavfsizligini
                ta'minlash;
              </li>
              <li>
                Internet tarmogining milliy segmentida axborot xavfsizligiga
                tahdidlarning oldini olish va bartaraf etish uchun sharoit
                yaratish bo'yicha kompleks chora-tadbirlarni ishlab chiqish va
                amalga oshirishda ko'maklashish;
              </li>
              <li>
                Internet tarmogining milliy segmentida axborot resurslarining
                axborot xavfsizligini ta'minlash sohasidagi me'yoriy-huquaiy
                bazani takomillashtirish bo'yicha takliflarni ishlab chiqishda
                ko'maklashish;
              </li>
              <li>
                Ma'lumotlar uzatish tarmoqlari operatorlari va provayderlari
                bilan o'zaro hamkorlik qilish, Internet tarmog'ining milliy
                segmentida axborot texnologiyalaridan foydalanish sohasidagi
                tahdidlar, noxush hodisalar va huquqbuzarliklarga qarshi
                kurashish bo'yicha hamkorlik ishlarini tashkil etish;
              </li>
              <li>
                Maxsus tadqiqotlar o'tkazish, axborot xavfsizligini ta'minlash
                sohasida ixtisoslashtirilgan axborot-kommunikatsiya
                vositalaridan foydalanish bo'yicha takliflar tayyorlash;
              </li>
              <li>
                Internet tarmog'ining milliy segmentida axborot xavfsizligini
                ta'minlash boyicha amaliy hamkorlikni tashkil etish maqsadida
                axborot xavfsizligi sohasida xalqaro hamkorlikni rivojlantirish.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
