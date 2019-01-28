import { Component, OnInit, HostListener } from '@angular/core';
import { LoadListService } from '../load-list.service';

@Component({
  selector: 'app-dog-listing',
  templateUrl: './dog-listing.component.html',
  styleUrls: ['./dog-listing.component.css']
})
export class DogListingComponent implements OnInit {

  dogs;

  renderedDogs;

  start = 0;
  end = 0;
  scrollLoad = 5;

  constructor(private loadListService: LoadListService) {
    this.dogs=[];
    this.renderedDogs=[];
   }

  getDogs(): void {
    this.loadListService.getDogs()
      .subscribe(data => {
        console.log(data);
        this.dogs = data.dogs;
        this.onScroll();
      })
  }

  @HostListener('window:wheel', [])
  @HostListener('window:scroll', [])
  @HostListener('window:keydown', [])
  @HostListener('window:touchmove', [])
  onScroll() {
    console.log("Infinite Scroll called end="+this.end);
    if(this.end <=this.dogs.length) {
      for(var i=this.end; i<this.end+this.scrollLoad && i<this.dogs.length; i++) {
        this.renderedDogs.push(this.dogs[i]);
        this.end= this.end+1;
      }  
    }

  }



  // Get the modal
 

  // Get the image and insert it inside the modal - use its "alt" text as a caption
 
  //  captionText = document.getElementById("caption");
  imgonclick = function (src) {
    console.log(src);
    let img = document.getElementById('myImg');
    let modalImg = document.getElementById("img01");
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
    modalImg.src = src;
    // this.captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  spanonclick = function () {
    let modal = document.getElementById('myModal');
    modal.style.display = "none";
  }

  ngOnInit() {
   // window.addEventListener('scroll', this.onScroll, true); //third parameter
    
    this.getDogs();
    
  }

}
