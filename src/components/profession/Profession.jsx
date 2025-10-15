import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Smart Contract Development",
    description:
      "I build secure and efficient smart contracts that power decentralized applications. My focus is on writing clean, optimized code, ensuring reliability through rigorous testing, and deploying contracts that bring trust and automation to blockchain ecosystems.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "I craft responsive and engaging user interfaces using React.js/Next.js frameworks. My focus is on performance, accessibility, and delivering seamless digital experiences that look great on every device.",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "I develop robust and scalable backend systems that power applications efficiently. With a focus on clean architecture, security, and performance, I ensure smooth data flow and reliable functionality leveraging Nest.js/Node.js.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I’m a blockchain developer specializing in building and auditing
            secure smart contracts across EVM chains. I create scalable Web3
            solutions, integrate DeFi and NFT protocols, and optimize on-chain
            performance with a strong focus on security, gas efficiency, and
            reliability.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
