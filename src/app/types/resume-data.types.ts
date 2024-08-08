import { IconType } from 'react-icons';

export interface ResumeOneFormInput {
	personalData?: {
		heading?: Heading;
		contact?: Contact[];
	};
	professionalData?: Professional[];
	skillData?: Skill[];
	educationalData?: Education[];
}

export interface Heading {
	fullName?: string;
	roleTitle?: string;
	summary?: string;
}

export interface Contact {
	iconLabel?: string;
	contactInfo?: string;
}

export interface Professional {
	company?: string;
	timePeriod?: string;
	responsibilities?: string;
}

export interface Skill {
	iconLabel?: string;
	label?: string;
}

export interface Education {
	year?: string;
	educationTitle?: string;
	institution?: string;
}

export type Icon = {
	Icon: IconType;
	iconLabel: string;
};
