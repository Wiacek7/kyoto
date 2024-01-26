import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Quests from "./views/quests";
import QuestDetails from "./views/quest-details";
import ClaimedPoints from "./views/claimed-points";
import ClaimPoints from "./views/claim-points";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Quests />,
        path: "/",
      },
      {
        element: <QuestDetails />,
        path: "/:questId",
      },
      {
        element: <ClaimPoints />,
        path: "/claimed-points",
      },
      {
        element: <ClaimedPoints />,
        path: "/leaderboard",
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
