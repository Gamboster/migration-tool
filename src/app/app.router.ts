import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  {
    path: "",
    component: AppComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent }
    ]
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
