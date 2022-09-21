import { NavigationPhase, RouterConfiguration } from "@microsoft/fast-router";
import { HomeScreen } from "../pages/home/home.js";
// import { Collections } from "../pages/collections/collections.js";
// import { CodeLabs } from "../pages/code-labs/code-labs.js";
import { NotFound } from "../pages/not-found/not-found.js";

type RouteSettings = {
  public?: boolean;
};

export class AppRouterConfiguration extends RouterConfiguration<RouteSettings> {
  public configure() : void {
    this.title = "Welcome to FAST Code Labs!";
    this.routes.map(
      { path: "", redirect: "home" },
      { path: "home", title: "Home", element: HomeScreen },
      // {
      //   path: "collections",
      //   title: "Collections",
      //   element: Collections,
      //   childRouters: true,
      // },
      // {
      //   path: "codelabs",
      //   title: "Code Labs",
      //   element: CodeLabs,
      //   childRouters: true,
      // },
      { path: "not-found", title: "Not Found", element: NotFound }
    );

    this.routes.fallback(() => ({ redirect: "not-found" }));

    this.contributors.push({
      navigate(phase: NavigationPhase<RouteSettings>) {
        const settings = phase.route.settings;

        if (settings && settings.public) {
          return;
        }
      },
    });
  }
}
