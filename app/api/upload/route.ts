// apiService.ts
export const uploadImage = (file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Simulate a delay for the upload process
    setTimeout(() => {
      // In a real scenario, you would perform the actual file upload logic here

      // Resolve the Promise to simulate successful upload
      resolve();
    }, 2000); // Simulating a 2-second upload delay
  });
};

// components/apiUtils.ts
export const makeApiRequest = async (
  endpoint: string,
  method: string,
  data?: any
) => {
  const response = await fetch(`/api/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
};
