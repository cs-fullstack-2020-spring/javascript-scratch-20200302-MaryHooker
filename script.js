console.log("Yoohoo Worldoo");

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

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach

  //using an arrow function instead of straight up calling a function "function"
  doStuff = (currentElement,currentIndex,originalArray) =>
  {
    console.log(`Current Element: ${currentElement}`);
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Array: ${originalArray}`);
  }

  //iterate each element
  ages.forEach(doStuff);
  //anoymous function
  ages.forEach(function(currentElement)
  {
      console.log(currentElement);
  })

  //arrow function
  ages.forEach((currentElement) =>
  {
    console.log(currentElement);
  })

  //MAP
  let newArray=ages.map((currentElement) =>
  {
      let newElement;

      if(currentElement >=18)
      {
          newElement=`You are not old enough to vote at ${currentElement}`;
    }
    else{
        newElement=`You are not old enough to vote at ${currentElement}`;
    }
    return newElement;
  })

  //print out new array
  newArray.forEach((newElement) =>{
      console.log(newElement);
  }
  )

  //use FILTER to list ages 18 or over
  const brandNewArray = ages.filter((el) => {
    return (el >=18 ? true: false);
  }
  );

  //print out new array
  brandNewArray.forEach((newEl) =>{
      console.log(newEl);
  });

  
