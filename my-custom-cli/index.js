#!/usr/bin/env node

const OS = require('node:os');
const inquirer = require('inquirer');
// const yargs = require('yargs');

// const { argv } = yargs(process.argv);

console.log(OS.cpus().length);

console.log('Pokedex JA Command Line Interface executed');

const printFiveMoves = async (pokemonName) => {
	const response = await fetch(
		'https://pokeapi.co/api/v2/pokemon/' + pokemonName
	);
	const pokemon = await response.json();
	const list = pokemon.moves.map(({ move }) => move.name).slice(0, 5);
	console.log(list);
};

const prompt = inquirer.createPromptModule();

prompt([
	{
		type: 'input',
		name: 'pokemon',
		message: 'Enter name of pokemon character',
	},
])
	.then((answers) => {
		const pokemon = answers.pokemon;
		printFiveMoves(pokemon);
	})
	.catch((error) => {
		console.log(error);
	});

// printFiveMoves(argv.pokemon);
