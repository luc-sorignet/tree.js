const Tree = require('./tree.js')

// Making a tree
function makeTree(){
    var tree = new Tree({});
    for(let i = 0; i<10; i++){
      aKey = "A"+i;
      tree.add({},aKey);
      for(let j=0; j<3; j++){
        let bKey="B"+j;
        tree.at(aKey).add({},bKey);
        for(let k=0; k<3; k++){
          let cKey="C"+k;
          tree.at(aKey).at(bKey).add(1,cKey);
        }
      }
    }
    return tree;
}

 var tree = makeTree();

console.log(tree);

console.log(tree.keys());

//get sub key
console.log(tree.keys().map(k => tree.at(k).keys()));

//get sub sub key
console.log(tree.keys().map(k => tree.at(k).keys().map(k2 => tree.at(k).at(k2).keys())));
