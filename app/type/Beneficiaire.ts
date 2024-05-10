import Etablissement from "./Etablissement";
import Prestation from "./Prestation";
import Programme from "./Programme";

interface Beneficiaire {
  id: number;
  nom: string;
  dateNaissance: string;
  sexe: string;
  typeHandicap: string[];
  certifScolarite: boolean;
  certifInaptitude: boolean;
  certifHandicap: boolean;
  certifMedical: boolean;
  certifAMO: boolean;
  RSU: boolean;
  etablissement: Etablissement; // Assuming Etablissement is another interface defined elsewhere
  programme: Programme; // Assuming Programme is another interface defined elsewhere
  prestations: Prestation[]; // Assuming Prestation is another interface defined elsewhere
}

export default Beneficiaire;
