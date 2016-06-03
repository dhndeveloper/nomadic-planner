import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {ListService, Item} from '../../services/list.service';

@Page({
  templateUrl: 'build/pages/list/list.html',
  providers: [ListService]
})
export class ListPage {
  selectedItem: Item;

  constructor(private nav: NavController, navParams: NavParams, public listService: ListService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    listService.clearItems();
    for(let i = 1; i < 11; i++) {
      listService.addItem({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: listService.chooseIcon()
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
