import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectPage } from '../pages/projects/project';
import { RequirementsPage } from '../pages/requirements/requirements';
import { RequirementEdtPage } from '../pages/requirements/requirement-edt';

@NgModule({
  declarations: [
    MyApp,
    ProjectsPage,
    ProjectPage,
    RequirementsPage,
    RequirementEdtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjectsPage,
    ProjectPage,
    RequirementsPage,
    RequirementEdtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}