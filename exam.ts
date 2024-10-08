interface selectType {
	label: string;
	value: string;
}

export enum SUBJECTS_ENUM {
	ANTROPOLOGIA = "antropologia-(16)",
	ICSE = "introduccion-al-conocimiento-de-la-sociedad-y-el-estado-(icse)-(24)",
	IPC = "introduccion-al-pensamiento-cientifico-(40)",
	PENSAMIENTO_COMPUTACIONAL = "pensamiento-computacional-(90)",
	DERECHO_PRIVADO = "principios-generales-de-derecho-privado-(89)",
	TRABAJO_Y_SOCIEDAD = "trabajo-y-sociedad-(70)",
	SOCIOLOGIA = "sociologia-(14)",
	BIOLOGIA_54 = "biologia-e-introduccion-a-la-biologia-celular-(54)",
	BIOLOGIA_91 = "biologia-e-introduccion-a-la-biologia-celular-b-(91)",
	DDHH = "principios-de-derechos-humanos-y-derecho-constitucional-(50)",
	CIENCIA_POLITICA = "ciencia-politica-(22)",
	ALGEBRA = "algebra-(71)",
	ALGEBRA_A = "algebra-a-(62)",
	ANALISIS_MATEMATICO = "analisis-matematico-(72)",
	ANALISIS_MATEMATICO_A = "analisis-matematico-a-(66)",
	BIOLOGIA_08 = "biologia-(08)",
	ECONOMIA = "economia-(21)",
	FILOSOFIA = "filosofia-(42)",
	FISICA = "fisica-(03)",
	BIOFISICA = "fisica-e-introduccion-a-la-biofisica-(53)",
	HESG = "historia-economica-y-social-general-(74)",
	PROYECTUAL_I = "introduccion-al-conocimiento-proyectual-i-(46)",
	PROYECTUAL_II = "introduccion-al-conocimiento-proyectual-ii-(47)",
	MATEMATICA_51 = "matematica-(51)",
	MATEMATICA_61 = "matematica-(61)",
	PSICOLOGIA = "psicologia-(15)",
	QUIMICA = "quimica-(05)",
	SEMIOLOGIA = "semiologia-(43)",
	DIBUJO = "taller-de-dibujo-(48)",
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

export interface facultyInterface {
	faculty: string;
	careers: [
		{
			career: string;
			subjects: [{ code: string; subjectName: string }];
		},
	];
}
