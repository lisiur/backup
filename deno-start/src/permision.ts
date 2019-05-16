const { permissions, revokePermission, open, remove } = Deno;
(async () => {
  if (!permissions().write) {
    throw new Error("need write permission");
  }
  const log = await open("request.log", "a+");
  revokePermission("read");
  revokePermission("write");
  const encoder = new TextEncoder();
  await log.write(encoder.encode("hello\n"));
  await remove("request.log");
})();
