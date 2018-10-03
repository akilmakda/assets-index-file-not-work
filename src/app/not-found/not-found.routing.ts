import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
	{ path: '', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);