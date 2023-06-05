import { Controller,Get, Param,Query } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { query } from 'express';

@Controller('product')
export class ProductController {
constructor(private productService:ProductService){}
@Get()
    getproductall(@Query('name') productname?:string):ProductDTO[]{
        if(productname){
            return this.productService.findByCondition((product) =>
            product.name.includes(productname),);
           
        }
return this.productService.findAll();
    }

    @Get(':id')
    GetProductById(@Param('id') id:string){
        //alert("test")
 return this.productService.findByID(Number(id));
    }
}
