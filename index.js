const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


function findWin(item){
    return item.result === 'W'
}

  function superbowlWin(record){
      if (record.find(findWin)){
          return record.find(findWin).year;
      } 
  }

  superbowlWin(record);