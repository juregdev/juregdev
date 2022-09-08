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
    cover: '/assets/docs/palestras/networking/cover.png',
    files: {
        pptx:'/assets/docs/palestras/networking/networking.pptx',
        pdf:'/assets/docs/palestras/networking/networking.pdf'
    },
  },
];
