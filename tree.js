/**
* Tree js proto implementation
***/

module.exports = class Tree {
  
 constructor (data=null,root=null){
   this.data = data;
   this.root = root;
   this.leafs = [];
 }

valueOf() {
  return this.data;
}

 at(id){
   return this.leafs[id];
 }

 remove(id){
   //FIXME : do it harder better faster stronger ... papapa!
  delete this.leafs[id];
 }

 add(value, id=null){
   let tree = null;
   if (value instanceof Tree){
     tree = value;
     tree.root = this;
   }else{
     tree = new Tree(value,this);
   }
   if(id){
     this.leafs[id] = tree;
   }else{
     this.leafs.push(tree);
   }
 }

 keys(){
   return Object.keys(this.leafs);
 }


}
