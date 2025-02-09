/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dribbble.com', // TODO: Remove placeholder config
				port: '',
			},
			{
				protocol: 'https',
				hostname: 's3.amazonaws.com', // TODO: Remove placeholder config
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'i.postimg.cc', // TODO: Remove placeholder config
				port: '',
			},
		],
	},
};

export default nextConfig;
