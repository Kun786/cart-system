import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  DummyData:any = [
    {
      _id:1,
      Name:'Bat',
      Image1:'https://static-01.daraz.pk/p/9d79d84792b4acbd75de2b47d06d97a5.jpg',
      Image2:'https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFYNG12YmFyREwuX0FDX1NMMTAyNF8uanBn.jpg',
      Image3:'https://pbs.twimg.com/media/D90Z_reWwAM1tHx.jpg',
      Description:'This is best company for bat',
      qty:10
    },
    {
      _id:2,
      Name:'Ball',
      Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3zOwx0VXbmPNFEeX8-rhAeMNOiHFqAvAww&usqp=CAU',
      Image2:'https://i.ytimg.com/vi/Xw0f1rIOYj4/maxresdefault.jpg',
      Description:'This is best company for ball',
      qty:12
    },
    {
      _id:3,
      Name:'Helmet',
      Image1:'https://i.ytimg.com/vi/Xw0f1rIOYj4/maxresdefault.jpg',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepaVXeUeEROPQ5fkr7jBDuYlB03czGsJpKQ&usqp=CAU ',
      Image3:'https://media.istockphoto.com/vectors/cricket-helmet-vector-id1084522126?k=20&m=1084522126&s=170667a&w=0&h=WC2-o9tDY7BlXTJClXNiwMqa-SQTAgEEgkowUsXu7R0=',
      Description:'This is best company for helmet',
      qty:14
    },
    {
      _id:4,
      Name:'Ac-Mila',
      Image1:'https://cdn.vox-cdn.com/thumbor/P9q-hSCmh1-r6l_7jW3DA_1H_wM=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/21830413/IbraDay_Gallery_3.png',
      Image2:'https://www.dosoccerjersey.net/images/FIGC/AC-Milan-Home-IBRAHIMOVIC-Shirt-20-21.jpg',
      Image3:'https://icdn.sempremilan.com/wp-content/uploads/2020/07/EeAHJlNWsAIHFI1.jpeg',
      Description:'This is best culb in Serie A',
      qty:0
    },
    {
      _id:5,
      Name:'Petronas',
      Image1:'https://shop.mercedesamgf1.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf827232d/images/large/701213206001_pp_3_MERCEDES.jpg?sw=1600&sh=1600&sm=fit',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9C5i0Cn0Rki8ix_scIaiXDfH77J5sUUw5tX5qnGqgFPpO2DQVlujZvE7n869CubgIuk&usqp=CAU',
      Image3:'https://cf.shopee.com.my/file/138690594ae8e0f7d32f54d481822007',
      Description:'This best F1 Club',
      qty:17
    },
    {
      _id:6,
      Name:'Ny-Yankees',
      Image1:'https://media.kohlsimg.com/is/image/kohls/4399507?wid=300&hei=300&op_sharpen=1',
      Image2:'https://i.pinimg.com/474x/7c/24/39/7c24399ea4af53e6575ad8af937e216c.jpg',
      Image3:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6h6dgX3pnW1zeUv594OsqMor37SjMO8b_kg&usqp=CAU',
      Description:'Beautiful Shirts',
      qty:0
    },
    
  ]
  constructor() { }

  GetData(){
    return this.DummyData;
  }
}
