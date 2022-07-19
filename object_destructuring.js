const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong : "Kashmir"
};

// const bandName = band.bandName;

const {bandName, famousSong,...restProps} = band;
console.log(bandName);
console.log(restProps);  // jo bacha hua hota hai whi

