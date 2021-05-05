import Link from "next/link";

const CreateNavItem = ({ href, navText, currentPosition }) => (
  <Link className="nav-item" href={`/profile/${href}`}>
    <a
      className={`nav-link ${
        currentPosition == href
          ? "bg-kalbe-green-transparent text-kalbe-green"
          : "border-0 text-kalbe-black"
      } font-weight-bold px-0`}
    >
      {navText}
    </a>
  </Link>
);

const ProfileNavTab = ({ currentPosition }) => (
  <div className="nav nav-tabs nav-fill mt-1">
    <CreateNavItem href="ideas" navText="Ideas" currentPosition={currentPosition} />
    <hr />
    <CreateNavItem href="konvensiInovasi" navText="Konvensi Inovasi" currentPosition={currentPosition} />
    <hr />
    <CreateNavItem href="achievements" navText="Achievements" currentPosition={currentPosition} />
    <hr />
    <CreateNavItem href="stats" navText="Stats" currentPosition={currentPosition} />
  </div>
);

export default ProfileNavTab;
