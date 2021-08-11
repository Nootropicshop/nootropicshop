import { AccountPage } from '@pages/account/account.component';
import { AnnotationComponent } from '@components/annotation/annotation.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartPage } from '@pages/cart/cart.component';
import { DefaultLayout } from '@layouts/default/default.component';
import { ExpressComponent } from '@components/express/express.component';
import { FilterComponent } from '@components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '@components/hero/hero.component';
import { HomePage } from '@pages/home/home.component';
import { InfoComponent } from '@components/info/info.component';
import { MenuComponent } from '@components/menu/menu.component';
import { MenuService } from '@components/menu/menu.service';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RootComponent } from '@components/root/root.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { SearchComponent } from '@components/search/search.component';
import { ShopPage } from '@pages/shop/shop.component';
import { ShowcaseComponent } from '@components/showcase/showcase.component';
import { SortComponent } from '@components/sort/sort.component';
const routes: Routes = [
	{
		children: [
			{
				component: AccountPage,
				path: 'account'
			},
			{
				component: CartPage,
				path: 'cart'
			},
			{
				component: HomePage,
				path: 'home'
			},
			{
				component: ShopPage,
				path: 'shop'
			},
			{
				path: '**',
				redirectTo: 'home'
			}
		],
		component: DefaultLayout,
		path: ''
	}
];
@NgModule({
	bootstrap: [RootComponent],
	declarations: [
		AccountPage,
		AnnotationComponent,
		CartPage,
		DefaultLayout,
		ExpressComponent,
		FilterComponent,
		HeroComponent,
		HomePage,
		InfoComponent,
		MenuComponent,
		NavigationComponent,
		RootComponent,
		SearchComponent,
		ShopPage,
		ShowcaseComponent,
		SortComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [MenuService]
})
export class MainModule {}
