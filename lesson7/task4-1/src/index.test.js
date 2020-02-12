const users = [
  {
    age:21,
    name:'Bob',
    id: 'id-0',
  },
  {
    age:17,
    name:'Tom',
    id: 'id-1',
  },
  {
    age:18,
    name:'Tom',
    id: 'id-2',
  },
  {
    age:45,
    name:'Sam',
    id: 'id-3',
  },
  {
      age:40,
      name:'Samuel',
      id: 'id-4',
  },
  {
      age:25,
      name:'Dan',
      id: 'id-5',
    },
    {
      age:50,
      name:'Daniel',
      id: 'id-6',
    },
    {
      age:35,
      name:'Forest',
      id: 'id-7',
    },
    // {
    //   age:30,
    //   name:'Shon',
    //   id: 'id-8',
    // },
];

function getSubarray(pos, array){
  let subArray;
  if(pos > array.length){
    const numOfThreeSubArrs = Math.trunc(array.length/3); 
    const restNumber = array.length - (numOfThreeSubArrs * 3);
    return array.slice(0, pos).slice(-restNumber);
  }
  const arr = array.slice(0, pos);
  if(arr.length < array.length){
    subArray = arr.slice(-3);
  }else{
    const difference = Math.abs(array.length - arr.length);
    subArray = arr.slice(-difference);
  }
  return subArray;
}

it ('should find last page', () => {
  const result = getSubarray(3, users);  
  const arr = [
    {
      age:21,
      name:'Bob',
      id: 'id-0',
    },
    {
      age:17,
      name:'Tom',
      id: 'id-1',
    },
    {
      age:18,
      name:'Tom',
      id: 'id-2',
    },
  ];
  expect(result).toEqual(arr);
});

it ('should find last page', () => {
  const result = getSubarray(6, users);  
  const arr = [
    {
      age:45,
      name:'Sam',
      id: 'id-3',
    },
    {
        age:40,
        name:'Samuel',
        id: 'id-4',
    },
    {
        age:25,
        name:'Dan',
        id: 'id-5',
      },
  ];
  expect(result).toEqual(arr);
});

it ('should find last page', () => {
  const result = getSubarray(9, users);  
  const arr = [
    {
      age:50,
      name:'Daniel',
      id: 'id-6',
    },
    {
      age:35,
      name:'Forest',
      id: 'id-7',
    },
  ];
  expect(result).toEqual(arr);
});