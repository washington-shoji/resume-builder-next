import {
	FaEnvelope,
	FaLink,
	FaLinkedin,
	FaMobileAlt,
	FaCss3Alt,
	FaGithub,
	FaHtml5,
	FaNode,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Icon } from '../types/resume-data.types';

// TODO: Need to figure a better way to organise those icon arrays
export const icons: Icon[] = [
	{
		Icon: FaEnvelope,
		iconLabel: 'email',
	},
	{
		Icon: FaMobileAlt,
		iconLabel: 'phone',
	},
	{
		Icon: FaLinkedin,
		iconLabel: 'linkedin',
	},
	{
		Icon: FaLink,
		iconLabel: 'personal-link',
	},
	{
		Icon: SiTailwindcss,
		iconLabel: 'tailwind',
	},
	{
		Icon: FaGithub,
		iconLabel: 'github',
	},
	{
		Icon: FaHtml5,
		iconLabel: 'html',
	},
	{
		Icon: FaNode,
		iconLabel: 'node',
	},
	{
		Icon: FaCss3Alt,
		iconLabel: 'css',
	},
];

export const skillIcons: Icon[] = [
	{ Icon: SiTailwindcss, iconLabel: 'tailwind' },
	{
		Icon: FaGithub,
		iconLabel: 'github',
	},
	{
		Icon: FaHtml5,
		iconLabel: 'html',
	},
	{
		Icon: FaNode,
		iconLabel: 'node',
	},
	{ Icon: FaCss3Alt, iconLabel: 'css' },
];

export const contactInfoLabels: Icon[] = [
	{
		Icon: FaEnvelope,
		iconLabel: 'email',
	},
	{
		Icon: FaMobileAlt,
		iconLabel: 'phone',
	},
	{
		Icon: FaLinkedin,
		iconLabel: 'linkedin',
	},
	{
		Icon: FaLink,
		iconLabel: 'personal-link',
	},
];
