/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.dribbble.com', // TODO: Remove placeholder config
				port: '',
			},
		],
	},
};

export default nextConfig;
