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
    function Locations(name, city, ZIP, address, img) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.ZIP = ZIP;
        this.img = img;
    }
    Locations.prototype.render = function () {
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
        row2 = document.getElementById("row2");
        row2.appendChild(loc2);
    };
    return Locations;
}());
var Resturants = /** @class */ (function (_super) {
    __extends(Resturants, _super);
    function Resturants(name, city, ZIP, address, img, telephoneNumber, type, webAddress) {
        var _this = _super.call(this, name, city, address, ZIP, img) || this;
        //the super call for not repeating the calls from the original class       
        _this.telephoneNumber = telephoneNumber;
        _this.type = type;
        _this.webAddress = webAddress;
        return _this;
    }
    Resturants.prototype.render = function () {
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
        var img = document.createElement("img");
        img.setAttribute("src", this.img);
        img.setAttribute("width", "300");
        img.setAttribute("height", "220");
        loc.appendChild(img);
        var adrs = document.createElement("p");
        var adrs_text = document.createTextNode(this.address + " , " + this.ZIP + ", " + this.city);
        adrs.appendChild(adrs_text);
        loc.appendChild(adrs);
        var visitUs = document.createElement("p");
        var visitUs_text = document.createTextNode(this.type);
        visitUs.appendChild(visitUs_text);
        loc.appendChild(visitUs);
        var contact = document.createElement("span");
        var contact_text = document.createTextNode("check");
        contact.appendChild(contact_text);
        loc.appendChild(contact);
        var link = document.createElement("a");
        link.setAttribute("href", this.webAddress);
        var link_text = document.createTextNode("our HomePage ");
        link.appendChild(link_text);
        loc.appendChild(link);
        var call = document.createElement("p");
        var call_text = document.createTextNode("call us :  " + this.telephoneNumber);
        call.appendChild(call_text);
        loc.appendChild(call);
        var hr = document.createElement("hr");
        loc.appendChild(hr);
        var loc2 = loc.cloneNode(true);
        row2 = document.getElementById("row3");
        row2.appendChild(loc2);
    };
    return Resturants;
}(Locations));
var rest1 = new Resturants("Cafe Central", "Wien", "Herrengasse 14", '1010', "imgs/res 01.jpg", "Traditionslokal fur Wiener Kuche", "01 5333763", "https://www.cafecentral.wien");
var rest2 = new Resturants("Lemon Leaf", "Wien", "Kettenbruckengasse 19", '1050', "imgs/res 02.png", "Thai Resturant", "01 5812308", "http://www.lemonleaf.at");
var rest3 = new Resturants("SIXTA", "Wien", "Schonbrunner Strasse 21", '1050', "imgs/res 03.png", "Wiener Kuche", "01 5852856", "http://www.sixta-Resturants.at");
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
        row2 = document.getElementById("row4");
        row2.appendChild(loc2);
    };
    return Events;
}(Locations));
var event1 = new Events("Kris Kristofferson", "Wien", "Wiener Stadthalle", '1150', "imgs/event 01.jpg", "15.Jun", "60", '20:00');
var event2 = new Events("Lenny Kravitz", "Wien", "Wiener Stadthalle", '1150', "imgs/event 02.jpg", "09.Jun", "47,80", "19:30");
var event3 = new Events("Brazil VS Austria", "Wien", "Ernst-Happel-Stadion", '1020', "imgs/event 03.png", "10.Jun", "70", "16:00");
var arrey = []; //array on screen
arrey.push(rest1, rest2, rest3, event1, event2, event3);
for (var i = 0; i < arrey.length; i++) {
    arrey[i].render();
}
