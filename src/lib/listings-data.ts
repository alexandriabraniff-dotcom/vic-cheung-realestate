export type Listing = {
  image: string;
  price: string;
  address: string;
  neighbourhood: string;
  beds: number;
  baths: number;
  sqft: string;
  status: string;
  label: string;
};

export const allListings: Listing[] = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$1,850,000",
    address: "1201 - 1033 Marinaside Cres",
    neighbourhood: "Coal Harbour",
    beds: 2, baths: 2, sqft: "1,240",
    status: "Active",
    label: "THE HARRISON",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    price: "$2,100,000",
    address: "3205 - 939 Homer Street",
    neighbourhood: "Yaletown",
    beds: 3, baths: 2, sqft: "1,680",
    status: "Active",
    label: "SUSSEX HIGH-LINE",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    price: "$975,000",
    address: "801 - 1480 Howe Street",
    neighbourhood: "Downtown",
    beds: 1, baths: 1, sqft: "680",
    status: "Sold",
    label: "THE PACIFIC",
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    price: "$3,200,000",
    address: "2402 - 1499 W Pender Street",
    neighbourhood: "Coal Harbour",
    beds: 3, baths: 3, sqft: "2,150",
    status: "Active",
    label: "HARBOUR CENTRE",
  },
  {
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    price: "$1,450,000",
    address: "1108 - 1238 Burrard Street",
    neighbourhood: "West End",
    beds: 2, baths: 2, sqft: "1,020",
    status: "Active",
    label: "BURRARD LANDING",
  },
  {
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    price: "$1,750,000",
    address: "301 - 2118 W 1st Avenue",
    neighbourhood: "Kitsilano",
    beds: 2, baths: 2, sqft: "1,380",
    status: "Sold",
    label: "KITS BEACH RESIDENCES",
  },
];

export const extraListings: Listing[] = [
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$4,500,000",
    address: "1 - 2688 Marine Drive",
    neighbourhood: "West Vancouver",
    beds: 5, baths: 4, sqft: "4,200",
    status: "Active",
    label: "DUNDARAVE ESTATE",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    price: "$1,250,000",
    address: "2201 - 689 Abbott Street",
    neighbourhood: "Crosstown",
    beds: 2, baths: 2, sqft: "980",
    status: "Sold",
    label: "THE ESPANA",
  },
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    price: "$2,650,000",
    address: "1502 - 1499 W Georgia Street",
    neighbourhood: "West End",
    beds: 3, baths: 2, sqft: "1,820",
    status: "Active",
    label: "GEORGIA TOWERS",
  },
];
