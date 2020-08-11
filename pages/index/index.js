//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        nameTommy: '大好河山',
        priceOne: 239,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature1.png"
      },

      {
        nameTommy: '远古阳光',
        priceOne: 0,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature2.png"
      },

      {
        nameTommy: '诗和远方',
        priceOne: 0,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature3.png"
      },

      {
        nameTommy: '纯的遐想',
        priceOne: 0,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature4.png"
      },

      {
        nameTommy: '无边草原',
        priceOne: 480,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature5.png"
      },

      {
        nameTommy: '山那边',
        priceOne: 597,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature6.png"
      },

      {
        nameTommy: '南海风情',
        priceOne: 2300,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature7.png"
      },

      {
        nameTommy: '山花烂漫',
        priceOne: 0,
        coverPath: "https://aihui1983.ml:9578/images/2020/06/25/nature8.png"
      },

      {
        nameTommy: '憧憬',
        priceOne: 50000,
        coverPath: "../imageset/girl3.png"
      },

      {
        nameTommy: '不懂爱情',
        priceOne: 2390,
        coverPath: "../imageset/natrue1.png"
      },

      {
        nameTommy: '大好河山',
        priceOne: 239,
        coverPath: "../imageset/natrue1.png"
      },

      {
        nameTommy: '时光隧道',
        priceOne: 2345,
        coverPath: "../imageset/natrue2.png"
      }




    ]

  },


  //事件处理函数

  onFree: function () {

    let listTemp = this.data.list;
    let newData = [];
    let i = 0;
    let len = listtemp.length;

    for (; i < len; i++) {
      if (listtemp[i].priceOne == 0) {

        newData.push(listTemp[i]);
      }

      this.setData({
        list: newData
      });

    }

  },

  onCost: function () {

    let listTemp = this.data.list; //dada是个数组
    let newData = [];
    let i = 0;
    let len = listTemp.length;

    for (; i < len; i++) {

      if (listTemp[i].priceOne > 0) {
        newData.push(listTemp[i]);
      }

      this.setData({
        list: newData
      })

    }






  }

})