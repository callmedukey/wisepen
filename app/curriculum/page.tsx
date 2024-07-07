const page = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center bg-[url('/book.webp')] bg-cover bg-bottom bg-no-repeat h-[400px]">
        <div className="bg-primary/70 items-center flex h-full w-full justify-center">
          <h1 className="text-center text-white text-6xl font-gmarketSans uppercase flex items-center justify-center font-medium">
            프로그램 및 교육과정
          </h1>
        </div>
      </div>
      <section className="lg:px-16 px-4 grid md:grid-cols-[45%_55%] py-16 font-gmarketSans gap-y-16 md:gap-y-0">
        <ul className="text-5xl font-bold space-y-1.5 text-center md:text-left grid sm:grid-cols-2 md:block">
          <li className="text-[--primary-green]">Reading</li>
          <li className="text-[--primary-purple] md:ml-[5%] lg:ml-[10%]">
            Writing
          </li>
          <li className="text-[--primary-brown] md:ml-[10%] lg:ml-[20%]">
            Listening
          </li>
          <li className="text-primary md:ml-[15%] lg:ml-[30%]">Speaking</li>
        </ul>
        <article className="flex items-start justify-center flex-col gap-12 text-center sm:text-left">
          <h2 className="text-4xl max-w-xl text-primary">
            모든 영역에서 학생들의 비판적 사고 능력 향상 및 이해력 향상!
          </h2>
          <p className="text-xl max-w-2xl font-light">
            우리 학원은 영어 능력에 대한 높은 기준을 가지고 있으며, 입학은
            레벨테스트 결과에 따라 이루어집니다.
          </p>
        </article>
      </section>
      <section>
        <div className="flex items-center justify-center gap-56 h-[120px] overflow-hidden bg-primary">
          <h3 className="font-saira text-4xl text-white font-medium">
            Reading course
          </h3>
          <img
            src="/books.svg"
            alt="파란색 책 밑에 빨간색 책 밑에 노란색 책이 있는 이미지"
            height={250}
            width={220}
            className="hidden"
          />
        </div>
        <article className="lg:py-16">
          <div className="bg-[url('/kids.webp')] bg-cover bg-center bg-no-repeat h-[615px] lg:w-[915px] lg:rounded-3xl mx-auto">
            <div className="bg-white/80 h-full lg:w-[58%] flex items-center justify-center">
              <ol className="max-w-[320px] space-y-12 font-gmarketSans font-medium text-lg list-decimal list-inside">
                <li>
                  <span className="ml-4">읽기 </span>
                  과정은 학생들의 비판적 사고력과 분석력을 기르는 데 중점을
                  둡니다. 이를 통해 TOEFL iBT, 수능, SAT 등 표준화된 시험에서
                  성공할 수 있는 능력을 기를 수 있습니다.
                </li>
                <li>
                  <span className="ml-4">다양한 </span>
                  주제의 읽기 자료를 통해 폭넓은 지식을 습득할 수 있습니다.
                </li>
                <li>
                  <span className="ml-4">새로운 </span>
                  어휘를 접하고 이해도를 높이는 과제를 수행하면서 어휘력을
                  향상시킬 수 있습니다.
                </li>
                <li>
                  <span className="ml-4">학문적인 </span>책 외에도 고전 소설
                  등을 읽고 토론하며 읽기 능력을 향상시킬 수 있습니다.
                </li>
              </ol>
            </div>
          </div>
        </article>
      </section>
      <section className="">
        <div className="flex items-center justify-center h-[120px] overflow-hidden bg-primary relative">
          <img
            src="/pencil.svg"
            alt="파란색 책 밑에 빨간색 책 밑에 노란색 책이 있는 이미지"
            className="-translate-y-10 translate-x-[-100%] absolute hidden lg:block"
            height={250}
            width={220}
          />
          <h3 className="font-saira text-4xl text-white font-medium lg:translate-x-12">
            Writing course
          </h3>
        </div>
        <article className="lg:py-32">
          <div className="bg-[url('/kids1.webp')] bg-cover bg-bottom bg-no-repeat h-[615px] lg:w-[915px] lg:rounded-3xl mx-auto">
            <div className="bg-white/80 h-full lg:w-[58%] flex items-center justify-center mr-0 ml-auto">
              <ol className="max-w-[320px] space-y-12 font-gmarketSans font-medium text-lg list-decimal list-inside">
                <li>
                  <span className="ml-4">한국 </span>
                  학생들은 시험 대비 능력이 뛰어나지만, 구조화되고 통일성 있는
                  창의적인 글쓰기에는 어려움을 겪는 경우가 많습니다.
                </li>
                <li>
                  <span className="ml-4">이 </span>
                  과정에서는 기본적인 문법 원리를 이해하고 실제 작문에 적용하는
                  능력을 기르는 데 중점을 둡니다.
                </li>
                <li>
                  <span className="ml-4">문단 </span>및 에세이 구조, 일관성,
                  적절한 어휘 사용 등을 중점적으로 다룹니다. 개인 경험 글쓰기,
                  설득력 있는 에세이, 논증문, 정보 전달문 등 다양한 유형의
                  과제를 통해 창의적 사고와 종합적 표현력을 기릅니다.
                </li>
              </ol>
            </div>
          </div>
        </article>
      </section>
      <section className="bg-primary relative lg:p-16 sun-container py-16 px-6">
        <h4 className="font-saira  lg:text-[5rem] text-6xl text-white max-w-3xl">
          What makes our curriculum special?
        </h4>
        <ul className="xl:grid-cols-6 grid gap-[1.4rem] font-gmarketSans text-white place-items-center py-16 md:grid-cols-3 sm:grid-cols-2">
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">1</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>읽기 전략:</span>
              <span className="max-w-[150px] h-[60px]">
                이해력 과 기억력 높임
              </span>
            </span>
          </li>
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">2</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>비판적 사고:</span>
              <span className="max-w-[150px] h-[60px]">
                텍스트 분석과 성찰적 사고 개발
              </span>
            </span>
          </li>
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">3</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>다양한 읽기 자료:</span>
              <span className="max-w-[150px] h-[60px]">다양한 주제와 장르</span>
            </span>
          </li>
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">4</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>어휘 발달:</span>
              <span className="max-w-[150px] h-[60px]">
                {" "}
                어휘능력 향상에 초점을 맞춤
              </span>
            </span>
          </li>
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">5</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>연습문제 및 활동:</span>
              <span className="max-w-[150px] h-[60px]">
                읽기 기술과 이해력 전략을 강화
              </span>
            </span>
          </li>
          <li className="h-[300px] sm:w-[180px] grid grid-rows-2 justify-center text-center bg-secondary py-[26px] rounded-3xl items-center w-full">
            <div className=" font-bold text-5xl">6</div>
            <span className="flex flex-col gap-4 text-lg">
              <span>다양한 스킬의 통합:</span>
              <span className="max-w-[150px] h-[60px]">
                읽기, 쓰기, 비판적 사고
              </span>
            </span>
          </li>
        </ul>
      </section>
      <section className="py-24">
        <h5 className="font-saira lg:text-[5rem] text-6xl text-center font-medium text-primary">
          Our program
        </h5>
        <article className="overflow-x-scroll mt-32 px-4">
          <table className="mx-auto min-w-fit font-saira">
            <thead>
              <tr className="uppercase flex gap-4 font-medium text-[12px]">
                <th className="bg-primary text-white h-[63px] w-[125px] flex items-center justify-center rounded-2xl">
                  class level
                </th>
                <th className="bg-primary text-white h-[63px] w-[250px] flex items-center justify-center rounded-2xl">
                  <span>main subjects</span>
                </th>
                <th className="bg-primary text-white h-[63px] w-[125px] flex items-center justify-center rounded-2xl">
                  speaking & Listening
                </th>
                <th className="bg-primary text-white h-[63px] w-[90px] flex items-center justify-center rounded-2xl">
                  Novel
                </th>
                <th className="bg-primary text-white h-[63px] w-[100px] flex items-center justify-center rounded-2xl">
                  Lexile
                </th>
                <th className="bg-primary text-white h-[63px] w-[150px] flex items-center justify-center rounded-2xl">
                  placement score (out of 30)
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Discovery (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[180px]">
                    Introduction to reading comprehension/ grammar and sentence
                    writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  N/A
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  11 - 14
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Foundation (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[180px]">
                    Basic reading comprehension, grammar, and sentence and
                    paragraph writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  430 - 600
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  15 - 18
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Foundation (M group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[180px]">
                    Basic reading comprehension, listening, and speaking/
                    grammar sentence and paragraph writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  550 - 700
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  15 - 18
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Core (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Intermediate reading comprehension, grammar, and paragraph
                    development to essay writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  600 - 700
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  19 - 22
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Core (M group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Intermediate reading comprehension, grammar, and paragraph
                    development to essay writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  700 - 800
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  19 - 22
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Bridge (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Comprehension and introduction to academic essays
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  680 - 800
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  23 - 26
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Bridge (M group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Comprehension and introduction to academic essays
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  750 - 900
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  23 - 26
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Summit (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Advanced reading comprehension and applied essay writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  800 - 900
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  27 - 28
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Summit (M group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Advanced reading comprehension and applied essay writing
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  850 - 950
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  27 - 28
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Zenith (E group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Proficient reading comprehension and advanced writing
                    composition
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  880 - 1200
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  29 - 30
                </td>
              </tr>
              <tr className="flex gap-4 text-center text-[12px]">
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  Zenith (M group)
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[250px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  <span className="max-w-[220px]">
                    Proficient reading comprehension and advanced writing
                    composition
                  </span>
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[125px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  X
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[90px] flex items-center justify-center rounded-2xl font-medium mt-4 text-lg">
                  O
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[100px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  900 - 1200
                </td>
                <td className="bg-[--primary-gray] h-[63px] w-[150px] flex items-center justify-center rounded-2xl font-medium mt-4">
                  29 - 30
                </td>
              </tr>
            </tbody>
            <tfoot className="text-base font-medium">
              <tr className="flex flex-col py-24">
                <td>* E group - Elementary (초)</td>
                <td>* M group - Middle (중)</td>
              </tr>
            </tfoot>
          </table>
        </article>
      </section>
    </main>
  );
};

export default page;
