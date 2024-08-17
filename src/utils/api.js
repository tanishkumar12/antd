export const getInititialData = async () => {
  try {
    const dt = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await dt.json();
    const tempData = response.map((elem) => {
      return {
        key: elem.id,
        id: elem.id,
        name: elem.name,
        email: elem.email,
        username: elem.username,
      };
    });
    return tempData;
  } catch (error) {
    console.log(error);
    return null;
  }
};
