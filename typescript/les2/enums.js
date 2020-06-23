var Memebership;
(function (Memebership) {
    Memebership[Memebership["Simple"] = 0] = "Simple";
    Memebership[Memebership["Standart"] = 1] = "Standart";
    Memebership[Memebership["Premium"] = 2] = "Premium";
})(Memebership || (Memebership = {}));
var membership = Memebership.Standart;
var membershipReverse = Memebership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VC";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
