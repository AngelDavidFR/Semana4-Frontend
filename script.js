//#region Constantes
const pokename1 = document.querySelector('#searchPoke');
const buttonSearch = document.getElementById('search2');
const button1 = document.getElementById('b1');
const button2 = document.getElementById('b2');
const button3 = document.getElementById('b3');
const button5 = document.getElementById('b5');
const button4 = document.getElementById('b4');
const evoRight = document.getElementById('b12');
const evoLeft = document.getElementById('b11');
const pokeback = document.getElementById('back1');
const contentinfo1 = document.querySelector(".contentInfo");
const power1 = document.getElementById('Power');
const caratula1 = document.querySelector(".caratulaContenedor");
const style1 = document.documentElement.style
//#endregion
//#region Variables y arreglos
var pokedatos;
var band1 = false,
	band2 = false;
var urlEvoimg1 = "";
var nameEvoimg1 = ""
var urlEvoimg2 = [];
var nameEvoimg2 = [];
var urlEvoimg3 = [[],[]];
var nameEvoimg3 = [[],[]];
var lThird = [],lSecond = 0,lThird2 = [];
var desc2 = "";
var nickName2 = "";
var evoPosi = 0;
var habiName = "";


const typecolores = {
	bug: {
		color1: '#1A4E26',
		color2: '#3EA052'
	},
	dark: {
		color1: '#020506',
		color2: '#4A4A62'
	},
	dragon: {
		color1: '#459298',
		color2: '#5DD5E2'
	},
	electric: {
		color1: '#EBF225',
		color2: '#FAFF70'
	},
	fairy: {
		color1: '#A11643',
		color2: '#F41368'
	},
	fighting: {
		color1: '#A43E28',
		color2: '#F96637;'
	},
	fire: {
		color1: '#B51D20',
		color2: '#FF4B5C'
	},
	flying: {
		color1: '#4C6B84',
		color2: '#99BAD0'
	},
	ghost: {
		color1: '#35326A',
		color2: '#946897'
	},
	grass: {
		color1: '#12843F',
		color2: '#23D74D'
	},
	ground: {
		color1: '#AF722D',
		color2: '#6F4D21'
	},
	ice: {
		color1: '#84D9FD',
		color2: '#CCF8FE'
	},
	normal: {
		color1: '#76585E',
		color2: '#D39FAD'
	},
	poison: {
		color1: '#62298B',
		color2: '#A169E1'
	},
	psychic: {
		color1: '#A62E6A',
		color2: '#FC1A91'
	},
	rock: {
		color1: '#4C190C',
		color2: '#933D20'
	},
	steel: {
		color1: '#617C72',
		color2: '#35CE9A'
	},
	water: {
		color1: '#0F54EC',
		color2: '#82A9FD'
	},
	default: 'black'
}
//#endregion
//#region Eventos

power1.addEventListener('click', () => {
	try {
		
		powes = new Audio("./assets/sounds/s1.mp3");
		powes.play();
		speechSynthesis.cancel();
		if (band1 == false) {
			band1 = true;
			start1();
		} else {
			band1 = false;
			innerall();
		}
	} catch (error) {
		console.log(error)
	}




});

contentinfo1.addEventListener('click', e => {

	try {

		if (band1 == true) {
			bsAction(e);
		}
		e.stopPropagation
	} catch (error) {
		console.log(error)
	}




})
button1.addEventListener('click', () => {

	try {
		b1 = new Audio("./assets/sounds/s2.mp3");
		b1.volume = 0.1;
		b1.play();
		speechSynthesis.cancel();
		if (band1 == true) {
			band2 = false;
			style1.setProperty('--fcolor', 'black');
			se1();
		}
	} catch (error) {
		console.log(error)
	}




})
button2.addEventListener('click', () => {
	try {
		b2 = new Audio("./assets/sounds/s2.mp3");
		b2.volume = 0.1;
		b2.play();

		speechSynthesis.cancel();
		if (band1 == true) {
			band2 = false;
			style1.setProperty('--fcolor', 'black');
			info1();
		}
	} catch (error) {
		console.log(error)
	}





})
button3.addEventListener('click', () => {
	try {
		b3 = new Audio("./assets/sounds/s2.mp3");
		b3.volume = 0.1;
		b3.play();
		speechSynthesis.cancel();
		if (band1 == true) {
			band2 = false;
			style1.setProperty('--fcolor', 'black');
			stats1();
			graph1();
		}
	} catch (error) {
		console.log(error)
	}



})

button4.addEventListener('click', () => {
	try {
		b4 = new Audio("./assets/sounds/s2.mp3");
		b4.volume = 0.1;
		b4.play();
		speechSynthesis.cancel();
		band2 = true;
		if (band2 == true) {
			if (band1 == true) {
				evoimg1();
				style1.setProperty('--fcolor', 'blue');
			}
		}

	} catch (error) {
		console.log(error);
	}


});

button5.addEventListener('click', () => {
	try {
		b5 = new Audio("./assets/sounds/s2.mp3");
		b5.volume = 0.1;
		b5.play();
		band2 = false;
		style1.setProperty('--fcolor', 'black');
		ponerDescripcion1(desc2, nickName2);
	} catch (error) {
		console.log(error)
	}
});
evoLeft.addEventListener('click', () => {
	try {
		b6 = new Audio("./assets/sounds/s2.mp3");
		b6.volume = 0.1;
		b6.play();
		if (band2 == true) {
			if (evoPosi !== 0) {
				evoPosi -= 1;
				paintevo();
			}
		}
	} catch (error) {
		console.log(error)
	}

})

evoRight.addEventListener('click', () => {

	try {
		b7 = new Audio("./assets/sounds/s2.mp3");
		b7.volume = 0.1;
		b7.play();
		if (band2 == true) {
			let tamaño3 = lThird.length;
			let tamaño2 = lSecond;
			let evototal = 0;

			if (tamaño2 !== 0) {
				if (tamaño3 !== 0) {
					evototal = 2;
				} else {
					evototal = 1;
				}
			} else {
				evototal = 0;
			}
			if (evoPosi !== evototal) {
				evoPosi += 1;
				paintevo()
			} else {
				console.log("No hay mas evoluciones")
			}

		}
	} catch (error) {
		console.log(error)
	}



})

const bsAction = e => {
	let pokename3 = document.querySelector('#searchPoke');
	if (e.target.classList.contains("buscar1")) {

		pokemon2 = pokename3.value.toLowerCase();

		fetchData(pokemon2);
	}

	e.stopPropagation();

}
//#endregion
//#region Inicialización
const start1 = () => {
	let flex = caratula1;
	let template = document.getElementById("tem4").content;
	let clone = template.cloneNode(true);
	let fragment = document.createDocumentFragment();
	flex.innerHTML = '';

	fragment.appendChild(clone);
	flex.appendChild(fragment)
}

const innerall = () => {
	contentinfo1.innerHTML = "";
	caratula1.innerHTML = "";
	style1.setProperty('--colorbg', "rgb(138, 138, 138)");
	style1.setProperty('--colora', "rgb(0, 0, 0)");
	style1.setProperty('--colorb', "rgb(255, 0, 0)");
	style1.setProperty('--id', "");

}




//#endregion 
//#region Primer fetch:Datos del Pokemon
const fetchData = async (id) => {
	try {


		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await res.json();


		const pokemon = {

			imgJuego: data.sprites.front_default,
			imgSVG: data.sprites.other.dream_world.front_default,
			nombre: data.name,
			pokeid: data.id,
			hp: data.stats[0].base_stat,
			ataque: data.stats[1].base_stat,
			defensa: data.stats[2].base_stat,
			especialA: data.stats[3].base_stat,
			especialD: data.stats[4].base_stat,
			vel: data.stats[5].base_stat,
			tipo: data.types,
			habilidades: data.abilities.length,
			experiencia: data.base_experience,
			altura: data.height,
			peso: data.weight

		};
		pokedatos = pokemon;

		let speUrl = data.species.url;
		fetchSpecies(speUrl);

		pokemonimg(pokemon);
	} catch (error) {
		console.log(error);
	}
};
//#endregion
//#region Datos Pokemon :habitat y evoluciones
const fetchSpecies = async (specieUrl) => {
	try {
		const res = await fetch(specieUrl);
		const data = await res.json();
		let descripcion1 = data.flavor_text_entries;
		let Pokedescripcion = "";
		let pokenick = data.genera;
		let nickName = "";
		let habitat = data.habitat;
		let habitatUrl = "";
		let evolutionUrl = data.evolution_chain.url;
		let i = 0,
			j = 0;
		let des1 = "",
			nick = "";




		// Habitat
		if (habitat !== null) {
			habitatUrl = habitat.url;
			buscarHabitat(habitatUrl);
		} else {
			console.log("Habitat desconocido")
		}
		// Descripción
		while (des1 != "es") {

			des1 = descripcion1[i].language.name;
			i++;
		}
		Pokedescripcion = descripcion1[i - 1].flavor_text;
		// Sobrenombre
		while (nick != "es") {

			nick = pokenick[j].language.name;
			j++;
		}
		nickName = pokenick[j - 1].genus;
		desc2 = Pokedescripcion;
		nickName2 = nickName;

		ponerDescripcion1(desc2, nickName2);


		// Evoluciones

		buscarEvoluciones(evolutionUrl);

	} catch (error) {
		console.log(error);
	}


}
//#endregion
//#region Buscar Habitat
const buscarHabitat = async (habitat1) => {

	try {
		const res = await fetch(habitat1);
		const data = await res.json();
		let i = 0;
		let hab1 = "";
		let habName = "",
			habName2 = "";

		while (hab1 != "es") {

			hab1 = data.names[i].language.name;
			i++;
		}
		habName = data.names[i - 1].name;
		habName2 = habName.charAt(0).toUpperCase() + habName.slice(1);
		habiName = habName2;
	} catch (error) {
		console.log(error);
	}
}
//#endregion
//#region  Buscar Evoluciones
const buscarEvoluciones = async (evoluciones) => {

	try {
		const res = await fetch(evoluciones);
		const data = await res.json();
		let rfetch = "https://pokeapi.co/api/v2/pokemon/"
		let pokeprim = data.chain.species.name;
		let pokeprimUrl = "";
		let pokesecond = [];
		let pokesecondUrl = [];
		let pokethird = [];
		let pokethirdUrl = [[],[]];
		let pokethirdlen;
		lThird = [], lSecond = 0;
		urlEvoimg1 = "";
		urlEvoimg2 = [];
		urlEvoimg3 = [[],[]];


		pokeprimUrl = rfetch + pokeprim;
		pokesecond = data.chain.evolves_to;
		lSecond = pokesecond.length;
		if (pokesecond.length !== 0) {
			for (let i = 0; i < pokesecond.length; i++) {

				pokesecondUrl[i] = rfetch + pokesecond[i].species.name;
				let pokepeticion1 = pokesecondUrl[i];
				pokeEvourlimg2(i, pokepeticion1)
				pokethird = pokesecond[i].evolves_to
				if (pokethird.length !== 0) {
					lThird[i] = 0;
					for (let j = 0; j < pokethird.length; j++) {
						pokethirdUrl[i][j] = rfetch + pokethird[j].species.name
						let pokepeticion2 = pokethirdUrl[i][j];
						pokeEvourlimg3(i, j, pokepeticion2);
						lThird[i] += 1;
					}


				} else {
					console.log("No hay tercera evolucion")

				}


			}
		} else {
			console.log("No hay segunda evolucion")
		}

		pokeEvourlimg1(pokeprimUrl);




	} catch (error) {
		console.log(error);
	}


}



const pokeEvourlimg1 = async (url2) => {

	try {
		const res = await fetch(url2);
		const data = await res.json();
		let nombre = data.name;
		let dataimg = data.sprites.other.dream_world.front_default;
		let dataimg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

		if (dataimg !== null) {
			urlEvoimg1 = dataimg;

		} else {
			urlEvoimg1 = dataimg2;
		}
		nameEvoimg1 = nombre;

	} catch (error) {
		console.log(error);
	}
}



const pokeEvourlimg2 = async (index, url3) => {

	try {
		const res = await fetch(url3);
		const data = await res.json();
		let dataimg = data.sprites.other.dream_world.front_default;
		let nombre = data.name;
		let dataimg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;


		if (dataimg !== null) {
			urlEvoimg2[index] = dataimg;

		} else {
			urlEvoimg2[index] = dataimg2;
		}
		nameEvoimg2[index] = nombre;




	} catch (error) {
		console.log(error);
	}
}


const pokeEvourlimg3 = async (index1, index2, url4) => {

	try {


		const res = await fetch(url4);
		const data = await res.json();
		let dataimg = data.sprites.other.dream_world.front_default;
		let nombre = data.name;
		let dataimg2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;


		if (dataimg !== null) {
			urlEvoimg3[index1][index2] = dataimg;

		} else {
			urlEvoimg3[index1][index2] = dataimg2;
		}

		nameEvoimg3[index1][index2] = nombre;
	} catch (error) {
		console.log(error);
	}
}

//#endregion
//#region Imagen Principal
const pokemonimg = (pokemon) => {

	let flex = caratula1;
	let template = document.getElementById("tem4").content;
	let clone = template.cloneNode(true);
	let fragment = document.createDocumentFragment();
	let color1 = typecolores[pokemon.tipo[0].type.name].color1;
	let color11 = typecolores[pokemon.tipo[0].type.name].color2;
	let color2 = pokemon.tipo[1] ? typecolores[pokemon.tipo[1].type.name].color1 : typecolores[pokemon.tipo[0].type.name].color1;
	let alt1 = (parseFloat(pokedatos.altura).toFixed(2)) / 10;
	let pes1 = (parseFloat(pokedatos.peso).toFixed(2)) / 10;
	let id1 = pokedatos.pokeid
	let nombre = pokedatos.nombre



	style1.setProperty('--altura1', ("'" + alt1 + "m" + "'"));
	style1.setProperty('--peso1', ("'" + pes1 + "kg" + "'"));
	style1.setProperty('--id', ("' #" + id1 + "-" + (nombre.toUpperCase()) + "'"));
	style1.setProperty('--colorbg', color1);
	style1.setProperty('--colora', color11);
	style1.setProperty('--colorb', color2);





	clone.querySelector(".pokeImg").setAttribute("src", pokemon.imgSVG);
	flex.innerHTML = '';

	fragment.appendChild(clone);
	flex.appendChild(fragment);
};


//#endregion
//#region Estadísticas
const stats1 = () => {

	let flex = contentinfo1;
	let template = document.getElementById("tem1").content;
	let clone1 = template.cloneNode(true);
	let fragment = document.createDocumentFragment();
	flex.innerHTML = '';
	fragment.appendChild(clone1);
	flex.appendChild(fragment);
};

const ponerDescripcion1 = (textDes, textNick) => {
	let flex = contentinfo1;
	let template = document.getElementById("tem6").content;
	let clone1 = template.cloneNode(true);



	clone1.querySelector('.contenedorDesc').innerHTML = `<h2 class="Tdesc" id="Tds1">${textNick}
    </h2>
    <p class="Tsobre" id="Tnn1">
${textDes}
    </p>`;


	let fragment = document.createDocumentFragment();
	flex.innerHTML = '';
	fragment.appendChild(clone1);
	flex.appendChild(fragment);
	speechSynthesis.cancel();
	leerDescripcion1(textDes, textNick,pokedatos.nombre);
}
const leerDescripcion1 = (textDes, textNick,nombre) => {
	let utterance1 = new SpeechSynthesisUtterance(nombre+"el"+textNick);
	let utterance2 = new SpeechSynthesisUtterance(textDes);
	speechSynthesis.speak(utterance1);
	utterance2.rate = 1.5;
	speechSynthesis.speak(utterance2);


}
//#endregion
//#region Información
const info1 = () => {


	let flex = contentinfo1;
	let template = document.getElementById("tem2").content;
	let clone1 = template.cloneNode(true);
	let fragment = document.createDocumentFragment();
	let color1 = typecolores[pokedatos.tipo[0].type.name].color1;
	let color11 = typecolores[pokedatos.tipo[0].type.name].color2;
	let color2 = pokedatos.tipo[1] ? typecolores[pokedatos.tipo[1].type.name].color1 : "black";
	let color21 = pokedatos.tipo[1] ? typecolores[pokedatos.tipo[1].type.name].color2 : "black";
	let tipo1 = pokedatos.tipo[0].type.name;
	let tipo2 = pokedatos.tipo[1] ? pokedatos.tipo[1].type.name : ""




	style1.setProperty('--tipo1', ("'" + tipo1.toUpperCase() + "'"));
	style1.setProperty('--tipo2', ("'" + tipo2.toUpperCase() + "'"));
	style1.setProperty('--typeColor1', color1);
	style1.setProperty('--typeColor11', color11);
	style1.setProperty('--typeColor2', color2);
	style1.setProperty('--typeColor21', color21);
	style1.setProperty('--habContent', ("'" + pokedatos.habilidades + "'"));
	style1.setProperty('--xpContent', ("'" + pokedatos.experiencia + "'"));
	style1.setProperty('--habit', "'" + habiName + "'")

	flex.innerHTML = '';

	fragment.appendChild(clone1);
	flex.appendChild(fragment);
};
const se1 = () => {


	let flex = contentinfo1;
	let template = document.getElementById("tem3").content;
	let clone1 = template.cloneNode(true);
	let fragment = document.createDocumentFragment();


	flex.innerHTML = '';
	fragment.appendChild(clone1);
	flex.appendChild(fragment);
};





const evoimg1 = () => {
	evoPosi = 0;
	paintevo();
}


//#endregion
//#region Pintar evoluciones
const paintevo = () => {
	let flex = contentinfo1;
	let template = document.getElementById("tem5").content;
	let clone1 = template.cloneNode(true);
	let fragment = document.createDocumentFragment();
	let nombre1 = nameEvoimg1;
	let tamaño3 = lThird.length;
	let tamaño2 = lSecond;

	if (evoPosi == 0) {


		clone1.querySelector('.contentEvo').innerHTML = `<div class="pokeEvo"><img src="${urlEvoimg1}" /> 
   <h3>${nombre1.charAt(0).toUpperCase() + nombre1.slice(1)}</h3>`;
		style1.setProperty('--imgScale', 2);



	} else if (evoPosi == 1) {


		if (urlEvoimg2.length > 3 && urlEvoimg2.length < 5) {
			style1.setProperty('--imgScale', 1.2);

		} else if (urlEvoimg2.length >= 5) {
			style1.setProperty('--imgScale', 1);
		} else if (urlEvoimg2.length <= 3) {
			style1.setProperty('--imgScale', 2);
		}

		let doc1 = ``;
		for (let i = 0; i < urlEvoimg2.length; i++) {

			doc1 = doc1 + `<div class="pokeEvo"><img src="${urlEvoimg2[i]}" id="simg${i}" /> 
    <h3 id="snomb${i}">${nameEvoimg2[i].charAt(0).toUpperCase() + nameEvoimg2[i].slice(1)}</h3></div>`;


		}
		clone1.querySelector('.contentEvo').innerHTML = doc1;




	} else if (evoPosi == 2) {
		let doc2 = ``;
		i = 0;



		if (lThird.length > 1) {

			if (urlEvoimg2.length > 3 && urlEvoimg2.length < 5) {
				style1.setProperty('--imgScale', 1);

			} else if (urlEvoimg2.length >= 5) {
				style1.setProperty('--imgScale', 0.8);
			} else if (urlEvoimg2.length <= 3) {
				style1.setProperty('--imgScale', 1.5);
			}

			lThird.forEach(element => {
				doc2 = doc2 + `<div class="pokeEvo"><img src="${urlEvoimg3[i][0]}" /> 
  <h3>${nameEvoimg3[i][0].charAt(0).toUpperCase() + nameEvoimg3[i][0].slice(1)}</h3>
  <p>Evolución de: ${nameEvoimg2[i].charAt(0).toUpperCase() + nameEvoimg2[i].slice(1)}</p></div>`;


				i++

			});
			clone1.querySelector('.contentEvo').innerHTML = doc2;


		} else {

			clone1.querySelector('.contentEvo').innerHTML = `<div class="pokeEvo"><img src="${urlEvoimg3[0][0]}" /> 
  <h3>${nameEvoimg3[0][0].charAt(0).toUpperCase() + nameEvoimg3[0][0].slice(1)}</h3></div>`;
			style1.setProperty('--imgScale', 2);


		}




	} else {


	}

	flex.innerHTML = '';
	fragment.appendChild(clone1);
	flex.appendChild(fragment);


}
//#endregion
//#region Grafica
const graph1 = () => {
	const labels = [
		'hp',
		'attack',
		'defense',
		'special-attack',
		'special-defense',
		'speed',
	];

	const data = {
		labels: labels,
		datasets: [{
			label: '',
			backgroundColor: ['#BF0000', '#ADFF2F', '#EA9F07', '#1DEA07', '#B700B7', '#FFFF06'],
			borderColor: 'white',
			data: !!pokedatos ? [pokedatos.hp, pokedatos.ataque, pokedatos.defensa, pokedatos.especialA, pokedatos.especialD, pokedatos.vel] : [],
		}]
	};

	const config = {
		type: 'bar',
		data: data,
		options: {}
	};

	const myChart = new Chart(
		document.getElementById('Graf1'),
		config
	);
}
//#endregion 