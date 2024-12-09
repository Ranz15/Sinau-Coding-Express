const users = [
  {
    id: 0,
    name: "Daniels Padilla",
    age: 37,
    gender: "male",
    phone: "+1 (917) 547-2828",
    greeting: "Hello, Daniels Padilla! You have 10 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 1,
    name: "Violet Webb",
    age: 36,
    gender: "female",
    phone: "+1 (824) 551-2845",
    greeting: "Hello, Violet Webb! You have 4 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 2,
    name: "Riley Valenzuela",
    age: 36,
    gender: "male",
    phone: "+1 (884) 564-2565",
    greeting: "Hello, Riley Valenzuela! You have 7 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 3,
    name: "Robles Mcdonald",
    age: 31,
    gender: "male",
    phone: "+1 (986) 514-3377",
    greeting: "Hello, Robles Mcdonald! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 4,
    name: "Lesley White",
    age: 37,
    gender: "female",
    phone: "+1 (990) 451-3375",
    greeting: "Hello, Lesley White! You have 8 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 5,
    name: "Jones Hodge",
    age: 27,
    gender: "male",
    phone: "+1 (931) 438-3473",
    greeting: "Hello, Jones Hodge! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 6,
    name: "Marquita Nolan",
    age: 27,
    gender: "female",
    phone: "+1 (924) 472-2436",
    greeting: "Hello, Marquita Nolan! You have 7 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 7,
    name: "Evangeline Craig",
    age: 28,
    gender: "female",
    phone: "+1 (950) 501-2566",
    greeting: "Hello, Evangeline Craig! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 8,
    name: "Terri Hart",
    age: 25,
    gender: "female",
    phone: "+1 (980) 503-3741",
    greeting: "Hello, Terri Hart! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 9,
    name: "Buckner Carey",
    age: 36,
    gender: "male",
    phone: "+1 (925) 474-2368",
    greeting: "Hello, Buckner Carey! You have 7 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 10,
    name: "Barry Trujillo",
    age: 40,
    gender: "male",
    phone: "+1 (940) 513-2810",
    greeting: "Hello, Barry Trujillo! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 11,
    name: "Crawford Maldonado",
    age: 24,
    gender: "male",
    phone: "+1 (906) 562-3613",
    greeting: "Hello, Crawford Maldonado! You have 4 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 12,
    name: "Yvette Beach",
    age: 24,
    gender: "female",
    phone: "+1 (842) 542-3075",
    greeting: "Hello, Yvette Beach! You have 10 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 13,
    name: "Jackie Buchanan",
    age: 28,
    gender: "female",
    phone: "+1 (805) 458-2868",
    greeting: "Hello, Jackie Buchanan! You have 3 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 14,
    name: "Vasquez Christensen",
    age: 27,
    gender: "male",
    phone: "+1 (884) 508-3818",
    greeting: "Hello, Vasquez Christensen! You have 8 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 15,
    name: "Briggs Oneill",
    age: 28,
    gender: "male",
    phone: "+1 (907) 513-2126",
    greeting: "Hello, Briggs Oneill! You have 4 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 16,
    name: "Jeannine Tyler",
    age: 25,
    gender: "female",
    phone: "+1 (947) 572-3023",
    greeting: "Hello, Jeannine Tyler! You have 4 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 17,
    name: "Jannie Mcleod",
    age: 26,
    gender: "female",
    phone: "+1 (835) 445-2056",
    greeting: "Hello, Jannie Mcleod! You have 8 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 18,
    name: "Laverne Finley",
    age: 26,
    gender: "female",
    phone: "+1 (843) 545-3135",
    greeting: "Hello, Laverne Finley! You have 5 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 19,
    name: "Stuart Santos",
    age: 37,
    gender: "male",
    phone: "+1 (977) 555-3738",
    greeting: "Hello, Stuart Santos! You have 8 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 20,
    name: "Cardenas Ingram",
    age: 35,
    gender: "male",
    phone: "+1 (909) 568-2798",
    greeting: "Hello, Cardenas Ingram! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 21,
    name: "Maude Wooten",
    age: 35,
    gender: "female",
    phone: "+1 (913) 492-2783",
    greeting: "Hello, Maude Wooten! You have 4 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 22,
    name: "Nellie Cervantes",
    age: 31,
    gender: "female",
    phone: "+1 (975) 521-3583",
    greeting: "Hello, Nellie Cervantes! You have 4 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 23,
    name: "Kimberly Pitts",
    age: 27,
    gender: "female",
    phone: "+1 (986) 540-3142",
    greeting: "Hello, Kimberly Pitts! You have 10 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 24,
    name: "Ella Gardner",
    age: 26,
    gender: "female",
    phone: "+1 (992) 524-3219",
    greeting: "Hello, Ella Gardner! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 25,
    name: "Calderon Mccall",
    age: 22,
    gender: "male",
    phone: "+1 (969) 419-3777",
    greeting: "Hello, Calderon Mccall! You have 2 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 26,
    name: "Ingrid Michael",
    age: 28,
    gender: "female",
    phone: "+1 (814) 587-2648",
    greeting: "Hello, Ingrid Michael! You have 7 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 27,
    name: "Debra Jacobs",
    age: 23,
    gender: "female",
    phone: "+1 (876) 471-3981",
    greeting: "Hello, Debra Jacobs! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 28,
    name: "Sheree Kelly",
    age: 21,
    gender: "female",
    phone: "+1 (831) 542-2431",
    greeting: "Hello, Sheree Kelly! You have 7 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 29,
    name: "Hood Harding",
    age: 21,
    gender: "male",
    phone: "+1 (943) 476-2847",
    greeting: "Hello, Hood Harding! You have 2 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 30,
    name: "Joan Sexton",
    age: 35,
    gender: "female",
    phone: "+1 (806) 584-2989",
    greeting: "Hello, Joan Sexton! You have 1 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 31,
    name: "Kathy Chase",
    age: 29,
    gender: "female",
    phone: "+1 (836) 546-3303",
    greeting: "Hello, Kathy Chase! You have 4 unread messages.",
    favoriteFruit: "banana",
  },
  {
    id: 32,
    name: "Ruthie Mckenzie",
    age: 33,
    gender: "female",
    phone: "+1 (929) 427-2012",
    greeting: "Hello, Ruthie Mckenzie! You have 5 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 33,
    name: "Trina Wilkinson",
    age: 38,
    gender: "female",
    phone: "+1 (959) 427-3545",
    greeting: "Hello, Trina Wilkinson! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    id: 34,
    name: "Bell Vazquez",
    age: 27,
    gender: "male",
    phone: "+1 (953) 407-3208",
    greeting: "Hello, Bell Vazquez! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    id: 35,
    name: "Pace Casey",
    age: 21,
    gender: "male",
    phone: "+1 (845) 427-3052",
    greeting: "Hello, Pace Casey! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
];

module.exports = users;
