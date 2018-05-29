abstract class Locations {
    public name: string;   
    public city: string;
    public ZIP: string;
    public address: string;
    public img: string;

    constructor(name: string, city:string, ZIP:string,address:string, img:any ){
        this.name= name;
        this.city= city;
        this.address= address;
        this.ZIP= ZIP;
        this.img= img
    }
    render()
    {		
            loc= document.createElement("div");
            loc.classList.add("loc");
            loc.classList.add("col-lg-3");
            loc.classList.add("col-md-6");
            loc.classList.add("col-sm-6");
            loc.classList.add("col-xs-12");
            loc.classList.add("text-center");
            row = document.getElementById("row1");
            row.appendChild(loc); 	
         
         var name = document.createElement("h2");
         var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             loc.appendChild(name);
    
        var img = document.createElement("img") 
            img.setAttribute("src", this.img);
            img.setAttribute("width", "300");
            img.setAttribute("height", "220");
            loc.appendChild(img); 	
    
         var adrs = document.createElement("p");
         var adrs_text = document.createTextNode(this.address  + this.ZIP + ", " + this.city);
             adrs.appendChild(adrs_text);
             loc.appendChild(adrs);
             var hr = document.createElement("hr");
             loc.appendChild(hr);	 
    
             var loc2 = loc.cloneNode(true);
             row2 = document.getElementById("row2");
             row2.appendChild(loc2);	
    
    }
}






class Resturants extends Locations{
    telephoneNumber: string;
    type : string;
    webAddress: string;

    constructor(name: string, city:string, ZIP:string, address:string, img:string, telephoneNumber: string, type: string, webAddress: string){
        super(name, city, address, ZIP, img); 
 //the super call for not repeating the calls from the original class       
        this.telephoneNumber= telephoneNumber;
        this.type= type;
        this.webAddress= webAddress;

        
    
    }
    render(){
        loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("col-lg-3");
        loc.classList.add("col-md-6");
        loc.classList.add("col-sm-6");
        loc.classList.add("col-xs-12");
        loc.classList.add("text-center");
        row = document.getElementById("row1");
        row.appendChild(loc); 	
         
         var name = document.createElement("h2");
         var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             loc.appendChild(name);
    
        var img = document.createElement("img") 
            img.setAttribute("src", this.img);
            img.setAttribute("width", "300");
            img.setAttribute("height", "220");
            loc.appendChild(img);
    
     
         var adrs = document.createElement("p");
         var adrs_text = document.createTextNode(this.address + " , " + this.ZIP + ", " + this.city);
             adrs.appendChild(adrs_text);
             loc.appendChild(adrs);
    
         var visitUs = document.createElement("p");
         var visitUs_text = document.createTextNode( this.type );
             visitUs.appendChild(visitUs_text);
             loc.appendChild(visitUs);
    
    
         var contact = document.createElement("span");
         var contact_text = document.createTextNode("check");
             contact.appendChild(contact_text);
             loc.appendChild(contact);
    
             var link = document.createElement("a") 
             link.setAttribute("href", this.webAddress);
             var link_text = document.createTextNode("our HomePage ");
             link.appendChild(link_text);
             loc.appendChild(link);
             
             var call = document.createElement("p");
             var call_text = document.createTextNode( "call us :  "+ this.telephoneNumber);
             call.appendChild(call_text);
             loc.appendChild(call);
             var hr = document.createElement("hr");
             loc.appendChild(hr);
    
             var loc2 = loc.cloneNode(true);
             row2 = document.getElementById("row3");
             row2.appendChild(loc2);
    }	
    }

    var rest1 = new Resturants ("Cafe Central", "Wien","Herrengasse 14",'1010', "imgs/res 01.jpg", "Traditionslokal fur Wiener Kuche","01 5333763" , "https://www.cafecentral.wien");
    var rest2 = new Resturants ("Lemon Leaf", "Wien" , "Kettenbruckengasse 19"  , '1050' , "imgs/res 02.png", "Thai Resturant","01 5812308" , "http://www.lemonleaf.at");
    var rest3 = new Resturants ("SIXTA", "Wien","Schonbrunner Strasse 21",'1050', "imgs/res 03.png", "Wiener Kuche","01 5852856" , "http://www.sixta-Resturants.at"); 










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
		
         loc = document.createElement("div");
         loc.classList.add("loc");
         loc.classList.add("col-lg-3");
         loc.classList.add("col-md-6");
         loc.classList.add("col-sm-6");
         loc.classList.add("col-xs-12"); 
         loc.classList.add("text-center");
         row = document.getElementById("row1");
         row.appendChild(loc); 	
         
         var name = document.createElement("h2");
         var name_name = document.createTextNode(this.name);
             name.appendChild(name_name);
             loc.appendChild(name);
    
         var img = document.createElement("img") 
             img.setAttribute("src", this.img);
             img.setAttribute("width", "300");
             img.setAttribute("height", "220");
             loc.appendChild(img);
    
         var dt = document.createElement("p");
         var dt_text = document.createTextNode("this event will take place on : " + this.eventDate + " at:  " + this.eventTime + " o'clock");
             dt.appendChild(dt_text);
             loc.appendChild(dt);
    
         var adrs = document.createElement("p");
         var adrs_text = document.createTextNode("  address: " + this.address + ", " + this.ZIP + ", " + this.city);
             adrs.appendChild(adrs_text);
             loc.appendChild(adrs);
    
         var price = document.createElement("p");
         var price_name = document.createTextNode("price: " + this.ticketPrice + " Euro");
             price.appendChild(price_name);
             loc.appendChild(price);
             var hr = document.createElement("hr");
             loc.appendChild(hr);
    
             var loc2 = loc.cloneNode(true);
             row2 = document.getElementById("row4");
             row2.appendChild(loc2);
    }   
    }

    let event1 = new Events ("Kris Kristofferson", "Wien","Wiener Stadthalle", '1150', "imgs/event 01.jpg", "15.Jun" , "60", '20:00');
    let event2 = new Events ("Lenny Kravitz", "Wien","Wiener Stadthalle", '1150', "imgs/event 02.jpg", "09.Jun" , "47,80", "19:30");
    let event3 = new Events ("Brazil VS Austria", "Wien","Ernst-Happel-Stadion", '1020', "imgs/event 03.png", "10.Jun" , "70", "16:00");
    
    
    var arrey = []; //array on screen
    arrey.push( rest1, rest2, rest3, event1, event2, event3);
    for(var i=0 ; i< arrey.length ; i++){
        arrey[i].render();
    }
