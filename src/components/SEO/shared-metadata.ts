import config from '@/libs/config';
import OpenGraphImage from '@/public/og/og.webp';

export const openGraph = {
	title: 'Thanhdc',
	description: 'Thanhdc',
	url: config.appBaseUrl,
	siteName: 'Thanhdc',
	images: [OpenGraphImage.src],
	locale: 'vi_VN',
	type: 'website',
};

export const twitter = {
	card: 'summary_large_image',
	title: 'Thanhdc',
	description: 'Thanhdc',
	siteId: '@d_congthanh',
	creator: '@d_congthanh',
	creatorId: '@d_congthanh',
	images: [OpenGraphImage.src],
};
