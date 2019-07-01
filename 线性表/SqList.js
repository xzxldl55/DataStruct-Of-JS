function SqList(){
    this.elem = [];
    this.length = 0;
}

// init
SqList.prototype.InitList = function(array){
    this.elem = array;
    this.length = array.length;
}

// 查找元素
SqList.prototype.LocateElem = function(e){
    for(let i=0;i<this.length;i++)
        if(e == this.elem[i])
            return i;
    return -1;
}

// 插入元素：插入到第i个元素前
SqList.prototype.ListInsert = function(i,e){
    if(i<0 || i>this.length) return false;
    for(let j=this.length;j>i-1;j--)
        this.elem[j] = this.elem[j-1];
    this.elem[i-1] = e;
    this.length++;
    return this;
}

// 删除元素
SqList.prototype.ListDelete = function(i){
    this.elem.splice(i-1,1);
    return this;
}

let L = new SqList();
L.InitList([1,2,3]);
console.log(L.LocateElem(1));
console.log(L.ListInsert(1,5));
console.log(L.ListDelete(1));

