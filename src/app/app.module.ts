import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeService } from './Service/college.service';
import { CollegeReviewComponent } from './component/college-review/college-review.component';
@NgModule({
  declarations: [
    AppComponent,
    CollegeReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
