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

    this.items = items ;

    this.addItem = function(item){
    this.items.push(item);   
   }

    this.removeItem = function(item){
    this.items.splice(this.items.indexOf(item),1);

    }

    this.render = function(){
        return `
        <select>${this.items.map(item =>`<options>${items}</option>`).join('')}
        <select>`;
        //render item used is renderItem = item =>`<option>${items}</option>`;
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