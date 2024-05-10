import { api } from ".";
import Programme from "../type/Programme";

export async function getProgrammes(page: number = 0): Promise<Programme[]> {
  try {
    const response = await api.get(`/programme?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProgramme(id: number): Promise<Programme> {
  try {
    const response = await api.get(`/programme/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createProgramme(programme: Programme) {
  try {
    const response = await api.post("/programme", programme);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateProgramme(id: number, programme: Programme) {
  try {
    const response = await api.put(`/programme/${id}`, programme);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProgramme(id: number) {
  try {
    const response = await api.delete(`/programme/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
