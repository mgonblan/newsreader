import { Component, OnInit } from '@angular/core';
import { BuilderService } from '@builder.io/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productDetails: any;
  builder: any;
  constructor(private builderService: BuilderService) {}
  async ngOnInit(): Promise<void> {
    this.productDetails = await this.builder.get('product-details', {
      query: {
        'data.handle': 'your-product-handle',
      },
    });
  }
}
