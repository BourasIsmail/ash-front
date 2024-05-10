import Etablissement from "./Etablissement";

interface Encadrant {
  id: number;
  nomComplet: string;
  fonctionExerce: string;
  diplome: string;
  attestationTravail: boolean;
  anneeExp?: number;
  contTravail: boolean;
  remarqueContTravail?: string;
  licensePublic: boolean;
  remarqueLicensePublic?: string;
  natureContrat: string;
  CNSS: boolean;
  etablissement: Etablissement; // Assuming Etablissement is another interface defined elsewhere
}

export default Encadrant;
