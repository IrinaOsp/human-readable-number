module.exports = function toReadable (number) {
    if (number === 0) {return 'zero'};
    if (number === 100) {return 'one hundred'};
    if (number === 1000) {return 'one thousand'};
    if (number === 10000) {return 'ten thousand'};
    if (number === 100000) {return 'one hundred thousand'}; 
    if (number === 1000000) {return 'one million'}; 
    if (number === 1000000000) {return 'one billion'}; 
    let oneSign = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromOnetoNighteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let twoSign = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number<=19) {return fromOnetoNighteen[number]}
    let str = number.toString();
    let lastTwoNumbers = Number(`${str[str.length-2]}${str[str.length-1]}`);
      
    if (number<=99) {return `${twoSign[str[0]]}${' '}${oneSign[str[1]]}`}
    
    if (number<=999 && lastTwoNumbers>19) {return `${oneSign[str[0]]}${' '}${'hundred'}${' '}${twoSign[str[1]]}${' '}${oneSign[str[2]]}`} 
    if(number<=999 && lastTwoNumbers<=19) {return `${oneSign[str[0]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`} 
    
    if (number<=9999 && lastTwoNumbers>19) {return `${oneSign[str[0]]}${' '}${'thousand'}${' '}${oneSign[str[1]]}${' '}${'hundred'}${' '}${twoSign[str[2]]}${' '}${oneSign[str[3]]}`} 
    if (number<=9999 && lastTwoNumbers<=19) {return `${oneSign[str[0]]}${' '}${'thousand'}${' '}${oneSign[str[1]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`} 
    
    if (number<=99999 && lastTwoNumbers>19) {return `${twoSign[str[0]]}${' '}${oneSign[str[1]]}${' '}${'thousand'}${' '}${oneSign[str[2]]}${' '}${'hundred'}${' '}${twoSign[str[3]]}${' '}${oneSign[str[4]]}`}
    if (number<=99999 && lastTwoNumbers<=19) {return `${twoSign[str[0]]}${' '}${oneSign[str[1]]}${' '}${'thousand'}${' '}${oneSign[str[2]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`}
    
    if (number<=999999 && lastTwoNumbers>19) {return `${oneSign[str[0]]}${' '}${'hundred'}${' '}${twoSign[str[1]]}${' '}${oneSign[str[2]]}${' '}${'thousand'}${' '}${oneSign[str[3]]}${' '}${'hundred'}${' '}${twoSign[str[4]]}${' '}${oneSign[str[5]]}`}
    if (number<=999999 && lastTwoNumbers<=19) {return `${oneSign[str[0]]}${' '}${'hundred'}${' '}${twoSign[str[1]]}${' '}${oneSign[str[2]]}${' '}${'thousand'}${' '}${oneSign[str[3]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`}
    
    if (number<=9999999 && lastTwoNumbers>19) {return `${oneSign[str[0]]}${' '}${'million'}${' '}${oneSign[str[1]]}${' '}${'hundred'}${' '}${twoSign[str[2]]}${' '}${oneSign[str[3]]}${' '}${'thousand'}${' '}${oneSign[str[4]]}${' '}${'hundred'}${' '}${twoSign[str[5]]}${' '}${oneSign[str[6]]}`}
    if (number<=9999999 && lastTwoNumbers<=19) {return `${oneSign[str[0]]}${' '}${'million'}${' '}${oneSign[str[1]]}${' '}${'hundred'}${' '}${twoSign[str[2]]}${' '}${oneSign[str[3]]}${' '}${'thousand'}${' '}${oneSign[str[4]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`}
    
    if (number<=99999999 && lastTwoNumbers>19) {return `${twoSign[str[0]]}${' '}${oneSign[str[1]]}${' '}${'million'}${' '}${oneSign[str[2]]}${' '}${'hundred'}${' '}${twoSign[str[3]]}${' '}${oneSign[str[4]]}${' '}${'thousand'}${' '}${oneSign[str[5]]}${' '}${'hundred'}${' '}${twoSign[str[6]]}${' '}${oneSign[str[7]]}`}
    if (number<=99999999 && lastTwoNumbers<=19) {return `${twoSign[str[0]]}${' '}${oneSign[str[1]]}${' '}${'million'}${' '}${oneSign[str[2]]}${' '}${'hundred'}${' '}${twoSign[str[3]]}${' '}${oneSign[str[4]]}${' '}${'thousand'}${' '}${oneSign[str[5]]}${' '}${'hundred'}${' '}${fromOnetoNighteen[lastTwoNumbers]}`} 
}
