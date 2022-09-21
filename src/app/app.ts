import { FASTElement } from "@microsoft/fast-element";
import { AppRouterConfiguration } form "./routes.js";

/**
 * A Custom HTML Element.
 *
 * @public
 */
export class FASTCodeLabsApp extends FASTElement {
     routerConfiguration = new AppRouterConfiguration()
 }
