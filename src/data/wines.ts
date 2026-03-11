import wine1 from "/public/rg-main-one.jpeg"
import wine3 from "/public/rg-main-three.jpeg"
import wine2 from "/public/rg-main-two.jpeg"

export interface Wine {
	id: number
	nameKey: string
	wineryKey: string
	descKey: string
	image: ImageMetadata
	featured: boolean
	region: string
	vintage: string
}

export const wines: Wine[] = [
	{
		id: 1,
		nameKey: "catalog.wine1.name",
		wineryKey: "catalog.wine1.winery",
		descKey: "catalog.wine1.desc",
		image: wine1,
		featured: true,
		region: "Valle de Uco",
		vintage: "2021",
	},
	{
		id: 2,
		nameKey: "catalog.wine2.name",
		wineryKey: "catalog.wine2.winery",
		descKey: "catalog.wine2.desc",
		image: wine2,
		featured: true,
		region: "Luján de Cuyo",
		vintage: "2022",
	},
	{
		id: 3,
		nameKey: "catalog.wine3.name",
		wineryKey: "catalog.wine3.winery",
		descKey: "catalog.wine3.desc",
		image: wine3,
		featured: true,
		region: "San Pedro de Yacochuya",
		vintage: "2020",
	},
	{
		id: 4,
		nameKey: "catalog.wine1.name",
		wineryKey: "catalog.wine1.winery",
		descKey: "catalog.wine1.desc",
		image: wine1,
		featured: false,
		region: "Maipú",
		vintage: "2022",
	},
	{
		id: 5,
		nameKey: "catalog.wine2.name",
		wineryKey: "catalog.wine2.winery",
		descKey: "catalog.wine2.desc",
		image: wine2,
		featured: false,
		region: "Vista Flores",
		vintage: "2021",
	},
]
