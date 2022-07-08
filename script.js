const products = [
  {
    brand: "dell",
    cpu: {
      brand: "INTEL",
      name: "i5",
      gen: 10,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3060ti",
      size: 8,
      unit: "GB",
    },
    price: 150000,
    monitor: {
      brand: "LG",
      size: 24,
      unit: "inch",
    },
    mouse: "RazerDeathAdder V2",
    keyboard: "Sk68",
  },
  {
    brand: "Acer",
    cpu: {
      brand: "INTER",
      name: "i7",
      gen: 12,
    },
    os: "Windows10",
    ram: {
      size: 8,
      unit: "GB",
    },
    ssd: {
      size: 250,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3080ti",
      size: 12,
      unit: "GB",
    },
    price: 250000,
    monitor: {
      brand: "ACER",
      size: 32,
      unit: "inch",
    },
    mouse: "Logitech G402",
    keyboard: "TVS Gold",
  },
  {
    brand: "lenova",
    cpu: {
      brand: "AMD",
      name: "Ryzen 5",
      gen: 2500,
    },
    os: "Windows11",
    ram: {
      size: 16,
      unit: "GB",
    },
    ssd: {
      size: 500,
      unit: "GB",
    },
    gpu: {
      brand: "Nvidia",
      model: "Rtx3090ti",
      size: 24,
      unit: "GB",
    },
    price: 350000,
    monitor: {
      brand: "SAMSUNG",
      size: 21,
      unit: "inch",
    },
    mouse: "Razer Viper",
    keyboard: "Logitech prodigy",
  },
];
function creatwraper( primaryclass,primarytext,secondaryelements){
var primaryelement=document.createElement("span");
primaryelement.innertext=primarytext;
primaryelement.setAttribute("class",primaryclass)
secondaryelements.forEach(function (secondaryelementdata)
{
var secondaryelement=document.createElement("span");
secondaryelement.innertext=secondaryelementdata.text;
secondaryelement.setAttribute("class",secondaryelementdata.classname)
primaryelement.append(secondaryelement);
});
var wrapper=document.createElement("div");
wrapper.append(primaryelement)
return wrapper;
}
products.forEach(accessSpecs);

function accessSpecs(data) {
  var laptop= data;
  
secondarybrandelementarray=[
  {
  'classname':"brand",
  "text": laptop.brand
  }
]
secondarycpuelementarray=[
  {
  classname:"cpu",
  text: laptop.ram
  }
]
var brandwrapper=creatwraper("brand-id","brand",secondarybrandelementarray);
console.log(brandwrapper)
 var cpuwrapper=creatwraper("cpu-id","cpu",secondarycpuelementarray);
 console.log(cpuwrapper)
// var oswrapper=creatwraper("os-id","os","os-name",laptop.os);
// console.log(oswrapper)
 console.log("--------------");
}