import { api } from ".";
import Prestation from "../type/Prestation";

export async function getPrestations(page: number = 0): Promise<Prestation[]> {
  try {
    const response = await api.get(`/prestation?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getPrestation(id: number): Promise<Prestation> {
  try {
    const response = await api.get(`/prestation/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createPrestation(prestation: Prestation) {
  try {
    const response = await api.post("/prestation", prestation);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePrestation(id: number, prestation: Prestation) {
  try {
    const response = await api.put(`/prestation/${id}`, prestation);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deletePrestation(id: number) {
  try {
    const response = await api.delete(`/prestation/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
