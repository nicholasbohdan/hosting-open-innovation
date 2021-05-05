import Link from "next/link";

const CreateNavItem = ({ href, navText, currentPosition, bottomBorder }) => (
  <Link href={`/profile/${href}`}>
    <a
      className={`body-copy ${
        currentPosition === href
          ? "text-kalbe-green bg-kalbe-green-transparent font-weight-bold"
          : "text-kalbe-black"
      } text-decoration-none py-2 px-4 mb-${bottomBorder}`}
    >
      {navText}
    </a>
  </Link>
);

const ProfileNavCard = ({ currentPosition }) => (
  <div className="card" style={{ borderRadius: "12px" }}>
    <p
      className={`body-copy text-muted font-weight-bold text-decoration-none py-2 px-3 mb-0`}
    >
      Menu
    </p>
    <hr className="mx-3 my-0 py-0" />
    <CreateNavItem href="ideas" navText="Ideas" currentPosition={currentPosition} bottomBorder={0} />
    <hr className="mx-3 my-0 py-0" />
    <CreateNavItem href="konvensiInovasi" navText="Konvensi Inovasi" currentPosition={currentPosition} bottomBorder={0} />
    <hr className="mx-3 my-0" />
    <CreateNavItem href="achievements" navText="Achievements" currentPosition={currentPosition} bottomBorder={0} />
    <hr className="mx-3 my-0" />
    <CreateNavItem href="stats" navText="Stats" currentPosition={currentPosition} bottomBorder={2} />
  </div>
);

export default ProfileNavCard;
