function HtmlElement(){
this.click = function(){
    console.log('Clicked');
}

}

HTMLHRElement.prototype.focus = function(){
    console.log('Focussed');
}

//NewDropDOwn

function HtmlSelectedElement (items = []){
 //const item = [];
 this.items = items ;

 this.addItem = function(items){
    this.items.push(items);   
   }

 this.removeItem = function(items){
    this.items.splice(this.items.indexOf(items),1);   
    }
 }

HtmlSelectedElement.prototype.focussed = function(){
    Object.getPrototypeOf(HtmlElement);
}



HtmlSelectedElement.prototype = new HtmlElement();
//Make the constructor our child obect
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;