import mock from "../mock";

const achievements = {
  earned: [
    {
      title: "Thingking Hat",
      id: "1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/768px-Circle_Grey_Solid.svg.png",
      points: "32 pts",
      imageAltText: "image-1",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "7 Februari 2021",
    },
    {
      title: "The Builder",
      id: "2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/768px-Circle_Grey_Solid.svg.png",
      points: "21 pts",
      imageAltText: "image-2",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "4 April 2021",
    },
    {
      title: "Project Champion",
      id: "3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/768px-Circle_Grey_Solid.svg.png",
      points: "14 pts",
      imageAltText: "image-3",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "9 Maret 2021",
    },
  ],
  locked: [
    {
      title: "Ideas Lover",
      id: "4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "32 pts",
      imageAltText: "image-1",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "7 Februari 2021",
    },
    {
      title: "Higher Achiever",
      id: "5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "21 pts",
      imageAltText: "image-2",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "4 April 2021",
    },
    {
      title: "Team Player",
      id: "6",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "14 pts",
      imageAltText: "image-3",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "9 Maret 2021",
    },
    {
      title: "Semifinalist",
      id: "7",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "32 pts",
      imageAltText: "image-1",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "7 Februari 2021",
    },
    {
      title: "Semifinalist",
      id: "8",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "21 pts",
      imageAltText: "image-2",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "4 April 2021",
    },
    {
      title: "Semifinalist",
      id: "9",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "14 pts",
      imageAltText: "image-3",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "9 Maret 2021",
    },
    {
      title: "Power Player",
      id: "10",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Wild Carder",
      id: "11",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Team Player",
      id: "12",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "13",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "14",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "15",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Power Player",
      id: "16",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Wild Carder",
      id: "17",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Team Player",
      id: "18",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "19",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "20",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
    {
      title: "Semifinalist",
      id: "21",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Disc_Plain_lightgrey.svg/768px-Disc_Plain_lightgrey.svg.png",
      points: "18 pts",
      imageAltText: "image-4",
      modalText:
        "Donec dapibus pretium volutpat. Vivamus mollis ultrices leo. Aenean a nisi tincidunt, lacinia purus quis, posuere sem. Cras ipsum sapien.",
      achievedDate: "13 April 2021",
    },
  ],
};

mock
  .onGet("/api/v1/achievements/earned")
  .reply(() => [200, achievements.earned]);
mock
  .onGet("/api/v1/achievements/locked")
  .reply(() => [200, achievements.locked]);
