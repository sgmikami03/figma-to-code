import * as React from "react";

const SampleSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 pt-20 w-full bg-neutral-800 rounded-[100px] max-md:px-5 max-md:max-w-full">
        <div className="z-10 mb-0 w-full max-w-[1432px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10">
                      <div className="flex flex-col justify-center rounded-[60px]">
                        <div className="flex flex-col px-12 py-14 bg-white rounded-[60px] max-md:px-5">
                          <img
                            src="http://localhost:3001/sample1.png"
                            className="aspect-square w-[60px]"
                          />
                          <div className="flex flex-col mt-6">
                            <div className="flex gap-0 text-7xl font-bold whitespace-nowrap max-md:text-4xl">
                              <div className="text-neutral-800 max-md:text-4xl">
                                1
                              </div>
                              <div className="text-yellow-500 max-md:text-4xl">
                                .
                              </div>
                            </div>
                            <div className="flex flex-col mt-2.5 text-neutral-800">
                              <div className="text-2xl font-bold">
                                Phasellus Vitae
                              </div>
                              <div className="flex flex-col mt-5">
                                <div className="text-xl font-semibold">
                                  Quisque
                                </div>
                                <div className="text-lg capitalize font-[350]">
                                  Porttitor vitae vel amet{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center mt-16 rounded-[60px] max-md:mt-10">
                        <div className="flex flex-col px-12 py-14 bg-yellow-500 rounded-[60px] max-md:px-5">
                          <img
                            src="/sample2.png"
                            className="aspect-square w-[50px]"
                          />
                          <div className="flex flex-col mt-9">
                            <div className="flex gap-0 text-7xl font-bold whitespace-nowrap max-md:text-4xl">
                              <div className="text-neutral-800 max-md:text-4xl">
                                3
                              </div>
                              <div className="text-white max-md:text-4xl">
                                .
                              </div>
                            </div>
                            <div className="flex flex-col mt-2.5 text-neutral-800">
                              <div className="text-2xl font-bold">
                                Eleifend Pulvinar{" "}
                              </div>
                              <div className="flex flex-col mt-5">
                                <div className="text-xl font-semibold">
                                  Vitae
                                </div>
                                <div className="text-lg capitalize font-[350]">
                                  Consectetur nibh velit{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col justify-center mt-32 rounded-[60px] max-md:mt-10">
                      <div className="flex flex-col px-12 py-14 bg-yellow-500 rounded-[60px] max-md:px-5">
                        <img
                          src="/sample1.png"
                          className="aspect-square w-[50px]"
                        />
                        <div className="flex flex-col mt-9">
                          <div className="flex gap-0 text-7xl font-bold whitespace-nowrap max-md:text-4xl">
                            <div className="text-neutral-800 max-md:text-4xl">
                              2
                            </div>
                            <div className="text-white max-md:text-4xl">.</div>
                          </div>
                          <div className="flex flex-col mt-2.5 text-neutral-800">
                            <div className="text-2xl font-bold">
                              Iaculis Magna
                            </div>
                            <div className="flex flex-col mt-5">
                              <div className="text-xl font-semibold">
                                Porttitor
                              </div>
                              <div className="text-lg capitalize font-[350]">
                                neque scelerisque mattis.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="text-xl tracking-wide text-yellow-500 max-md:max-w-full">
                    Quisque porttitor vitae vel amet neque scelerisque mattis.
                    Consectetur nibh velit magna consectetur leo.{" "}
                  </div>
                  <div className="mt-5 text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                    Cursus Integer Conseq
                    <br />
                    Aliquam Tristique.{" "}
                  </div>
                </div>
                <div className="flex gap-5 justify-between px-12 pt-6 pb-6 mt-16 max-w-full text-2xl font-bold bg-white rounded-[5000px] text-neutral-800 w-[350px] max-md:px-5 max-md:mt-10">
                  <div>Lorem Ipsum</div>
                  <img
                    src="/sample1.png"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/49ff386b9372c6be6b60f6e26a6d574f802724e28f81709a479c9aac92de4444?"
                    className="shrink-0 self-start aspect-square w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-10 flex-col justify-center self-center mt-0 max-w-full rounded-[60px] w-[350px]">
        <div className="flex flex-col px-12 py-14 bg-white rounded-[60px] max-md:px-5">
          <img
            src="/sample1.png"
            loading="lazy"
            srcSet="..."
            className="aspect-square w-[50px]"
          />
          <div className="flex flex-col mt-9">
            <div className="flex gap-0 text-7xl font-bold whitespace-nowrap max-md:text-4xl">
              <div className="text-neutral-800 max-md:text-4xl">4</div>
              <div className="text-yellow-500 max-md:text-4xl">.</div>
            </div>
            <div className="flex flex-col mt-2.5 text-neutral-800">
              <div className="text-2xl font-bold">Velit Odio Phir</div>
              <div className="flex flex-col mt-5">
                <div className="text-xl font-semibold">Ametneq</div>
                <div className="text-lg capitalize font-[350]">
                  magna consectetur leo.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleSection;
