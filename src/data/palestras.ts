export interface propsPalestras {
  name: string;
  firstEvent: string;
  date: Date;
  cover?: string,
  files?: {pptx: string, pdf: string};
}

export const PalestrasData: propsPalestras[] = [
  {
    name: "Importância do Networking em início de carreira",
    firstEvent: "Construindo uma carreira em Tech - Thafin Community",
    date: new Date(2022, 8, 17),
    cover: '/files/importanciaNetworking/cover.png',
    files: {
        pptx:'/files/importanciaNetworking/networking.pptx',
        pdf:'/files/importanciaNetworking/networking.pdf'
    },
  },
];
