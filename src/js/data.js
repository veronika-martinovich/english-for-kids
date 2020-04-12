const categories = [
  { title: "Actions (part 1)", iconTitle: "actions_1" },
  { title: "Actions (part 2)", iconTitle: "actions_2" },
  { title: "Animals (part 1)", iconTitle: "animals_1" },
  { title: "Animals (part 2)", iconTitle: "animals_2" },
  { title: "Clothes", iconTitle: "clothes" },
  { title: "Emotions", iconTitle: "emotions" }
];

const words = [
  [
    {
      word: "cry",
      translation: "плакать",
      image: "img/cry.jpg",
      audio: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "танцевать",
      image: "img/dance.jpg",
      audio: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "нырять",
      image: "img/dive.jpg",
      audio: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "рисовать",
      image: "img/draw.jpg",
      audio: "audio/draw.mp3",
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      image: "img/fish.jpg",
      audio: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      image: "img/fly.jpg",
      audio: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      image: "img/hug.jpg",
      audio: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      image: "img/jump.jpg",
      audio: "audio/jump.mp3",
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      image: "img/open.jpg",
      audio: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "играть",
      image: "img/play.jpg",
      audio: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "указывать",
      image: "img/point.jpg",
      audio: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ездить",
      image: "img/ride.jpg",
      audio: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      image: "img/run.jpg",
      audio: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      image: "img/sing.jpg",
      audio: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "пропускать, прыгать",
      image: "img/skip.jpg",
      audio: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      image: "img/swim.jpg",
      audio: "audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: "img/cat.jpg",
      audio: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "цыплёнок",
      image: "img/chick.jpg",
      audio: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      image: "img/chicken.jpg",
      audio: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      image: "img/dog.jpg",
      audio: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      image: "img/horse.jpg",
      audio: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "свинья",
      image: "img/pig.jpg",
      audio: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "кролик",
      image: "img/rabbit.jpg",
      audio: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "овца",
      image: "img/sheep.jpg",
      audio: "audio/sheep.mp3",
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      image: "img/bird.jpg",
      audio: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "рыба",
      image: "img/fish1.jpg",
      audio: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "жаба",
      image: "img/frog.jpg",
      audio: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "жирафа",
      image: "img/giraffe.jpg",
      audio: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      image: "img/lion.jpg",
      audio: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "мышь",
      image: "img/mouse.jpg",
      audio: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "черепаха",
      image: "img/turtle.jpg",
      audio: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: "img/dolphin.jpg",
      audio: "audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      image: "img/skirt.jpg",
      audio: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      image: "img/pants.jpg",
      audio: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      image: "img/blouse.jpg",
      audio: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      image: "img/dress.jpg",
      audio: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      image: "img/boot.jpg",
      audio: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: "img/shirt.jpg",
      audio: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      image: "img/coat.jpg",
      audio: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      image: "img/shoe.jpg",
      audio: "audio/shoe.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: "img/sad.jpg",
      audio: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "img/angry.jpg",
      audio: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "img/happy.jpg",
      audio: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "img/tired.jpg",
      audio: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "img/surprised.jpg",
      audio: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "img/scared.jpg",
      audio: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "img/smile.jpg",
      audio: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      image: "img/laugh.jpg",
      audio: "audio/laugh.mp3",
    },
  ],
];

export { categories, words };
