import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({enabled: process.env.ANALYZE === 'true'})

export default withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks']
	},
	transpilePackages: ['@tanstack/query-core']
})
