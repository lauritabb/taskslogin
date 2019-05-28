import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatelogRegComponent } from './templatelog-reg/templatelog-reg.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TemplatelogRegComponent,
    WelcomeComponent,
    DetailsComponent,
    HeaderComponent,
    TaskNewComponent,
    TaskListComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
