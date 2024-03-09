import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
  AppRoutingModule,
  provideFirebaseApp(() => initializeApp({"projectId":"iotd-e2d64","appId":"1:341146739782:web:0cef3beedc94eeed12d647","storageBucket":"iotd-e2d64.appspot.com","apiKey":"AIzaSyBBk4OwboW6RiCsuRB9Gparv7XjnbCOWOo","authDomain":"iotd-e2d64.firebaseapp.com","messagingSenderId":"341146739782","measurementId":"G-EGKPDL422V"})),
  provideFirebaseApp(() => initializeApp({"projectId":"iotd-e2d64","appId":"1:341146739782:web:2d1b2e92c3b0337a12d647","storageBucket":"iotd-e2d64.appspot.com","apiKey":"AIzaSyBBk4OwboW6RiCsuRB9Gparv7XjnbCOWOo","authDomain":"iotd-e2d64.firebaseapp.com","messagingSenderId":"341146739782","measurementId":"G-Q53VEJZ3T5"})),
  provideFirestore(() => getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
