export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    import("./4-user-promise").then((module) =>
      module.default(firstName, lastName)
    ),
    import("./5-photo-reject").then((module) => module.default(fileName)),
  ]).then((res) =>
    res.map((o) => ({
      status: o.status,
      value: o.status === "fulfilled" ? o.value : String(o.reason),
    }))
  );
}
