import Province from "./Province";

interface Association {
  id: number;
  nomAssociation: string;
  nomPresident: string;
  telPresident: string;
  emailPresident: string;
  adresse: string;
  dureeValidite?: number;
  dateAssembleGeneral?: string;
  benefPremFois: boolean;
  montantPropose: number;
  rib: string;
  province: Province; // Assuming Province is another interface defined elsewhere
}

export default Association;
