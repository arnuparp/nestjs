import { Controller,Get, Param } from '@nestjs/common';
import  { TestoatService } from "./testoat.service";

@Controller('testoat')
export class TestoatController {
    //เรียกservice มาใช้
    constructor(private TestoatService:TestoatService){}
    //เรียกทั้งหมด
    @Get ()
    GetNameall(){      
                return this.TestoatService.findAll();   
    }
    //เรียกจาก id
    @Get(':id')
    GetUserById(@Param('id') id:string){
    return this.TestoatService.findById(Number(id));
    }
}
