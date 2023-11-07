import { rest } from "msw";

export const handleToppings = () =>
  rest.get(`${process.env.REACT_APP_BASE}/toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
        {
          name: "M&Ms",
          imagePath: "/images/m-and-ms.png",
        },
        {
          name: "Hot fudge",
          imagePath: "/images/hot-fudge.png",
        },
      ])
    );
  });
