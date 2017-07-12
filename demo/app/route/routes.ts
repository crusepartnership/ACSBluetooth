import {HomeComponent} from "../home/home.component";
import {Routes} from "@angular/router";

/**
 * the valid routs(pages/screens) that the app can navigate too
 * A valid route required a path and a component.
 *
 * path: corresponds to the link/route path
 * component: corresponds to the component object name
 * canActive and canActivateChild can be used to apply route resolvers to modify route and data
 */
export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }, {
        path: "home",
        component: HomeComponent,
    },
];

/**
 *  This is a list of the valid components that can be routed too.
 *  Any component added to the routes array above also needs to be added here
 */
export const routableComponents: any = [
    HomeComponent,
];
