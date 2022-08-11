import {Hero} from "./hero";
import {Observable, of} from "rxjs";

const HEROES: Hero[] = [
  {
    "id": 1,
    "name": "Spider-Man",
    "img": "https://imgix.ranker.com/user_node_img/104/2075534/original/spider-man-character-comic-book-character-fictional-characters-film-character-tv-character-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 2,
    "name": "Doctor Strange",
    "img": "https://imgix.ranker.com/user_node_img/44/871345/original/doctor-strange-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 3,
    "name": "Thor",
    "img": "https://imgix.ranker.com/user_node_img/112/2239723/original/thor-comic-book-characters-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 4,
    "name": "Deadpool",
    "img": "https://imgix.ranker.com/user_node_img/42/830089/original/deadpool-comic-book-characters-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 5,
    "name": "Iron Man",
    "img": "https://imgix.ranker.com/user_node_img/62/1237308/original/iron-man-comic-book-characters-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 6,
    "name": "Wolverine",
    "img": "https://imgix.ranker.com/user_node_img/130/2596629/original/wolverine-comic-strips-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 7,
    "name": "Hulk",
    "img": "https://imgix.ranker.com/user_node_img/60/1188861/original/hulk-comic-book-characters-photo-u40?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 8,
    "name": "Captain America",
    "img": "https://imgix.ranker.com/user_node_img/34/669163/original/captain-america-comic-book-characters-photo-u6?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 9,
    "name": "Scarlet Witch",
    "img": "https://imgix.ranker.com/user_node_img/100/1985050/original/scarlet-witch-comic-book-characters-photo-u8?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 10,
    "name": "Black Panther",
    "img": "https://imgix.ranker.com/user_node_img/142/2820194/original/black-panther-u34?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 11,
    "name": "Groot",
    "img": "https://imgix.ranker.com/user_node_img/56/1106088/original/groot-u33?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 12,
    "name": "Black Widow",
    "img": "https://imgix.ranker.com/user_node_img/137/2725051/original/black-widow-comic-book-characters-photo-u9?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 13,
    "name": "Ant-Man (Scott Lang)",
    "img": "https://imgix.ranker.com/user_node_img/100/1990865/original/scott-lang-photo-u12?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 14,
    "name": "Rocket Raccoon",
    "img": "https://imgix.ranker.com/node_img/97/1926456/original/rocket-raccoon-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 15,
    "name": "Star-Lord",
    "img": "https://imgix.ranker.com/node_img/105/2085527/original/star-lord-fictional-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 16,
    "name": "Ghost Rider",
    "img": "https://imgix.ranker.com/node_img/54/1068210/original/ghost-rider-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 17,
    "name": "Silver Surfer",
    "img": "https://imgix.ranker.com/user_node_img/102/2031665/original/silver-surfer-comic-book-characters-photo-u6?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 18,
    "name": "Punisher",
    "img": "https://imgix.ranker.com/user_node_img/93/1851146/original/punisher-comic-book-characters-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 19,
    "name": "Spider-Man (Miles Morales)",
    "img": "https://imgix.ranker.com/user_node_img/3683/73651371/original/new-ultimate-spider-man-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 20,
    "name": "Phoenix",
    "img": "https://imgix.ranker.com/user_node_img/170/3382392/original/phoenix-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 21,
    "name": "Professor X",
    "img": "https://imgix.ranker.com/user_node_img/93/1840969/original/professor-x-comic-book-characters-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 22,
    "name": "Gambit",
    "img": "https://imgix.ranker.com/user_node_img/129/2573587/original/gambit-comic-book-characters-photo-u11?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 23,
    "name": "Nightcrawler",
    "img": "https://imgix.ranker.com/user_node_img/84/1679247/original/nightcrawler-comic-book-characters-photo-u11?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 24,
    "name": "Colossus",
    "img": "https://imgix.ranker.com/user_node_img/38/758424/original/colossus-comic-book-characters-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 25,
    "name": "Vision",
    "img": "https://imgix.ranker.com/user_node_img/118/2344305/original/vision-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 26,
    "name": "Daredevil",
    "img": "https://imgix.ranker.com/node_img/41/814930/original/daredevil-comic-strips-photo-2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 27,
    "name": "Ghost Rider",
    "img": "https://imgix.ranker.com/node_img/361/7216055/original/ghost-rider-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 28,
    "name": "Hawkeye",
    "img": "https://imgix.ranker.com/user_node_img/57/1138184/original/hawkeye-comic-book-characters-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 29,
    "name": "Bucky Barnes",
    "img": "https://imgix.ranker.com/user_node_img/32/639283/original/bucky-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 30,
    "name": "Storm",
    "img": "https://imgix.ranker.com/user_node_img/129/2573576/original/storm-comic-book-characters-photo-u13?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 31,
    "name": "Human Torch",
    "img": "https://imgix.ranker.com/node_img/60/1190542/original/human-torch-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 32,
    "name": "Blade",
    "img": "https://imgix.ranker.com/user_node_img/134/2665882/original/blade-photo-u17?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 33,
    "name": "Moon Knight",
    "img": "https://imgix.ranker.com/user_node_img/81/1613183/original/moon-knight-u10?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 34,
    "name": "Thing",
    "img": "https://imgix.ranker.com/node_img/112/2232647/original/thing-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 35,
    "name": "Cable",
    "img": "https://imgix.ranker.com/user_node_img/135/2693063/original/cable-comic-book-characters-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 36,
    "name": "Nick Fury",
    "img": "https://imgix.ranker.com/user_node_img/84/1676112/original/nick-fury-comic-book-characters-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 37,
    "name": "Ms. Marvel",
    "img": "https://imgix.ranker.com/user_node_img/34/677637/original/carol-danvers-photo-u47?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 38,
    "name": "Odin",
    "img": "https://imgix.ranker.com/user_node_img/140/2796159/original/odin-comic-book-character-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 39,
    "name": "Nova (Richard Rider)",
    "img": "https://imgix.ranker.com/node_img/139/2765644/original/nova-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 40,
    "name": "Human Torch",
    "img": "https://imgix.ranker.com/user_node_img/130/2588573/original/human-torch-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 41,
    "name": "War Machine",
    "img": "https://imgix.ranker.com/user_node_img/119/2361747/original/war-machine-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 42,
    "name": "Quicksilver",
    "img": "https://imgix.ranker.com/user_node_img/93/1859872/original/quicksilver-u13?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 43,
    "name": "Drax the Destroyer",
    "img": "https://imgix.ranker.com/node_img/45/888137/original/drax-the-destroyer-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 44,
    "name": "Gamora",
    "img": "https://imgix.ranker.com/node_img/53/1042329/original/gamora-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 45,
    "name": "Captain Marvel",
    "img": "https://imgix.ranker.com/node_img/552/11036475/original/captain-marvel-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 46,
    "name": "Iceman",
    "img": "https://imgix.ranker.com/user_node_img/61/1206245/original/iceman-comic-book-characters-photo-u8?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 47,
    "name": "Wasp",
    "img": "https://imgix.ranker.com/user_node_img/133/2643486/original/wasp-photo-u10?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 48,
    "name": "Beast",
    "img": "https://imgix.ranker.com/user_node_img/28/557448/original/beast-comic-book-characters-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 49,
    "name": "Sam Wilson (Falcon)",
    "img": "https://imgix.ranker.com/user_node_img/146/2902506/original/falcon-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 50,
    "name": "Spider-Gwen",
    "img": "https://imgix.ranker.com/user_node_img/56/1115306/original/gwen-stacy-u15?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 51,
    "name": "Valkyrie",
    "img": "https://imgix.ranker.com/user_node_img/169/3360971/original/valkyrie-comic-book-characters-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 52,
    "name": "Heimdall",
    "img": "https://imgix.ranker.com/node_img/157/3139843/original/heimdall-film-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 53,
    "name": "X-23",
    "img": "https://imgix.ranker.com/user_node_img/121/2418092/original/x-23-comic-book-characters-photo-u9?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 54,
    "name": "Psylocke",
    "img": "https://imgix.ranker.com/user_node_img/93/1848072/original/psylocke-comic-book-characters-photo-u11?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 55,
    "name": "Cyclops",
    "img": "https://imgix.ranker.com/user_node_img/125/2488499/original/cyclops-comic-book-characters-photo-u17?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 56,
    "name": "Spider-Man 2099",
    "img": "https://imgix.ranker.com/user_node_img/104/2075536/original/spider-man-2099-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 57,
    "name": "Yondu",
    "img": "https://imgix.ranker.com/user_node_img/122/2428996/original/yondu-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 58,
    "name": "She-Hulk",
    "img": "https://imgix.ranker.com/user_node_img/101/2015664/original/she-hulk-airplanes-photo-u15?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 59,
    "name": "Archangel",
    "img": "https://imgix.ranker.com/node_img/130/2596919/original/archangel-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 60,
    "name": "Invisible Woman",
    "img": "https://imgix.ranker.com/user_node_img/62/1231622/original/invisible-woman-comic-book-characters-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 61,
    "name": "Ant-Man (Henry Pym)",
    "img": "https://imgix.ranker.com/user_node_img/58/1152079/original/henry-pym-airplanes-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 62,
    "name": "Mister Fantastic",
    "img": "https://imgix.ranker.com/node_img/80/1598901/original/mister-fantastic-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 63,
    "name": "Black Panther (Shuri)",
    "img": "https://imgix.ranker.com/user_node_img/50085/1001683402/original/black-panther-_shuri_-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 64,
    "name": "Luke Cage",
    "img": "https://imgix.ranker.com/user_node_img/75/1486348/original/luke-cage-comic-book-characters-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 65,
    "name": "Iron Fist",
    "img": "https://imgix.ranker.com/user_node_img/62/1237219/original/iron-fist-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 66,
    "name": "Adam Warlock",
    "img": "https://imgix.ranker.com/node_img/21/400188/original/adam-warlock-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 67,
    "name": "Ronin",
    "img": "https://imgix.ranker.com/user_node_img/352/7037936/original/ronin-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 68,
    "name": "Black Bolt",
    "img": "https://imgix.ranker.com/node_img/30/592701/original/black-bolt-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 69,
    "name": "Rogue",
    "img": "https://imgix.ranker.com/user_node_img/97/1930970/original/rogue-comic-book-series-photo-u6?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 70,
    "name": "Domino",
    "img": "https://imgix.ranker.com/node_img/44/874570/original/domino-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 71,
    "name": "Spider-Woman (Jessica Drew)",
    "img": "https://imgix.ranker.com/user_node_img/104/2075689/original/spider-woman-comic-book-characters-photo-u8?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 72,
    "name": "Elektra",
    "img": "https://imgix.ranker.com/user_node_img/47/925391/original/elektra-natchios-comic-book-characters-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 73,
    "name": "Beta Ray Bill",
    "img": "https://imgix.ranker.com/node_img/29/575051/original/beta-ray-bill-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 74,
    "name": "Nebula",
    "img": "https://imgix.ranker.com/user_node_img/191/3818993/original/nebula-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 75,
    "name": "Ms. Marvel",
    "img": "https://imgix.ranker.com/user_node_img/3838/76754033/original/ms-marvel-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 76,
    "name": "Red Hulk",
    "img": "https://imgix.ranker.com/node_img/568/11350039/original/red-hulk-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 77,
    "name": "Captain Marvel (Mar-Vell)",
    "img": "https://imgix.ranker.com/user_node_img/76/1514044/original/mar-vell-photo-u9?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 78,
    "name": "Korg",
    "img": "https://imgix.ranker.com/node_img/186/3712898/original/korg-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 79,
    "name": "Mantis",
    "img": "https://imgix.ranker.com/user_node_img/165/3280040/original/mantis-photo-u13?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 80,
    "name": "Scarlet Spider",
    "img": "https://imgix.ranker.com/user_node_img/100/1985038/original/scarlet-spider-comic-book-characters-photo-u3?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 81,
    "name": "Phil Coulson",
    "img": "https://imgix.ranker.com/user_node_img/50064/1001268283/original/phil-coulson-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 82,
    "name": "Kitty Pryde",
    "img": "https://imgix.ranker.com/user_node_img/70/1381961/original/kitty-pryde-comic-book-characters-photo-u10?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 83,
    "name": "Howard the Duck",
    "img": "https://imgix.ranker.com/node_img/60/1184170/original/howard-the-duck-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 84,
    "name": "Cloak and Dagger",
    "img": "https://imgix.ranker.com/user_node_img/38/747776/original/cloak-and-dagger-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 85,
    "name": "Havok",
    "img": "https://imgix.ranker.com/user_node_img/57/1137758/original/havok-u12?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 86,
    "name": "Jessica Jones",
    "img": "https://imgix.ranker.com/user_node_img/65/1285756/original/jessica-jones-comic-book-characters-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 87,
    "name": "Hercules",
    "img": "https://imgix.ranker.com/node_img/180/3592698/original/hercules-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 88,
    "name": "Angel",
    "img": "https://imgix.ranker.com/user_node_img/159/3179692/original/angel-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 89,
    "name": "Prince Narmor",
    "img": "https://imgix.ranker.com/user_node_img/83/1644612/original/namor-the-sub-mariner-u16?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 90,
    "name": "Thor (Jane Foster)",
    "img": "https://imgix.ranker.com/user_node_img/113/2240325/original/thor-girl-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 91,
    "name": "Peggy Carter",
    "img": "https://imgix.ranker.com/user_node_img/4130/82590918/original/82590918-photo-u34?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 92,
    "name": "Bishop",
    "img": "https://imgix.ranker.com/node_img/129/2573590/original/bishop-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 93,
    "name": "Hawkeye (Kate Bishop)",
    "img": "https://imgix.ranker.com/user_node_img/159/3173713/original/hawkeye-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 94,
    "name": "Gwenpool",
    "img": "https://imgix.ranker.com/user_node_img/50064/1001267931/original/gwenpool-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 95,
    "name": "Sentry",
    "img": "https://imgix.ranker.com/node_img/101/2002949/original/sentry-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 96,
    "name": "Sif",
    "img": "https://imgix.ranker.com/node_img/169/3361736/original/sif-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 97,
    "name": "Magik",
    "img": "https://imgix.ranker.com/node_img/75/1498971/original/magik-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 98,
    "name": "Captain Universe",
    "img": "https://imgix.ranker.com/user_node_img/34/669771/original/captain-universe-comic-book-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 99,
    "name": "Red Guardian",
    "img": "https://imgix.ranker.com/node_img/95/1884665/original/red-guardian-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  },
  {
    "id": 100,
    "name": "Spider-Girl",
    "img": "https://imgix.ranker.com/node_img/104/2075532/original/spider-girl-comic-book-characters-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=150&w=150"
  }
]

export class HeroesDataMock {
  heroes: Hero[] = HEROES

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes)
  }

  updateHeroes(hero: Hero) {
    this.heroes.splice(this.heroes.findIndex((item) => item.id === hero.id), 1)
    this.heroes.push({id: hero.id, name: hero.name, img: hero.img})
    this.heroes.sort((a, b) => a.id - b.id)
  }
}
