export default defineEventHandler((event) => {
  console.log("server-api");
  const userData = [
    { name: "bridge", age: 12 },
    { name: "jone", age: 22 },
  ];

  return userData;
});
