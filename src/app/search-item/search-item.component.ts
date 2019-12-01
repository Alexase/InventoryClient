import { Component, OnInit } from '@angular/core';
import { item } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  id: number;
  item: item;

  constructor(private route: ActivatedRoute,private router: Router,
    private ItemService: ItemService) {

     }



  ngOnInit() {
    this.item = new item();

    this.id = this.route.snapshot.params['id'];
    this.ItemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
      
  }
  onSearch(id:number){
    //debugger  
    this.router.navigate(['details', id]);
  }
}
