
const cookie = (begin, middle, end ) => {

  return {
    this._begin : [],
    this._middle : [ ],
    this._end : [ ],
    this._message : message,

    get begin (){
      return this._begin;
    },
     get middle(){
      return this._middle;
    },

    get end(){
      return this._end;
      },

    set begin(arr){
      this._begin = arr;
    },

    set middle(arr){
      this._middle = arr;
    },

    set end(arr){
      this._end = arr;
    },

      begin = [
              ['The fortune you seek', 'A closed mouth', 'A conclusion'],
              ['A foolish man', 'A wise man listens to', 'Hearing your Neighbor having loud sex' ],
              ['Iphone dick pics', 'The Shaft', 'Cultural appropriation']
              ],

    middle = [
          ['Pussy Wagon', 'Hitler\'s new haircut','Betting all your money on Cedrick Diggory to Win the Triwizard Tournament'],
          ['The Goblet of Fire', 'Making Date rape in Potions class','Peter Pettigrews Penis' ],
          ['The Weasley\'s entire Net Worth' , 'Pretending not to Notice They changed Dumbledore in the 3rd movie', 'A ThreeSome With The Weasley Twins']
           ],

         end = [
           ['An unsolicited dick pic from Harry Potter', 'Racist comments that Don Cherry Makes Nazis Pearl Harbor', 'Joe Biden'],
           ['Why does my dick burn?', 'In Mexico, you can do __________ while you are __________.', 'After masturbating I like to do __________.'] ,
           ['Trump will solve all of Americas problems by __,', 'Trump will solve all of Americas problems by __,', 'Trump will solve all of Americas problems by __,' ]
         ],

        const message = (begin, middle, end) => {
           let messageBegin = randomizer(this.begin);
           let messageMiddle = randomizer(this.middle);
           let messageEnd = randomizer(this.end);

            return messageBegin + messageMiddle + messageEnd;
         }
      }




     var randomizer = (arr) => {
       let random = Math.floor(Math.random() * (arr.length - 1));
       let randmIndex1= random;
       let randomIndex2 = random;
       return arr[randmIndex1][randomIndex2];

       }
