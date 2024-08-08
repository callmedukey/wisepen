const HeadTeacher = () => {
  return (
    <section className="sm:py-16 bg-primary font-gmarketSans py-4 px-4 md:px-0">
      <div className="grid bg-primary text-white max-w-6xl mx-auto px-4 sm:px-0">
        <article className="flex flex-col gap-6 space-y-12 py-4 sm:py-0 px-4 lg:px-0">
          <h4 className="text-4xl text-center h-[50px]">
            <span className="text-6xl">원장 </span>
            인사말
          </h4>
          <div className="flex flex-col gap-20 break-keep mx-auto text-lg max-w-[830px] font-gmarketSans">
            <p className="">
              안녕하세요! 인사 드리게 되어 매우 기쁩니다. 와이스펜 어학원의 원장
              Arnold Chi입니다.
              <br />
              저는 모든 학생들에게 탁월한 영어교육을 제공하고 질 높은 학습
              환경을 조성하는 데 전념하고 있습니다.
            </p>
            <p>
              학생들에게 수준 높은 학습 환경을 조성하는 데 전념하고 있습니다.
              우리의 목표는 모든 학생이 각자의 필요에 맞춘 최고 수준의 지도를
              받게 하는 것입니다. 우리는 교육의 힘이 삶을 변화시킬 수 있다고
              믿으며, 학생들이 자신의 언어 학습 목표를 달성할 수 있도록
              돕겠습니다. 부디 저희 와이스펜의 열정과 경험, 헌신이 학생들의
              학습에 가져올 차이를 경험해 보시길 바랍니다. 학생들과 함께
              공부하게 될 날을 기대하고 있겠습니다.
            </p>
          </div>
        </article>
        <div
          className="h-[1px] w-[45%] mx-auto bg-white mt-6"
          role="presentation"
          aria-hidden="true"
        />
        <article className="flex flex-col gap-6 items-center max-w-[970px] mx-auto px-4 py-16">
          <h5 className="text-4xl text-center mb-16">강사 소개</h5>

          <div className="grid sm:grid-cols-2 gap-20">
            <div className="flex flex-col gap-12">
              <h6 className="text-2xl font-bold">Arnold Chi 원장/해드 강사</h6>
              <div className="space-y-4 text-base">
                <strong className="font-bold">학력</strong>
                <ul className="list-inside list-disc px-4 text-lg font-medium">
                  <li>미국 오하이오 주립대학교에서 국제학 학사 졸업</li>
                </ul>
                <strong className="font-bold block">경력 총 18년</strong>
                <ul className="list-inside list-disc px-4">
                  <li>이안어학원 대치 지점 (14년 메인 강사)</li>
                  <li>청담어학원</li>
                  <li>파고다어학원 강남 지점</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <h6 className="text-2xl font-bold">Kenny Kim 강사</h6>
              <div className="space-y-4">
                <strong className="font-bold">학력</strong>
                <ul className="list-inside list-disc px-4 text-base">
                  <li>미국 존슨앤웨일즈 대학교 경영학 학사</li>
                  <li>
                    한국 세종대학교 S.A.S.M.B.A 졸업 <br />
                    <span className="pl-8">
                      (세종대학교 - Arizona State 경영학 석사)
                    </span>
                  </li>
                </ul>
                <strong className="text-base font-bold block">
                  경력 총 18년
                </strong>
                <ul className="list-inside list-disc px-4 text-base">
                  <li>이안어학원 대치 지점</li>
                  <li>퓰리처영어학원</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeadTeacher;
