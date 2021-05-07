import Image from "next/image";
import Link from "next/link";

const CreateFooterItem = ({ last, href, itemName }) => (
  <Link href={href}>
    <a
      className={`body-copy text-kalbe-teal text-decoration-none ${
        !last && "mb-2"
      }`}
    >
      {itemName}
    </a>
  </Link>
);

const CreateSocialItem = ({ href, socialName }) => (
  <div className="width-20">
    <Link href={href}>
      <a>
        <Image src={`/logo/${socialName}-footer.png`} width={36} height={36} />
      </a>
    </Link>
  </div>
);

const Footer = () => (
  <div className="pt-4">
    <div className="bg-kalbe-lightGrey">
      <div className="container d-flex py-4">
        <div className="width-20 d-flex flex-column">
          <h3 className="heading3 text-kalbe-teal">Home</h3>
          <CreateFooterItem href="#" itemName="Trending Ideas" />
          <CreateFooterItem href="#" itemName="Top 10 Ideas Giver" />
          <CreateFooterItem href="#" itemName="Learn More" />
          <CreateFooterItem href="#" itemName="Inbox" />
          <CreateFooterItem last href="#" itemName="Notifications" />
        </div>
        <div className="width-20 d-flex flex-column">
          <h3 className="heading3 text-kalbe-teal">Idea Catalog</h3>
          <CreateFooterItem href="#" itemName="All Topics" />
          <CreateFooterItem href="#" itemName="Submit Idea" />
          <CreateFooterItem last href="#" itemName="Download Guide" />
        </div>
        <div className="width-20 d-flex flex-column">
          <h3 className="heading3 text-kalbe-teal">Konvensi Inovasi</h3>
          <CreateFooterItem href="#" itemName="Participant List" />
          <CreateFooterItem last href="#" itemName="Join Competition" />
        </div>
        <div className="width-20 d-flex flex-column">
          <h3 className="heading3 text-kalbe-teal">Profile</h3>
          <CreateFooterItem href="#" itemName="My Ideas" />
          <CreateFooterItem href="#" itemName="My Konvensi Inovasi" />
          <CreateFooterItem href="#" itemName="Achievements" />
          <CreateFooterItem last href="#" itemName="Stats" />
        </div>
        <div className="width-20">
          <img src="/logo/kalbe-farma-footer.png" className="mb-3" />
          <div className="d-flex">
              <CreateSocialItem href="#" socialName="facebook" />
              <CreateSocialItem href="#" socialName="twitter" />
              <CreateSocialItem href="#" socialName="instagram" />
              <CreateSocialItem href="#" socialName="youtube" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-kalbe-teal">
      <div className="container d-flex py-3">
        <p className="body-copy text-kalbe-white m-0">
          © 2021 Hak Cipta Terpelihara PT Kalbe Farma Tbk
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
