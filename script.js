var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, address, ZIP, img) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.ZIP = ZIP;
        this.img = img;
    }
    Locations.prototype.render = function () {
        var loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("col-lg-4");
        loc.classList.add("col-md-6");
        loc.classList.add("col-sm-6");
        loc.classList.add("col-xs-12");
        loc.classList.add("text-center");
        var row = document.getElementById("row1");
        row.appendChild(loc);
        var name = document.createElement("h2");
        var name_name = document.createTextNode(this.name);
        name.appendChild(name_name);
        loc.appendChild(name);
        var img = document.createElement("img");
        img.setAttribute("src", this.img);
        img.setAttribute("width", "300");
        img.setAttribute("height", "220");
        loc.appendChild(img);
        var adrs = document.createElement("p");
        var adrs_text = document.createTextNode(this.address + this.ZIP + ", " + this.city);
        adrs.appendChild(adrs_text);
        loc.appendChild(adrs);
        var hr = document.createElement("hr");
        loc.appendChild(hr);
        var loc2 = loc.cloneNode(true);
        var row2 = document.getElementById("row2");
        row2.appendChild(loc2);
    };
    return Locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(name, city, address, ZIP, img, age, freeentry) {
        var _this = _super.call(this, name, city, address, ZIP, img) || this;
        _this.age = age;
        _this.freeentry = freeentry;
        return _this;
    }
    places.prototype.render = function () {
        var loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("col-lg-4");
        loc.classList.add("col-md-6");
        loc.classList.add("col-sm-6");
        loc.classList.add("col-xs-12");
        loc.classList.add("text-center");
        var row = document.getElementById("row1");
        row.appendChild(loc);
        var name = document.createElement("h2");
        var name_name = document.createTextNode(this.name);
        name.appendChild(name_name);
        loc.appendChild(name);
        var img = document.createElement("img");
        img.setAttribute("src", this.img);
        img.setAttribute("width", "300");
        img.setAttribute("height", "220");
        loc.appendChild(img);
        var adrs = document.createElement("p");
        var adrs_text = document.createTextNode(this.address + ", " + this.ZIP + " " + this.city);
        adrs.appendChild(adrs_text);
        loc.appendChild(adrs);
        var old = document.createElement("p");
        var old_text = document.createTextNode("this place is : " + this.age + " years old");
        old.appendChild(old_text);
        loc.appendChild(old);
        var ent = document.createElement("p");
        var ent_text = document.createTextNode("free entry : " + this.freeentry);
        ent.appendChild(ent_text);
        loc.appendChild(ent);
        var hr = document.createElement("hr");
        loc.appendChild(hr);
        var loc2 = loc.cloneNode(true);
        var row2 = document.getElementById("row4");
        row2.appendChild(loc2);
    };
    return places;
}(Locations));
var atr1 = new places("Wiener Karlskirche", "wien", "Kreuzherrengasse 1", '1040', "imgs/atract 01.jpg", 250, true);
var atr2 = new places("Vienna Zoo", "wien", "Maxingstrasse 13b", '1130', "imgs/atract 02.jpg", 220, false);
var atr3 = new places("St. Stephen\'s Cathedral ", "wien", "Stephansplatz 3", '1010', "imgs/sd.jpg", 858, true);
var Resturants = /** @class */ (function (_super) {
    __extends(Resturants, _super);
    function Resturants(name, city, ZIP, address, img, telephoneNumber, type, webAddress) {
        var _this = _super.call(this, name, city, address, ZIP, img) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    Resturants.prototype.render = function () {
        var loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("col-lg-4");
        loc.classList.add("col-md-6");
        loc.classList.add("col-sm-6");
        loc.classList.add("col-xs-12");
        loc.classList.add("text-center");
        var row = document.getElementById("row1");
        row.appendChild(loc);
        var name = document.createElement("h2");
        var name_name = document.createTextNode(this.name);
        name.appendChild(name_name);
        loc.appendChild(name);
        var img = document.createElement("img");
        img.setAttribute("src", this.img);
        img.setAttribute("width", "300");
        img.setAttribute("height", "220");
        loc.appendChild(img);
        var adrs = document.createElement("p");
        var adrs_text = document.createTextNode(this.address + " , " + this.ZIP + " " + this.city);
        adrs.appendChild(adrs_text);
        loc.appendChild(adrs);
        var visitUs = document.createElement("p");
        var visitUs_text = document.createTextNode(this.type);
        visitUs.appendChild(visitUs_text);
        loc.appendChild(visitUs);
        var contact = document.createElement("span");
        var contact_text = document.createTextNode("Check ");
        contact.appendChild(contact_text);
        loc.appendChild(contact);
        var link = document.createElement("a");
        link.setAttribute("href", this.webAddress);
        var link_text = document.createTextNode("our Website ");
        link.appendChild(link_text);
        loc.appendChild(link);
        var call = document.createElement("p");
        var call_text = document.createTextNode("Call us :  " + this.telephoneNumber);
        call.appendChild(call_text);
        loc.appendChild(call);
        var hr = document.createElement("hr");
        loc.appendChild(hr);
        var loc2 = loc.cloneNode(true);
        var row2 = document.getElementById("row3");
        row2.appendChild(loc2);
    };
    return Resturants;
}(Locations));
var rest1 = new Resturants("Café Oper Wien", "Wien", '1010', "Opernring 2", "imgs/opercaffe.jpg", "Traditionslokal fur Wiener Kuche", "Tel: +43 1 513 39 57", "https://www.cafeoperwien.at/");
var rest2 = new Resturants("Lemon Leaf", "Wien", '1050', "Kettenbruckengasse 19", "imgs/res 02.png", "Thai Resturant", "Tel: 01 5812308", "http://www.lemonleaf.at");
var rest3 = new Resturants("SIXTA", "Wien", '1050', "Schonbrunner Strasse 21", "imgs/res 03.png", "Wiener Kuche", "Tel: 01 5852856", "http://www.sixta-restaurant.at/");
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, ZIP, address, img, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, name, city, address, ZIP, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.render = function () {
        var loc = document.createElement("div");
        loc.classList.add("loc");
        loc.classList.add("col-lg-4");
        loc.classList.add("col-md-6");
        loc.classList.add("col-sm-6");
        loc.classList.add("col-xs-12");
        loc.classList.add("text-center");
        var row = document.getElementById("row1");
        row.appendChild(loc);
        var name = document.createElement("h2");
        var name_name = document.createTextNode(this.name);
        name.appendChild(name_name);
        loc.appendChild(name);
        var img = document.createElement("img");
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
        var row2 = document.getElementById("row4");
        row2.appendChild(loc2);
    };
    return Events;
}(Locations));
var event1 = new Events("Kris Kristofferson", "Wien", "Wiener Stadthalle", '1150', "imgs/event 01.jpg", "15.Jun", '60', 2000 /*can't escape the double-dots???*/);
var event2 = new Events("Lenny Kravitz", "Wien", "Wiener Stadthalle", '1150', "imgs/event 02.jpg", "09.Jun", '4780', 1930 /*can't escape the double-dots???*/);
var arrey = [];
arrey.push(atr1, atr2, atr3, rest1, rest2, rest3, event1, event2);
for (var i = 0; i < arrey.length; i++) {
    arrey[i].render();
}
