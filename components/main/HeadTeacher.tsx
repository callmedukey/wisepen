const HeadTeacher = () => {
  return (
    <section className="sm:py-16 bg-primary font-gmarketSans py-4 px-4 md:px-0">
      <div className="grid sm:grid-cols-2 sm:divide-x divide-y sm:divide-y-0 bg-primary text-white max-w-6xl mx-auto md:h-[500px] px-4 sm:px-0 h-[200%]">
        <article className="flex flex-col gap-6 py-4 sm:py-0 px-4 lg:px-0">
          <h4 className="text-2xl text-center h-[50px]">
            <span className="text-4xl">원장 </span>
            인사말
          </h4>
          <div className="flex flex-col gap-6 max-w-sm break-keep mx-auto text-lg font-gmarketSans">
            <p className="mx-auto">
              안녕하세요! 인사 드리게 되어 매우 기쁩니다. 와이스펜 어학원의 원장
              Arnold Chi입니다. 저는 모든 학생들에게 탁월한 영어교육을 제공하고
              질 높은 학습 환경을 조성하는 데 전념하고 있습니다.
            </p>
            <p>
              학생들에게 수준 높은 학습 환경을 조성하는 데 전념하고 있습니다.
              우리의 목표는 모든 학생이 각자의 필요에 맞춘 최고 수준의 지도를
              받게 하는 것입니다. 우리는 교육의 힘이 삶을 변화시킬 수 있다고
              믿으며, 학생들이 자신의 언어 학습 목표를 달성할 수 있도록
              돕겠습니다.
            </p>
            <p>
              부디 저희 와이스펜의 열정과 경험, 헌신이 학생들의 학습에 가져올
              차이를 경험해 보시길 바랍니다. 학생들과 함께 공부하게 될 날을
              기대하고 있겠습니다.
            </p>
          </div>
        </article>
        <article className="flex flex-col gap-6 md:pl-[75px] py-4 sm:py-0 px-4">
          <div className="h-[50px] hidden sm:block" />
          <h5 className="text-3xl">Arnold Chi 원장</h5>
          <div className="space-y-4">
            <strong className="text-xl font-bold">학력</strong>
            <ul className="list-inside list-disc px-4 text-xl">
              <li>미국 오하이오 주립대학교에서 국제학 학사 졸업</li>
            </ul>
            <strong className="text-xl font-bold block">경력 총 17년</strong>
            <ul className="list-inside list-disc px-4 text-xl">
              <li>이안어학원 대치 지점 (Head Teacher)</li>
              <li>청담어학원</li>
              <li>파고다어학원 강남 지점</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeadTeacher;
