export interface selectInterface {
	code: string;
	label: string;
	value: string;
	short: string;
	long: string;
	departments: Array<departmentInterface>;
}

export interface departmentInterface {
	label: string;
	value: string;
}

export const subjects: Array<selectInterface> = [
	{
		code: "16",
		label: "Antropología (16)",
		value: "antropologia-(16)",
		short: "Antropología",
		long: "Antropología",
		departments: [
			{
				label: "(Cátedra: VARGAS, Patricia)",
				value: "catedra-vargas-patricia",
			},
		],
	},
	{
		code: "24",
		short: "ICSE",
		long: "Introducción al Conocimiento de la Sociedad y el Estado",
		label:
			"Introducción al Conocimiento de la Sociedad y el Estado (ICSE) (24)",
		value:
			"introduccion-al-conocimiento-de-la-sociedad-y-el-estado-(icse)-(24)",
		departments: [
			{
				label: "(Cátedra: PEDROSA, Fernando)",
				value: "catedra-pedrosa-fernando",
			},
		],
	},
	{
		code: "40",
		short: "IPC",
		long: "Introducción al Pensamiento Científico",
		label: "Introducción al Pensamiento Científico (40)",
		value: "introduccion-al-pensamiento-cientifico-(40)",
		departments: [
			{
				label: "(Cátedra: BUACAR, Natalia)",
				value: "catedra-buacar-natalia",
			},
			{
				label: "(Cátedra: VIZIOLI, Nicolás)",
				value: "catedra-vizioli-nicolas",
			},
		],
	},
	{
		code: "90",
		label: "Pensamiento Computacional (90)",
		value: "pensamiento-computacional-(90)",
		short: "Pensamiento Computacional",
		long: "Pensamiento Computacional",
		departments: [
			{
				label: "(Cátedra: BALBIANO, José Luis)",
				value: "catedra-balbiano-jose-luis",
			},
		],
	},
	{
		code: "89",
		short: "Derecho Privado",
		long: "Principios Generales de Derecho Privado",
		label: "Principios Generales de Derecho Privado (89)",
		value: "principios-generales-de-derecho-privado-(89)",
		departments: [
			{
				label: "(Cátedra: GENOVESI, Mariano)",
				value: "catedra-genovesi-mariano",
			},
		],
	},
	{
		code: "70",
		short: "Trabajo y Sociedad",
		long: "Trabajo y Sociedad",
		label: "Trabajo y Sociedad (70)",
		value: "trabajo-y-sociedad-(70)",
		departments: [
			{
				value: "catedra-de-gisi-ricardo",
				label: "(Cátedra: DE GISI, Ricardo)",
			},
		],
	},
	{
		code: "14",
		label: "Sociología (14)",
		value: "sociologia-(14)",
		short: "Sociología",
		long: "Sociología",
		departments: [
			{
				value: "catedra-a-bustos-juan",
				label: "(Cátedra A: BUSTOS, Juan)",
			},
		],
	},
	//biologias
	{
		code: "54",
		label: "Biología e Introducción a la Biología Celular (54)",
		value: "biologia-e-introduccion-a-la-biologia-celular-(54)",
		short: "Biología (54)",
		long: "Biología e Introducción a la Biología Celular (54)",
		departments: [
			{
				label: "(Cátedra B: RODRÍGUEZ FERMEPIN, Martín)",
				value: "catedra-rodriguez-fermepin-martin",
			},
		],
	},
	{
		code: "91",
		label: "Biología e Introducción a la Biología Celular B (91)",
		value: "biologia-e-introduccion-a-la-biologia-celular-b-(91)",
		short: "Biología (91)",
		long: "Biología e Introducción a la Biología Celular B (91)",
		departments: [
			{
				label: "(Cátedra B: RODRÍGUEZ FERMEPIN, Martín)",
				value: "catedra-rodriguez-fermepin-martin",
			},
		],
	},
	{
		code: "50",
		short: "DDHH y Derecho Constitucional",
		long: "Principios de Derechos Humanos y Derecho Constitucional",
		label: "Principios de Derechos Humanos y Derecho Constitucional (50)",
		value: "principios-de-derechos-humanos-y-derecho-constitucional-(50)",
		departments: [
			{
				label: "(Cátedra: RINALDI, Luciano)",
				value: "catedra-rinaldi-luciano",
			},
		],
	},
];

/*{
		label: "Álgebra (71)",
		value: "algebra-(71)",
	},
	{
		label: "Álgebra A (62)",
		value: "algebra-a-(62)",
	},
	{
		label: "Análisis Matemático (72)",
		value: "analisis-matematico-(72)",
	},
	{
		label: "Análisis Matemático A (66)",
		value: "analisis-matematico-a-(66)",
	},*/

/*
	{
		label: "Biología (08)",
		value: "biologia-(08)",
	},
	{
		label: "Ciencia Política (22)",
		value: "ciencia-politica-(22)",
	},
	{
		label: "Economía (21)",
		value: "economia-(21)",
	},
	{
		label: "Filosofía (42)",
		value: "filosofia-(42)",
	},
	{
		label: "Física (03)",
		value: "fisica-(03)",
	},
	{
		label: "Física e Introducción a la Biofísica (53)",
		value: "fisica-e-introduccion-a-la-biofisica-(53)",
	},
	{
		label: "Historia Económica y Social General (74)",
		value: "historia-economica-y-social-general-(74)",
	},*/

/*
	{
		label: "Introducción al Conocimiento Proyectual I (46)",
		value: "introduccion-al-conocimiento-proyectual-i-(46)",
	},
	{
		label: "Introducción al Conocimiento Proyectual II (47)",
		value: "introduccion-al-conocimiento-proyectual-ii-(47)",
	},*/

/*
	{
		label: "Matemática (51)",
		value: "matematica-(51)",
	},
	{
		label: "Matemática (61)",
		value: "matematica-(61)",
	},
	*/

/*
	{
		label: "Psicología (15)",
		value: "psicologia-(15)",
	},
	{
		label: "Química (05)",
		value: "quimica-(05)",
	},
	{
		label: "Semiología (43)",
		value: "semiologia-(43)",
	},
	
	{
		label: "Taller de Dibujo (48)",
		value: "taller-de-dibujo-(48)",
	},
	*/
