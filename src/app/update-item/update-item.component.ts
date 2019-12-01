import { Component, OnInit } from '@angular/core';
import { item } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

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

  updateItem() {
    debugger
    this.ItemService.updateItem(this.id, this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new item();
    this.gotoList();
  }

  onSubmit() {
    this.updateItem();    
  }

  gotoList() {
    this.router.navigate(['/items']);
  }
}
