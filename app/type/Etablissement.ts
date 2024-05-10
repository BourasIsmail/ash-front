import Association from "./Association";
import Beneficiaire from "./Beneficiaire";
import Programme from "./Programme";

interface Etablissement {
  id: number;
  nomEtablissement: string;
  nomDirecteur: string;
  telDirecteur: string;
  email: string;
  milieu: string;
  dispoConditionStruct: boolean;
  dispoConditionFonc: boolean;
  remarque?: string;
  situation: string;
  codeAutorisation: string;
  association: Association; // Assuming Association is another interface defined elsewhere
  beneficiaires: Beneficiaire[]; // Assuming Beneficiaire is another interface defined elsewhere
  programme: Programme; // Assuming Programme is another interface defined elsewhere
}

export default Etablissement;
