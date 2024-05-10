import { api } from ".";
import Association from "../type/Association";

export async function getAssociations(
  page: number = 0
): Promise<Association[]> {
  try {
    const response = await api.get(`/association?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAssociation(id: number): Promise<Association> {
  try {
    const response = await api.get(`/association/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createAssociation(association: Association) {
  try {
    const response = await api.post("/association", association);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateAssociation(id: number, association: Association) {
  try {
    const response = await api.put(`/association/${id}`, association);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteAssociation(id: number) {
  try {
    const response = await api.delete(`/association/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
