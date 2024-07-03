"use client";

import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 space-y-16 px-4">
      <h2 className="text-center text-6xl text-primary font-medium">
        Who we are
      </h2>
      <div className="grid md:grid-cols-2 gap-x-6 max-w-4xl mx-auto gap-y-12 px-8 md:px-0">
        <div className="space-y-12 order-2 sm:order-1">
          <h3 className="text-primary font-medium text-4xl text-pretty text-center">
            Our Mission
          </h3>
          <p className="text-lg font-gmarketSans">
            와이스펜 어학원은 학생들에게 따뜻하고 효과적인 학습 환경을 제공하는
            것이 목표입니다. 많은 영어 학원들이 속도에 치중하는 반면, 우리는
            학생들의 완전한 이해와 숙달을 우선시하며, 학생들이 성공하는 데
            필요한 필수 도구를 갖출 수 있도록 돕는 것이 사명이라 생각합니다.
            특히 비판적 읽기 능력, 문법 실력, 구조화된 창의적 에세이 작성 등에
            초점을 맞추고 있습니다.
          </p>
        </div>
        <div className="order-1 sm:order-2">
          <img
            src="/handsup.webp"
            alt="손을 들고 질문을 하는 학생"
            className="mx-auto"
            height={400}
            width={500}
          />
        </div>
        <div className="relative order-3 sm:order-4">
          <img
            src="/teachers.webp"
            alt="컴퓨터앞에서 지도하는 선생님"
            className="mx-auto"
            height={400}
            width={500}
          />
        </div>
        <div className="space-y-6 order-4 sm:order-3">
          <h3 className="text-primary font-medium text-4xl text-pretty text-center">
            Our Mindset
          </h3>
          <p className="text-lg md:pl-12 font-gmarketSans">
            경쟁적인 교육 환경에서 학생들이 겪는 어려움을 인식하고 있기에 각
            학생의 개별적인 수준에 맞춰 구조화된 학습 접근법을 채택하고
            있습니다. 우리 강사들은 속도보다는 깊이 있는 이해를 중시하여, 모든
            학생들이 참여할 수 있도록 합니다. 영어 교육 업계에서 20년 이상의
            경험을 보유하여 언어와 문학에 대한 깊이 있는 이해를 바탕으로 교육을
            제공합니다. 참여도 높은 교육 과정, 상호작용이 풍부한 수업, 지속적인
            지원을 통해 학생들이 필요한 읽기, 문법, 작문 능력을 깊이 있게 익힐
            수 있도록 합니다. 이를 통해 학생들이 점점 더 글로벌화되는 세상에서
            성공할 수 있도록 돕고자 합니다. 귀하의 자녀와 함께 그 잠재력을
            발견하고 발전시켜 나갈 수 있기를 기대합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
