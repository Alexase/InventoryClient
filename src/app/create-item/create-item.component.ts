import { ItemService } from '../item.service';
import { item } from '../item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: item = new item();
  submitted = false;

  constructor(private ItemService: ItemService,
    private router: Router) { }

  ngOnInit() {
  }

  newItem(): void {
    this.submitted = false;
    this.item = new item();
  }

  save() {
    this.ItemService.createItem(this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new item();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/items']);
  }
}
