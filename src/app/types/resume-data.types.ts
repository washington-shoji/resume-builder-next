export interface ResumeOneFormInput {
	personalData?: {
		heading?: Heading;
		contact?: Contact;
	};
	professionalData?: Professional;
	skillData?: Skill;
	educationalData?: Education;
}

interface Heading {
	fullName?: string;
	roleTitle?: string;
	summary?: string;
}

interface Contact {
	email?: string;
	phoneNumber?: string;
	githubLink?: string;
	linkedInLink?: string;
	personalWebsiteLink?: string;
}

interface Professional {
	company?: string;
	timePeriod?: string;
	responsibilities?: string;
}

interface Skill {
	icon?: string;
	label?: string;
}

interface Education {
	year?: string;
	educationTitle?: string;
	institution?: string;
}
