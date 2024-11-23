import { Metadata } from 'next';
import OpenGraphImage from '@/public/og/test/og.jpeg';
import config from '@/libs/config';
import { openGraph } from '@/components/SEO/shared-metadata';

export function generateMetadata(
): Metadata {
	// optionally access and extend (rather than replace) parent metadata
	const previousImages = openGraph?.images ?? [];

	const metaTag = {
		title: 'Page Test',
		description: 'Page Test Description',
		url: `${config.appBaseUrl}/test`,
		images: [OpenGraphImage.src, ...previousImages],
	};

	return {
		title: metaTag.title,
		description: metaTag.description,
		alternates: {
			canonical: metaTag.url,
		},
		openGraph: {
			...openGraph,
			...metaTag,
		},
		twitter: {
			images: metaTag.images,
		},
	};
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
