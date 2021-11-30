import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CottageCardComponent } from './components/cottages/cottage-card/cottage-card.component';
import { HeroTitleComponent } from './components/hero-title/hero-title.component';
import { TruncatePipe } from './pipes/truncate-pipe';
import { GapComponent } from './components/gap/gap.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThankYouRegistrationComponent } from './pages/register/thank-you-registration/thank-you-registration.component';
import { FormsModule } from '@angular/forms';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';
import { NewUserHeaderComponent } from './components/header/new-user-header/new-user-header.component';
import { ClientDashboardComponent } from './components/client/client-dashboard/client-dashboard.component';
import { BoatOwnerDashboardComponent } from './components/boats/boat-owner-dashboard/boat-owner-dashboard.component';
import { CottageOwnerDashboardComponent } from './components/cottages/cottage-owner-dashboard/cottage-owner-dashboard.component';
import { FishingInstructorDashboardComponent } from './components/fishing/fishing-instructor-dashboard/fishing-instructor-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { BoatCardComponent } from './components/boats/boat-card/boat-card.component';
import { AdventureCardComponent } from './components/fishing/adventure-card/adventure-card.component';
import { PersonalInfoComponent } from './components/client/client-dashboard/personal-info/personal-info.component';
import { SettingsComponent } from './components/client/client-dashboard/settings/settings.component';
import { SubscriptionsComponent } from './components/client/client-dashboard/subscriptions/subscriptions.component';
import { CottageReservationsComponent } from './components/client/client-dashboard/cottage-reservations/cottage-reservations.component';
import { BoatReservationsComponent } from './components/client/client-dashboard/boat-reservations/boat-reservations.component';
import { FishingReservationsComponent } from './components/client/client-dashboard/fishing-reservations/fishing-reservations.component';
import { SpecialOffersComponent } from './components/client/client-dashboard/special-offers/special-offers.component';
import { PastCottageComponent } from './components/client/client-dashboard/past-cottage/past-cottage.component';
import { PastBoatComponent } from './components/client/client-dashboard/past-boat/past-boat.component';
import { PastFishingComponent } from './components/client/client-dashboard/past-fishing/past-fishing.component';
import { ClientReviewsComponent } from './components/client/client-dashboard/client-reviews/client-reviews.component';
import { ClientComplaintsComponent } from './components/client/client-dashboard/client-complaints/client-complaints.component';
import { MyReviewsAndComplaintsComponent } from './components/client/client-dashboard/my-reviews-and-complaints/my-reviews-and-complaints.component';
import { ClientDeleteAccountComponent } from './components/client/client-dashboard/client-delete-account/client-delete-account.component';
import { SubscriptionComponentComponent } from './components/client/subscription-component/subscription-component.component';
import { ReservationCardComponent } from './components/client/reservation-card/reservation-card.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ReservationSearchComponent } from './components/client/reservation-search/reservation-search.component';
import { BrowseBoatsComponent } from './pages/browse-boats/browse-boats.component';
import { BrowseCottagesComponent } from './pages/browse-cottages/browse-cottages.component';
import { BrowseFishingComponent } from './pages/browse-fishing/browse-fishing.component';
import { BrowseSpecialOffersComponent } from './pages/browse-special-offers/browse-special-offers.component';
import { SpecialOfferCardComponent } from './components/special-offer-card/special-offer-card.component';
import { ReviewsPageComponent } from './pages/reviews-page/reviews-page.component';
import { BrowseCardComponent } from './components/browse-card/browse-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ComplaintCardComponent } from './components/complaint-card/complaint-card.component';
import { BoatPageComponent } from './components/boats/boat-page/boat-page.component';
import { CottagePageComponent } from './components/cottages/cottage-page/cottage-page.component';
import { FishingPageComponent } from './components/fishing/fishing-page/fishing-page.component';
import { RuleComponent } from './components/rule/rule.component';
import { UtilityComponent } from './components/utility/utility.component';
import { MapComponent } from './components/map/map.component';
import { RoomComponent } from './components/cottages/room/room.component';
import { UpcomingReservationsComponent } from './components/client/client-dashboard/upcoming-reservations/upcoming-reservations.component';
import { NotAllowedComponent } from './pages/not-allowed/not-allowed.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { CommisionPrecentageComponent } from './components/admin/admin-dashboard/commision-precentage/commision-precentage/commision-precentage.component';
import { CottageOwnerListComponent } from './components/admin/admin-dashboard/cottage-owner-listing/cottage-owner-list/cottage-owner-list.component';
import { BoatOwnersComponent } from './components/admin/admin-dashboard/boat-owners-list/boat-owners/boat-owners.component';
import { ClientsComponent } from './components/admin/admin-dashboard/clients-list/clients/clients.component';
import { RegistrationRequestComponent } from './components/admin/admin-dashboard/registration-request/registration-request/registration-request.component';
import { FishinInstructorsListComponent } from './components/admin/admin-dashboard/fishin-instructors-list/fishin-instructors-list.component';
import { AdminPersonaInfoComponent } from './components/admin/admin-dashboard/admin-persona-info/admin-persona-info.component';
import { AdminSettingsComponent } from './components/admin/admin-dashboard/admin-settings/admin-settings.component';

@NgModule({
  declarations: [
    TruncatePipe,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CottageCardComponent,
    HeroTitleComponent,
    GapComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ThankYouRegistrationComponent,
    UserHeaderComponent,
    NewUserHeaderComponent,
    ClientDashboardComponent,
    BoatOwnerDashboardComponent,
    CottageOwnerDashboardComponent,
    FishingInstructorDashboardComponent,
    AdminDashboardComponent,
    BoatCardComponent,
    AdventureCardComponent,
    PersonalInfoComponent,
    SettingsComponent,
    SubscriptionsComponent,
    CottageReservationsComponent,
    BoatReservationsComponent,
    FishingReservationsComponent,
    SpecialOffersComponent,
    PastCottageComponent,
    PastBoatComponent,
    PastFishingComponent,
    ClientReviewsComponent,
    ClientComplaintsComponent,
    MyReviewsAndComplaintsComponent,
    ClientDeleteAccountComponent,
    SubscriptionComponentComponent,
    ReservationCardComponent,
    SearchFieldComponent,
    ReservationSearchComponent,
    BrowseBoatsComponent,
    BrowseCottagesComponent,
    BrowseFishingComponent,
    BrowseSpecialOffersComponent,
    SpecialOfferCardComponent,
    ReviewsPageComponent,
    BrowseCardComponent,
    ReviewCardComponent,
    ComplaintCardComponent,
    BoatPageComponent,
    CottagePageComponent,
    FishingPageComponent,
    RuleComponent,
    UtilityComponent,
    MapComponent,
    RoomComponent,
    UpcomingReservationsComponent,
    NotAllowedComponent,
    CarouselComponent,
    CalendarComponent,
    CommisionPrecentageComponent,
    CottageOwnerListComponent,
    BoatOwnersComponent,
    ClientsComponent,
    RegistrationRequestComponent,
    FishinInstructorsListComponent,
    AdminPersonaInfoComponent,
    AdminSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
