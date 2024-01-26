import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//

import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({backButtonText: 'atrás', mode: 'ios'}), AppRoutingModule,
  IonicStorageModule.forRoot(), HttpClientModule, FormsModule, ComponentsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
