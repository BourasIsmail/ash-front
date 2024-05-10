import { api } from ".";
import Etablissement from "../type/Etablissement";

export async function getEtablissements(
  page: number = 0
): Promise<Etablissement[]> {
  try {
    const response = await api.get(`/etablissement?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEtablissement(id: number): Promise<Etablissement> {
  try {
    const response = await api.get(`/etablissement/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createEtablissement(etablissement: Etablissement) {
  try {
    const response = await api.post("/etablissement", etablissement);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateEtablissement(
  id: number,
  etablissement: Etablissement
) {
  try {
    const response = await api.put(`/etablissement/${id}`, etablissement);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteEtablissement(id: number) {
  try {
    const response = await api.delete(`/etablissement/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
