import { Injectable } from '@nestjs/common';

@Injectable()
export class TestoatService {
    private User  =
    [
         {name:'oat',id:1,price:250},
         {name:'book',id:2,price:260},
         {name:'Nnon',id:3,price:270}
     ];
      //ค้นหาทั้งหมด   
 findAll(){
     return this.User;
         }
          //ค้นหาจาก Id 
 findById(id:number){
    return this.User.find(p=>p.id == id);
        }
}
