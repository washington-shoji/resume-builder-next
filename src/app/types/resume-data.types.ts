export interface ResumeOneFormInput {
	fullName: string;
	roleTitle: string;
	summary: string;
	company: string;
	timePeriod: string;
	responsibilities: string;
	icon: string;
	label: string;
	year: string;
	educationTitle: string;
	institution: string;
}

interface Heading {
	fullName: string;
	roleTitle: string;
}

interface Professional {
	company: string;
	timePeriod: string;
	responsibilities: string;
}

interface Skill {
	icon: string;
	label: string;
}

interface Education {
	year: string;
	educationTitle: string;
	institution: string;
}
