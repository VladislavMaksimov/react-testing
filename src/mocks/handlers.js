import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_BASE}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
        {
          name: "Vanilla",
          imagePath: "/images/vanilla.png",
        },
      ])
    );
  }),
];
