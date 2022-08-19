import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddeventComponent } from './components/addevent/addevent.component';
import { AdminComponent } from './components/admin/admin.component';
import { CourseslistComponent } from './components/courseslist/courseslist.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardstudentComponent } from './components/dashboardstudent/dashboardstudent.component';
import { DashboardteacherComponent } from './components/dashboardteacher/dashboardteacher.component';
import { DisplaycoursComponent } from './components/displaycours/displaycours.component';
import { DynamiqueComponent } from './components/dynamique/dynamique.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { EditcoursecomponentsComponent } from './components/editcoursecomponents/editcoursecomponents.component';
import { EventslistComponent } from './components/eventslist/eventslist.component';
import { LoginComponent } from './components/login/login.component';
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path:"", component:DynamiqueComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignupComponent},
  {path:"signup-student" , component:SignupStudentComponent},
  {path:"addcourse" , component:AddcourseComponent},
  {path:"addevent" , component:AddeventComponent},
  {path:"admin" , component:AdminComponent},
  {path:"eventlist" , component:EventslistComponent},
  {path:"courseslist" , component:CourseslistComponent},
  {path:"dashboardteacher" , component:DashboardteacherComponent},
  {path:"editform/:id" , component:EditFormComponent},
  {path:"allcourses" , component:CourseslistComponent},
  {path:"allevents" , component:EventslistComponent},
  {path:"dashboardStudent" , component:DashboardstudentComponent},
  {path:"dashboardAdmin" , component:DashboardAdminComponent},
  {path:"editcours/:id" , component:EditcoursecomponentsComponent},
  {path:"displaycours/:id" , component:DisplaycoursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
