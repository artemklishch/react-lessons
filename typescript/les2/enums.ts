enum Memebership {
    Simple,
    Standart,
    Premium
}
const membership = Memebership.Standart;
const membershipReverse = Memebership[2];
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VC',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
const social = SocialMedia.INSTAGRAM;
console.log(social)
