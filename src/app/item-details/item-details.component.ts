import { item } from '../item';
import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id: number;
  item: item;

  constructor(private route: ActivatedRoute,private router: Router,
    private ItemService: ItemService) { }

  ngOnInit() {
    this.item = new item();

    this.id = this.route.snapshot.params['id'];
    
    this.ItemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['items']);
  }
  deleteItem(id: number) {
    this.ItemService.deleteItem(id)
      .subscribe(
        data => {
          console.log(data);
          this.list()
        },
        error => console.log(error));
  }

  ItemDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateItem(id: number){
    this.router.navigate(['update', id]);
   // this.list();
  }
}
