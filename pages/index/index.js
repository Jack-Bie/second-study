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
    this.updateClasses();
  },

  onNextTap() {
    if (this.data.curPage >= this.data.totalPage) return;
    this.setData({
      curPage: this.data.curPage + 1,
    });
    this.updateClasses();
  },

  onPageSizeChange(e) {
    console.log(e.detail.value);
    // write your code here
    this.setData({
        curPage: 1,
        pageSize: this.data.pageSizeArray[e.detail.value],
    })
    totalPage = Math.ceil(classes.length / this.data.pageSize);
    this.setData({
        totalPage: totalPage,
    })
    this.updateClasses();
  },

  onHightlightChange(e) {
    console.log(e.detail.value);
    // write your code here
    this.setData({
        isHighlight: e.detail.value,
    })
  },
});
