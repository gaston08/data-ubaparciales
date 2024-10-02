interface selectType {
	label: string;
	value: string;
}

export const faculties: Array<selectType> = [
	{ label: "CBC UBA XXI", value: "cbc-uba-xxi" },
	{ label: "CBC Presencial", value: "cbc-presencial" },
];

export enum SUBJECTS_ENUM {
	PENSAMIENTO_CIENTIFICO = "introduccion-al-pensamiento-cientifico-(40)",
	SOCIEDAD_Y_ESTADO = "introduccion-al-conocimiento-de-la-sociedad-y-el-estado-(icse)-(24)",
	TRABAJO_Y_SOCIEDAD = "trabajo-y-sociedad-(70)",
}

export const years: Array<number> = [
	2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
];

export const exam_types: Array<selectType> = [
	{
		label: "1er Parcial",
		value: "primer_parcial",
	},
	{
		label: "2do Parcial",
		value: "segundo_parcial",
	},
	{
		label: "Recuperatorio 1er Parcial",
		value: "recuperatorio_primer_parcial",
	},
	{
		label: "Recuperatorio 2do Parcial",
		value: "recuperatorio_segundo_parcial",
	},
	{
		label: "Final",
		value: "final",
	},
];

export const exam_numbers: Array<number> = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export const faculties = [
	"Facultad de Agronomía",
	"Facultad de Arquitectura, Diseño y Urbanismo",
	"Facultad de Ciencias Económicas",
	"Facultad de Ciencias Exactas y Naturales",
	"Facultad de Ciencias Sociales",
	"Facultad de Ciencias Veterinarias",
	"Facultad de Derecho",
	"Facultad de Farmacia y Bioquímica",
	"Facultad de Filosofía y Letras",
	"Facultad de Ingeniería",
	"Facultad de Medicina",
	"Facultad de Odontología",
	"Facultad de Psicología",
];
