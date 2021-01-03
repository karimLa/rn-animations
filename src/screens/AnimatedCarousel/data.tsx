export interface IProduct {
	image: string;
	name: string;
	description: string;
	price: string;
	bg: string;
}

export const product_list: IProduct[] = [
	{
		image:
			'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-hd-wireless-IigQOPQt-large.png',
		name: 'TMA-2 HD Wireless',
		description:
			'The ultimate listening experience. Highly detailed and precise sound representation, wirelessly transmitted in HD 24-bit quality, and ultra soft over-ear cushions with Alcantara and memory foam.',
		price: '350 USD',
		bg: '#16CDC1',
	},
	{
		image:
			'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-hd-DnUVYeYY-large.png',
		name: 'TMA-2 HD',
		description:
			'Highly detailed and precise sound representation and ultra soft over-ear cushions with Alcantara and memory foam for the ultimate listening experience.',
		price: '295 USD',
		bg: '#bbb',
	},
	{
		image:
			'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-comfort-stDHZL_K-large.png',
		name: 'TMA-2 Comfort',
		description:
			'Vibrant and powerful sound representation. Comfortable over-ear cushions with soft memory foam and vegan-leather makes it the most comfortable headphone for long listening sessions.',
		price: '200 USD',
		bg: '#FFAEBC',
	},
	{
		image:
			'https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-comfort-wirele-HPqzgpsm-large.png',
		name: 'TMA-2 Comfort Wireless',
		description:
			'Vibrant and powerful sound representation. Comfortable over-ear cushions, and high quality wireless audio via Bluetooth 5.0, makes it the ideal choice for long listening sessions.',
		price: '235 USD',
		bg: '#65bccc',
	},
];
