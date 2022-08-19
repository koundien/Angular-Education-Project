import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { DynamiqueComponent } from './components/dynamique/dynamique.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import {HttpClientModule  } from "@angular/common/http";
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { CourComponent } from './components/cour/cour.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { EventslistComponent } from './components/eventslist/eventslist.component';
import { EventComponent } from './components/event/event.component';
import { ListcoursesComponent } from './components/listcourses/listcourses.component';
import { ListeventsComponent } from './components/listevents/listevents.component';
import { DashboardteacherComponent } from './components/dashboardteacher/dashboardteacher.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DashboardstudentComponent } from './components/dashboardstudent/dashboardstudent.component';
import { ReservationtabComponent } from './components/reservationtab/reservationtab.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { CoursestableAdminComponent } from './components/coursestable-admin/coursestable-admin.component';
import { TeachertableAdminComponent } from './components/teachertable-admin/teachertable-admin.component';
import { EventstableAdminComponent } from './components/eventstable-admin/eventstable-admin.component';
import { StudentstableAdminComponent } from './components/studentstable-admin/studentstable-admin.component';
import { EditcoursecomponentsComponent } from './components/editcoursecomponents/editcoursecomponents.component';
import { DisplaycoursComponent } from './components/displaycours/displaycours.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    CoursesComponent,
    CounterComponent,
    EventsComponent,
    TeamsComponent,
    NewsComponent,
    NewsletterComponent,
    FooterComponent,
    DynamiqueComponent,
    ComponentsComponent,
    LoginComponent,
    SignupComponent,
    AddcourseComponent,
    AddeventComponent,
    AdminComponent,
    CoursesTableComponent,
    EventsTableComponent,
    SignupStudentComponent,
    CourComponent,
    CourseslistComponent,
    EventslistComponent,
    EventComponent,
    ListcoursesComponent,
    ListeventsComponent,
    DashboardteacherComponent,
    EditFormComponent,
    DashboardstudentComponent,
    ReservationtabComponent,
    DashboardAdminComponent,
    CoursestableAdminComponent,
    TeachertableAdminComponent,
    EventstableAdminComponent,
    StudentstableAdminComponent,
    EditcoursecomponentsComponent,
    DisplaycoursComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
