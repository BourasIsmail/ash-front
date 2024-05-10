import { api } from ".";
import Beneficiaire from "../type/Beneficiaire";

export async function getBeneficiaires(
  page: number = 0
): Promise<Beneficiaire[]> {
  try {
    const response = await api.get(`/beneficiaire?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getBeneficiaire(id: number): Promise<Beneficiaire> {
  try {
    const response = await api.get(`/beneficiaire/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createBeneficiaire(beneficiaire: Beneficiaire) {
  try {
    const response = await api.post("/beneficiaire", beneficiaire);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateBeneficiaire(
  id: number,
  beneficiaire: Beneficiaire
) {
  try {
    const response = await api.put(`/beneficiaire/${id}`, beneficiaire);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBeneficiaire(id: number) {
  try {
    const response = await api.delete(`/beneficiaire/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
