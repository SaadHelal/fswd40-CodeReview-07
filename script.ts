abstract class Locations {
    public name: string;   
    public city: string;
    public address: string;
    public ZIP: string;
    public img: string;

    constructor(name: string, city:string,address:string, ZIP:string, img:any){
        this.name= name;
        this.city= city;
        this.address= address;
        this.ZIP= ZIP;
        this.img= img
    }
    render()
    {		
        var x = document.createElement("div");
            x.classList.add("col-lg-4");
            x.classList.add("col-md-6");
            x.classList.add("col-sm-12");
            x.classList.add("col-xs-12");
            x.classList.add("text-center");

        var row = document.getElementById("row1");
            row.appendChild(x); 	
         
        var name = document.createElement("h2");
        var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             x.appendChild(name);
    
        var img = document.createElement("img") 
            img.setAttribute("src", this.img);
            img.setAttribute("width", "300");
            img.setAttribute("height", "220");
            x.appendChild(img); 	
    
        var adrs = document.createElement("p");
        var adrs_text = document.createTextNode(this.address  + this.ZIP + ", " + this.city);
             adrs.appendChild(adrs_text);
             x.appendChild(adrs);

        var hr = document.createElement("hr");
             x.appendChild(hr);	 
    
            var x2 = x.cloneNode(true);
            var row2 = document.getElementById("row2");
            row2.appendChild(x2);

            
    }
}

class places extends Locations {

	age:number;
	freeentry :boolean;

constructor(name:string, city:string, address:string, ZIP:string, img:any, age:number, freeentry :boolean )
{	
	super(name, city, address, ZIP, img);


	this.age=age;
	this.freeentry=freeentry;
}

render(){	
		
var	x = document.createElement("div");
    x.classList.add("col-lg-4");
    x.classList.add("col-md-6");
    x.classList.add("col-sm-12");
 	x.classList.add("col-xs-12"); 
    x.classList.add("text-center");

var row = document.getElementById("row1");
 	row.appendChild(x);	
 	
 	var name = document.createElement("h2");
 	var name_name = document.createTextNode(this.name);
	 	name.appendChild(name_name);
	 	x.appendChild(name);

    var img = document.createElement("img") 
	 	img.setAttribute("src", this.img);
	    img.setAttribute("width", "300");
	    img.setAttribute("height", "220");
	 	x.appendChild(img);	 


	var adrs = document.createElement("p");
 	var adrs_text = document.createTextNode( this.address + ", "+ this.ZIP + " " +this.city );
	 	adrs.appendChild(adrs_text);
	 	x.appendChild(adrs);

 	var old = document.createElement("p");
 	var old_text = document.createTextNode("this place is : " + this.age + " years old");
	 	old.appendChild(old_text);
	 	x.appendChild(old);

 	var ent = document.createElement("p");
 	var ent_text = document.createTextNode("free entry : " + this.freeentry);
	 	ent.appendChild(ent_text);
	 	x.appendChild(ent);

 	
	 	var hr = document.createElement("hr");
	 	x.appendChild(hr);


	var x2 = x.cloneNode(true);
    var row2 = document.getElementById("row4");
 	    row2.appendChild(x2);

	
	
	 		

}	
}




var atr1 = new places("Wiener Karlskirche","wien","Kreuzherrengasse 1",'1040',"imgs/atract 01.jpg",250,true);

var atr2 = new places("Vienna Zoo","wien","Maxingstrasse 13b",'1130',"imgs/atract 02.jpg",220,false);

var atr3 = new places("St. Stephen\'s Cathedral ","wien","Stephansplatz 3",'1010',"imgs/sd.jpg",858,true);




class Resturants extends Locations{
    telephoneNumber: string;
    type : string;
    webAddress: string;

    constructor(name: string, city:string, ZIP:string, address:string, img:string, telephoneNumber: string, type: string, webAddress: string){
        super(name, city, address, ZIP, img); 
       
        this.telephoneNumber= telephoneNumber;
        this.type= type;
        this.webAddress= webAddress;

        
    
    }
    render(){
    var x = document.createElement("div");
        x.classList.add("col-lg-4");
        x.classList.add("col-md-6");
        x.classList.add("col-sm-12");
        x.classList.add("col-xs-12");
        x.classList.add("text-center");
    var row = document.getElementById("row1");
        row.appendChild(x); 	
         
         var name = document.createElement("h2");
         var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             x.appendChild(name);
    
        var img = document.createElement("img") 
            img.setAttribute("src", this.img);
            img.setAttribute("width", "300");
            img.setAttribute("height", "220");
            x.appendChild(img);
    
     
         var adrs = document.createElement("p");
         var adrs_text = document.createTextNode(this.address + " , " + this.ZIP + " " + this.city);
             adrs.appendChild(adrs_text);
             x.appendChild(adrs);
    
         var visitUs = document.createElement("p");
         var visitUs_text = document.createTextNode( this.type );
             visitUs.appendChild(visitUs_text);
             x.appendChild(visitUs);
    
    
         var contact = document.createElement("span");
         var contact_text = document.createTextNode("Check ");
             contact.appendChild(contact_text);
             x.appendChild(contact);
    
             var link = document.createElement("a") 
             link.setAttribute("href", this.webAddress);
             var link_text = document.createTextNode("our Website ");
             link.appendChild(link_text);
             x.appendChild(link);
             
             var call = document.createElement("p");
             var call_text = document.createTextNode( "Call us :  "+ this.telephoneNumber);
             call.appendChild(call_text);
             x.appendChild(call);
             var hr = document.createElement("hr");
             x.appendChild(hr);
    
             var x2 = x.cloneNode(true);
        var row2 = document.getElementById("row3");
             row2.appendChild(x2);


    }	
    }

    
	
	 		

    var rest1 = new Resturants ("Café Oper Wien", "Wien",'1010',"Opernring 2", "imgs/opercaffe.jpg", "Traditionslokal fur Wiener Kuche","Tel: +43 1 513 39 57" , "https://www.cafeoperwien.at/");
    var rest2 = new Resturants ("Lemon Leaf", "Wien" ,'1050', "Kettenbruckengasse 19", "imgs/res 02.png", "Thai Resturant","Tel: 01 5812308" , "http://www.lemonleaf.at");
    var rest3 = new Resturants ("SIXTA", "Wien", '1050', "Schonbrunner Strasse 21", "imgs/res 03.png", "Wiener Kuche","Tel: 01 5852856" , "http://www.sixta-restaurant.at/"); 










class Events extends Locations{
    eventDate: string;
    eventTime : string;
    ticketPrice: number;

    constructor(name: string, city:string, ZIP:string, address:string, img:string, eventDate: string, eventTime : string, ticketPrice: number){
        super(name, city, address, ZIP, img); 
       
        this.eventDate= eventDate;
        this.eventTime= eventTime;
        this.ticketPrice= ticketPrice;
    
    }
    render(){ 
		
    var x = document.createElement("div");
        x.classList.add("col-lg-4");
        x.classList.add("col-md-6");
        x.classList.add("col-sm-12");
        x.classList.add("col-xs-12"); 
        x.classList.add("text-center");
    var row = document.getElementById("row1");
         row.appendChild(x); 	
         
         var name = document.createElement("h2");
         var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             x.appendChild(name);
    
         var img = document.createElement("img") 
             img.setAttribute("src", this.img);
             img.setAttribute("width", "300");
             img.setAttribute("height", "220");
             x.appendChild(img);
    
         var dt = document.createElement("p");
         var dt_text = document.createTextNode("this event will take place on : " + this.eventDate + " at :  " + this.eventTime + "  o'clock");
             dt.appendChild(dt_text);
             x.appendChild(dt);
    
         var adrs = document.createElement("p");
         var adrs_text = document.createTextNode("  address: " + this.address + ", " + this.ZIP + ", " + this.city);
             adrs.appendChild(adrs_text);
             x.appendChild(adrs);
    
         var price = document.createElement("p");
         var price_name = document.createTextNode("price: " + this.ticketPrice + " Euro");
             price.appendChild(price_name);
             x.appendChild(price);
             var hr = document.createElement("hr");
             x.appendChild(hr);
    
             var x2 = x.cloneNode(true);
        var row2 = document.getElementById("row4");
             row2.appendChild(x2);

             
	
             
    }   
    }


    let event1 = new Events ("Kris Kristofferson", "Wien","Wiener Stadthalle", '1150', "imgs/event 01.jpg", "15.Jun" , '60', 2000/*can't escape the double-dots???*/);
    let event2 = new Events ("Lenny Kravitz", "Wien","Wiener Stadthalle", '1150', "imgs/event 02.jpg", "09.Jun" , '4780', 1930/*can't escape the double-dots???*/);
    
    
    
    var arrey = [];
    arrey.push(atr1, atr2, atr3, rest1, rest2, rest3, event1, event2,);
    for(var i=0 ; i< arrey.length ; i++){
        arrey[i].render();
    }
