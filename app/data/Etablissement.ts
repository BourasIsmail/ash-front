import { Association } from "./Association";

export type Etablissement = {
  id: number;
  nomEtablissement: string;
  nomDirecteur: string;
  telDirecteur: string;
  email: string;
  milieu: string;
  dispoConditionStructure: boolean;
  dispoConditionFonctionnelle: boolean;
  remarques: string;
  situation: string;
  codeAutorisation: string;
  association: Association;
};

export const etablissements: Etablissement[] = [
  {
    id: 1,
    nomEtablissement: "مدرسة السلام",
    nomDirecteur: "محمد العربي",
    telDirecteur: "0612345678",
    email: "a@email.com",
    milieu: "Rural",
    dispoConditionStructure: true,
    dispoConditionFonctionnelle: true,
    remarques: "ملاحظات",
    situation: "موجود",
    codeAutorisation: "a11",
    association: {
      id: 11,
      nomAssociation: "جمعية الخير",
      nomPresident: "محمد الخير",
      telPresident: "0601020304",
      emailPresident: "test@test.com",
      adresse: "الدار البيضاء",
      dureeValidite: 5,
      dateAssembleeGenerale: "2021-09-12",
      montantPropose: 10000,
      rib: "123456789",
      province: {
        id: 1,
        name: "Tanger",
        region: {
          id: 1,
          name: "Tanger-Tétouan-Al Hoceïma",
        },
      },
    },
  },
];
