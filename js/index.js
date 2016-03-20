var sonidos = ['retard', 'bazinga-ringtone', 'cigala', 'gay', 'march', 'duelo', 'marvel', 'huni', 'legendary', 'listen', 'hey', 'isengard', 'trololo', 'lux', 'draven', 'nigga', 'gtasa', '3knock', 'tunak', "1up", "coin", "mushroom","fire", "nyan"]
var lista = {}

for (i = 0; i < sonidos.length; i++) {
  lista[sonidos[i]] = new Audio('https://raw.githubusercontent.com/Losnen/proyecto-js/gh-pages/mp3/' + sonidos[i] + '.mp3')
}

function play(key) {

  lista[key].currentTime = 0
  lista[key].play()
}

function pausa(key) {
  lista[key].pause()
  lista[key].currentTime = 0
}

function troll() {
  for (i = 0; i < lista.length; i++) {
    lista[i].play();
  }
}