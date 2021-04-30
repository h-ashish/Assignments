import _ from 'lodash';

export default function LodashExamples (){
    let words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];
    let fel = _.first(words);
    let lel = _.last(words);
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    let sol = _.nth(nums, 3)
    let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let c1 = _.chunk(nums1, 2);
    console.log(c1)
    let c2 = _.chunk(nums1, 3);
    console.log(c2)

    let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let a1 = _.slice(nums2, 2, 6);
    console.log(a1);

    let a2 = _.slice(nums2, 0, 8);
    console.log(a2);

    let r = _.random(0,10);
    console.log(r);

    let words1 = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];
    let word = _.sample(words1);
    console.log(word);

    let words2 = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];
    let b1 = _.shuffle(words2);
    let b2 = _.shuffle(words2);
    let b3 = _.shuffle(words2);
    console.log(b1);
    console.log(b2);
    console.log(b3);

    let res = _.times(4 , ()=>{
        console.log("brave")
    });
    
    function message()
    {
        console.log("Some message");
    }

    _.delay(message, 150);
    console.log("Some other message");

    let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }
});

    let vals1 = _.range(10);
    console.log(vals1);

    let vals2 = _.range(0, 15);
    console.log(vals2);

    let vals3 = _.range(0, 15, 5);
    console.log(vals3);


    let val = [-3, 4, 0, 12, 43, 9, -12];

    let min = _.min(val);
    console.log(min);

    let max = _.max(val);
    console.log(max);

    let num = [-2, 0, 3, 7, -5, 1, 2];

    let sum = _.sum(num);
    console.log(sum);
    let cols = [4, -5, 3, 2, -1, 7, -6, 8, 9];

    let pos_nums = _.filter(cols, (e) => e > 0);
    console.log(pos_nums);
    let users = [
        { name: 'John', age: 25 },
        { name: 'Lenny', age: 51 },
        { name: 'Andrew', age: 43 },
        { name: 'Peter', age: 81 },
        { name: 'Anna', age: 43 },
        { name: 'Albert', age: 76 },
        { name: 'Adam', age: 47 },
        { name: 'Robert', age: 72 }
      ];
      
      let u1 = _.find(users, {name: 'Adam'});
      console.log(u1);
      
      let u2 = _.find(users, (u) => { return u.age > 60 });
      console.log(u2);
      
      let u3 = _.findLast(users, (u) => { return u.age > 60 });
      console.log(u3);

      let pulls = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
    _.pull(pulls, 1, 2);
    console.log(pulls);

    let nu = [1, 2, 3, 4, 5, 6]

    let nu1 = _.take(nu);
    let nu2 = _.take(nu, 2);
    let nu3 = _.takeRight(nu, 3)
    
    console.log(nu1);
    console.log(nu2);
    console.log(nu3);
        return(
        <div>
            <h1>first_last</h1>
        <p>{fel}</p>
        <p>{lel}</p>
        <h1>_nth</h1>
        <p>{sol}</p>
        <h1>chunking</h1>
        <p>check result in console</p>
        <p>check result in console</p>
        <h1>_slice</h1>
        <p>{a1} - check in console too</p>
        <p>{a2} - check in console too</p>
        <h1>_random</h1>
        <p>{r} - check console or refresh for random value</p>
        <h1>_sample</h1>
        <p>{word} -  refresh to generate random word from array</p>
        <h1>_shuffle</h1>
        <p>{b1} - check console fpr shuffled array</p>
        <p>{b2} - check console fpr shuffled array</p>
        <p>{b3} - check console fpr shuffled array</p>
        <h1>_time</h1>
        <p>{res}- check console to see "brave" repeated 4 times</p>
        <h1>_delay</h1>
        <p>check result in console to check delayed function execution</p>
        <h1>_dataype</h1>
        <p>check console to check datatype of elements in a array</p>
        <h1>_range</h1>
        <p>{vals1}</p>
        <p>{vals2}</p>
        <p>{vals3}</p>
        <h1>_min and  _max</h1>
        <p>minimum value is {min}</p>
        <p>max value is {max}</p>
        <h1>_sum</h1>
        <p>{sum}</p>
        <h1>_collection</h1>
        <p>{pos_nums}</p>
        <h1>_collection find</h1>
        <p>check  find result in console</p>
        <p>check find result in console</p>
        <p>check find result in console</p>
        <h1>_pull</h1>
        <p>{pulls}</p>
        <h1>_take</h1>
        <p>{nu1} - check result in console</p>
        <p>{nu2} - check result in console</p>
        <p>{nu3} - check result in console</p>
        </div>
       
    )
}