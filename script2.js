console.log("Yoohoo");

const companies= [
    {
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  //Use map to produce a new company array with company objects with only 'name' and 'category'

  let newCompanyArray = companies.map((currentElement) =>{
     return (
         {
             name: currentElement.name,
             category: currentElement.category
         }
     )
    
    
  });

//log the new array
newCompanyArray.map((el) =>{
    console.log(el);
})

//Use map to generate a new array of ages 21 or more. Print new array
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let newAgesArray = ages.map((currentElement) =>
{
    return (currentElement >=21 ? true: false);
}
)

newAgesArray.forEach((newElement) =>
{
    console.log(newElement);
}
);
  
//OR

function processElement(currentElement)
{
    return (currentElement>=21 ? `${currentElement} is greater or equal to 21`:`${currentElement}`);
}

//map the array and get a new array 21 and older
let anotherNewAgesArray = ages.map(processElement);
//Use map again to print
anotherNewAgesArray.forEach(
    (crap) => {
        console.log(crap);
    }
)