export const getU = async () => {
  const response = await fetch("http://localhost:3002/");
  const result = await response.json();
  return result;
};

export const createU = async (options) => {
  const response = await fetch("http://localhost:3002/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.JSON();
  return result;
};

export const deleteU = async (id) => {
  const response = await fetch(`http://localhost:3002/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const updateU = async (id, options) => {
  const response = await fetch(`http://localhost:3002/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = await response.json();
  return result;
};
