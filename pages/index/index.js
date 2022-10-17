// index.js
// 列表数据
const classes = require('./data.js');
var totalPage = Math.ceil(classes.length / 10);

Page({
  data: {
    classes: classes.slice(0, 10),
    totalPage,
    curPage: 1,
    pageSize: 10,
    pageSizeArray: [5, 10, 20, 50],
    isHighlight: false,
    disabledPreBut: true,   //控制上一页的样式
    disabledNexBut: false,  //控制下一页的样式
    show: true, //控制分页和换页按钮的显示
    color1: "black",
    color2: "black",
  },

  updateClasses() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * this.data.pageSize, this.data.curPage * this.data.pageSize),
    });
  },

  onPrevTap() {
    if (this.data.curPage <= 1) return;
    this.setData({
      curPage: this.data.curPage - 1,
    });
    if(this.data.curPage <= 1)
      this.setData({
          disabledPreBut: true,
      });
    this.setData({
        disabledNexBut: false,
    });
    this.updateClasses();
  },

  onNextTap() {
    if (this.data.curPage >= this.data.totalPage) return;
    this.setData({
      curPage: this.data.curPage + 1,
    });
    if(this.data.curPage >= this.data.totalPage) 
        this.setData({
            disabledNexBut: true,
        })
    this.setData({
        disabledPreBut: false,
    })
    this.updateClasses();
  },

  onPageSizeChange(e) {
    console.log(e.detail.value);
    // write your code here
    this.setData({
        pageSize: this.data.pageSizeArray[e.detail.value],
    })
    totalPage = Math.ceil(classes.length / this.data.pageSize);
    this.setData({
        totalPage: totalPage,
    })
    if(totalPage==1)
        this.setData({
            show: false,
        })
    this.updateClasses();
  },

  onHightlightChange(e) {
    console.log(e.detail.value);
    // write your code here
    if(e.detail.value){
        this.setData({
            color1: "#ffc107",
        })
    }
    else this.setData({
        color1: "black",
    })
  },
});
