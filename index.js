function HtmlElement(){
this.click = function(){
    console.log('Clicked');
}

}

HtmlElement.prototype.focus = function(){
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

    this.render = function(){
        return `
        <select>${this.items.map(items =>`
        <options>${items}</option>`).join('')}
        <select>`;
    }
 }


HtmlSelectedElement.prototype = new HtmlElement();
//Make the constructor our child obect
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement;

function HtmlImageElement(src){
    this.src = src;

    this.render = function(){
        return `<img src="${this.src}"/>`;
    }
}