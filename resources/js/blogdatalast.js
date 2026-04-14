var post011 = '{ "title":"LINE THEME - Glowing Fragment Scarlet Land Released", "date":"Saturday, July 22, 2017", "link":"post11-glowing-fragment-scarlet-land-line-theme-released" }';
var post012 = '{ "title":"New Line Theme with Low Price", "date":"Wednesday, January 10, 2018", "link":"post12-new-line-theme-with-low-price" }';
var post013 = '{ "title":"Girls Frontline Assistant Rainmeter Released", "date":"Thursday, March 28, 2019", "link":"post13-girls-frontline-assistant-rainmeter-released" }';
var blogpost1 = JSON.parse(post011);
var blogpost2 = JSON.parse(post012);
var blogpost3 = JSON.parse(post013);
document.getElementById("title-1").innerHTML = blogpost1.title;
document.getElementById("title-2").innerHTML = blogpost2.title;
document.getElementById("title-3").innerHTML = blogpost3.title;
document.getElementById("date-1").innerHTML = blogpost1.date;
document.getElementById("date-2").innerHTML = blogpost2.date;
document.getElementById("date-3").innerHTML = blogpost3.date;
document.getElementById("link-1").href = blogpost1.link;
document.getElementById("link-2").href = blogpost2.link;
document.getElementById("link-3").href = blogpost3.link;

var p11d = '{ "desc":"Hello guys, welcome to my site, today I release my fifth LINE Theme, I hope next I can make more LINE Theme and of course LINE Sticker, but first I need to finish my real life problem, after that I..." }';
var p12d = '{ "desc":"Hi and Good afternoon guys long time no see. A past few days I release some new version of my LINE Theme *I dont know why I make these things*. Anyway for this update I change the color theme to ..." }';
var p13d = '{ "desc":"Hello again guys, welcome to my site. Okay today, I released a new rainmeter skin, Girls Frontline Assistant. This rainmeter is for you who play Girls Frontline, if you like your T-Doll in your desktop you can use this rainmeter..." }';
var pd1 = JSON.parse(p11d);
var pd2 = JSON.parse(p12d);
var pd3 = JSON.parse(p13d);
document.getElementById("podc-1").innerHTML = pd1.desc;
document.getElementById("podc-2").innerHTML = pd2.desc;
document.getElementById("podc-3").innerHTML = pd3.desc;

