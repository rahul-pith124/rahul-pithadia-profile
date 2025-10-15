import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "NFT MARKETPLACE",
    title: "Epiko – NFT Marketplace",
    description:
      "Epiko Market is a cutting-edge multichain NFT marketplace that revolutionizes the trading of digital assets within the gaming ecosystem.",
    link: "https://www.epiko.io/apps/epiko-market",
  },
  {
    id: 2,
    image: card2,
    category: "NFT Trading".toUpperCase(),
    title: "Objktize – NFT Trading",
    description:
      "Convert physical art into blockchain-backed NFTs, store securely, and trade with ease.",
    link: "https://objktize.com/",
  },
  {
    id: 3,
    image: card3,
    category: "Crowdfunding Platform".toUpperCase(),
    title: "Equity Crowdfunding",
    description:
      "A blockchain crowdfunding platform from Fund Raising Script provides an opportunity for established or startup businesses to launch their debt or equity-based crowdfunding investments. ",
    link: "https://demo1.equityfundingscript.com",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 pb-10 md:pb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Explore my recent blockchain work, showcasing my skills in
            developing smart contracts, decentralized apps, and innovative Web3
            solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
