import { Component,  AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-login-5',
  imports: [],
  templateUrl: './login-5.html',
  styleUrls: ['./login-5.scss']
})
export class Login5 implements AfterViewInit {
  @ViewChild('loginCarousel', { static: false }) carouselElement!: ElementRef;
  carousel: any;

  ngAfterViewInit(): void {
    this.carousel = new bootstrap.Carousel(this.carouselElement.nativeElement, {
      interval: 2000, 
      ride: 'carousel'
    });
  }

  nextSlide() {
    if (this.carousel) {
      this.carousel.next();
    }
  }
}
