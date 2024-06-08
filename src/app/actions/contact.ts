'use server';

export const addContact = async (formData: FormData) => {
  console.log(`formData: ${JSON.stringify(formData)}`);
  return JSON.stringify(formData);
};
